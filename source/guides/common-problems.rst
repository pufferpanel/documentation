Common Problems
===============

OAuth2 Authentication
^^^^^^^^^^^^^^^^^^^^^
To receive an OAuth2 token that lets you actually access the API, you need to make a ``POST`` request to the ``/oauth2/token`` endpoint.
The body *must* be in ``application/x-www-form-urlencoded`` format, *JSON is not supported by that endpoint*.
You have to send three fields in the body, ``grant_type``, which is always ``client_credentials``, ``client_id`` which is your OAuth2 client ID and ``client_secret`` which is your OAuth2 client secret.
In curl, it could look something like this: ``curl -X POST -H 'Content-Type: application/x-www-form-urlencoded' -d 'grant_type=client_credentials&client_id=XXXXXXXX&client_secret=YYYYYYYY' panel.example.com/oauth2/token``.
The response to that will hold a token, this token will only be valid for a limited time, after it expires you'll have to get a new token.
To make requests to the PufferPanel API that need authentication, you need to set the ``Authorization`` header to ``Bearer <token>`` where ``<token>`` is the token you got from the process above, please note the ``Bearer`` prefix, or it won't work.

.. note::
     For any endpoint that starts with ``/daemon`` your OAuth2 tokens will _not_ be valid directly, instead prefix those endpoints with ``/proxy`` for your tokens to be accepted (this will also take care of routing requests to the correct node for you), for example ``/daemon/server/abcdef/console`` becomes ``/proxy/daemon/server/abcdef/console``.

Oracle Cloud Hosting (including their free plan)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Oracles default server setup (regardless of the OS you choose) is built to double up on firewalls in a non-obvious way.
First, make sure that all ports you need to access (PufferPanel uses 8080 and 5657) are forwarded to the server on their web interface.
The second level of firewall is directly on the server, so log in to it via SSH and run ``sudo iptables -L -n``, this will result in output similar to the following:

.. code-block:: bash

    Chain INPUT (policy ACCEPT)
    target     prot opt source               destination
    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0            state RELATED,ESTABLISHED
    ACCEPT     icmp --  0.0.0.0/0            0.0.0.0/0
    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0
    ACCEPT     udp  --  0.0.0.0/0            0.0.0.0/0            udp spt:123
    ACCEPT     tcp  --  0.0.0.0/0            0.0.0.0/0            state NEW tcp dpt:22
    REJECT     all  --  0.0.0.0/0            0.0.0.0/0            reject-with icmp-host-prohibited

The block starting with ``Chain INPUT`` is the one you want to look at, the lines after that are a table of rules in that chain.
The first line of that table are the column names, look for any lines that have target ``REJECT`` or ``DROP``, prot ``all`` and source ``0.0.0.0/0``.
Any such lines will prevent incoming traffic, seeing as there already is a firewall outside the server. However, this is pointless, so the easiest option is to remove that rule.
To remove a rule, you have to count at what position in its chain it is, the first rule in a chain is number 1. In the above example, the rule preventing incoming traffic therefore is number 6. You can remove a rule with the command ``sudo iptables -D INPUT n`` where ``n`` is your rule number (so in the example it would end up as ``sudo iptables -D INPUT 6``).
Just removing the rule is not permanent though and the rule will come back after every server restart, so after removing the rule, run ``sudo netfilter-persistent save`` for the change to be saved.


Stuck on Got AppInfo for ...
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This is due to the version of “Depot Downloader” in use being outdated, even one version older and it stops working.  Luckily, the changes between them shouldn't break anything, so we can try to just stick the most recent version in, if you want to do that, make sure that ``unzip`` and ``curl`` are installed on the container.

.. note::

  This needs to be ran as root.

.. code-block:: console
    
    export DD_VERSION=3.4.0
    curl https://github.com/SteamRE/DepotDownloader/releases/download/DepotDownloader_$DD_VERSION/DepotDownloader-linux-x64.zip -L -o /tmp/dd.zip
    unzip /tmp/dd.zip -d /tmp/dd
    rm /var/lib/pufferpanel/binaries/depotdownloader/DepotDownloader
    mv /tmp/dd/DepotDownloader /var/lib/pufferpanel/binaries/depotdownloader/DepotDownloader
    chown pufferpanel:pufferpanel /var/lib/pufferpanel/binaries/depotdownloader/DepotDownloader
    rm -r /tmp/dd.zip /tmp/dd

Otherwise, you can use “Depo Downloader” or SteamCMD outside PufferPanel to get the server files and SFTP them to the PufferPanel server to get around the installation button.
