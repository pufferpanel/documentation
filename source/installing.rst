Installing PufferPanel
======================

.. danger::

   3.x IS AN ALPHA RELEASE. THIS MEANS THERE WILL BE BUGS! USE AT YOUR OWN RISK.

.. danger::

   There is currently no migration path from 2.x to 3.x at this time. This is on the roadmap to resolve before an actual 3.x release. Do not attempt to update from 2.x to 3.x!


System Requirements
-------------------

* A VPS or Dedicated server (32-bit *IS NOT* supported)
* SSH access and administrative (root or sudo) privileges on the server
* One of the following operating systems:

+------------------------+-------+-------+-------+
| OS/Version             | AMD64 | ARM64 | AMD32 |
+========================+=======+=======+=======+
| Ubuntu Focal (20.04)   | Yes   | Yes   | No    |
+------------------------+-------+-------+-------+
| Ubuntu Jammy (22.04)   | Yes   | Yes   | No    |
+------------------------+-------+-------+-------+
| Debian Buster (10)     | Yes   | Yes   | No    |
+------------------------+-------+-------+-------+
| Debian Bullseye (11)   | Yes   | Yes   | No    |
+------------------------+-------+-------+-------+
| Raspbian Buster (10)   | No    | Yes   | Yes   |
+------------------------+-------+-------+-------+
| Raspbian Bullseye (11) | No    | Yes   | Yes   |
+------------------------+-------+-------+-------+

Ports
-----

The following ports are used by PufferPanel. Please allow traffic to/from these ports to fully use your installation.

* 8080: Web access
* 5657: SFTP

Installing
----------

For easiest installation, if you have one of the listed supported distributions, you can simply install our package and get going!.

.. tab:: DEB-based

   .. code-block:: bash

      curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.deb.sh?any=true | sudo bash
      sudo apt update
      sudo apt-get install pufferpanel

.. tab:: RPM-based

   .. code-block:: bash

      curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.rpm.sh?any=true | sudo bash
      sudo yum install pufferpanel

.. tab:: Ubuntu/Debian - Manual Repo

   .. code-block:: bash

      echo "deb https://packagecloud.io/pufferpanel/pufferpanel/any/ any main" > sudo tee /etc/apt/sources.list.d/pufferpanel.list
      sudo apt update
      sudo apt-get install pufferpanel

.. tab:: Red-Hat - Manual Repo

   .. code-block:: bash

      echo "   [pufferpanel]
    name=pufferpanel
    baseurl=https://packagecloud.io/pufferpanel/pufferpanel/rpm_any/rpm_any/$basearch
    repo_gpgcheck=1
    gpgcheck=0
    enabled=1
    gpgkey=https://packagecloud.io/pufferpanel/pufferpanel/gpgkey
    sslverify=1
    sslcacert=/etc/pki/tls/certs/ca-bundle.crt
    metadata_expire=300" > sudo tee /etc/yum.repos.d/pufferpanel.repo
      sudo yum install pufferpanel


Adding an admin
---------------

To create your first user, run the following command. Be sure to enter "Y" when it asks if this is an admin so you can fully use your panel.

.. code:: bash

   sudo pufferpanel user add


Starting the panel
------------------

.. code:: bash

   sudo systemctl enable --now pufferpanel

--------------------
Managing the service
--------------------

PufferPanel uses Systemd to manage the service, consult the man page `man systemctl` or `a guide <https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units>`_ for instructions on how to use it.

Done!
-----

And that's it! Your panel is now available on port 8080 of your server.

Additional resources:

* :doc:`Enabling SSL with Nginx <guides/ssl-setup-nginx>`
* :doc:`Running servers without Docker <environments/standard>`
* :doc:`Running servers with Docker <environments/docker>`
