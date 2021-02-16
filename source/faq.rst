Frequently Asked Questions
==========================


Q: Billing module?
^^^^^^^^^^^^^^^^^^

The development team takes the stance that any user who wishes to make money off of selling servers should be using software which has paid support or a similar guarantee to get support if and when there are issues. We also believe that such users should also use a panel which has been through numerous security audits to protect both their own information and that of their customers.

As such, we do not believe we are the best software for such a service. We do not over-sell ourselves and will not risk our own users for the sake of making money, or those that use our software in any form to make money.

While a module may occur in the future, the current panel code is not suitable for supporting such a feature.


Q: Where are my logs?
^^^^^^^^^^^^^^^^^^^^^

PufferPanel stores all of their logs in ``/var/log/pufferpanel``.


Q: Where are the servers located?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

PufferPanel stores all the servers in ``/var/lib/pufferpanel/servers``.


Q: Can I migrate from v1 to v2?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

At this time, we do not have a migration path to v2. Due to the changing nature of v2, we do not want to have to deal with rewriting migrations if we have to make changes. Once v2 is more stable, we will have a migration tool to help move from v1 to v2.

Q: How do I disable user registration?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

PufferPanel does not support disabling user registration as users are unable to do anything without being assigned a server.

If you still wish to disable registration, you can use a reverse proxy to deny access ``/auth/register`` endpoint.

Q: How do I change the panel title?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You need to modify your ``config.json`` to include ``panel.settings.companyName``.

I.E change the following from:

.. code-block:: javascript

    {
      "logs": "/var/log/pufferpanel",
      "panel": {
        "database": {
          "dialect": "sqlite3",
          "url": "file:/var/lib/pufferpanel/database.db?cache=shared"
        },
        "web": {
          "files": "/var/www/pufferpanel"
        }
      },
      "token": {
        "private": "private.pem"
      },
      "daemon": {
        "data": {
          "cache": "/var/lib/pufferpanel/cache",
          "servers": "/var/lib/pufferpanel/servers"
        }
      }
    }

To:

.. code-block:: javascript

    {
      "logs": "/var/log/pufferpanel",
      "panel": {
        "database": {
          "dialect": "sqlite3",
          "url": "file:/var/lib/pufferpanel/database.db?cache=shared"
        },
        "settings": {
            "companyName": "YOUR NEW NAME HERE"
        },
        "web": {
          "files": "/var/www/pufferpanel"
        }
      },
      "token": {
        "private": "private.pem"
      },
      "daemon": {
        "data": {
          "cache": "/var/lib/pufferpanel/cache",
          "servers": "/var/lib/pufferpanel/servers"
        }
      }
    }

Q: How do I change the ports that pufferpanel uses ? 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You need to modify your ``config.json`` to include 

``web.host`` is daemon port (8080 by default) which is also the panel port which you want to access it or reverse proxy it via a web server

``daemon.sftp.host`` is the sftp port (5657 by default) which is how you can upload/download files from the server

for more information refer config.go file in github

I.E change the following from:

.. code-block:: javascript

    {
      "logs": "/var/log/pufferpanel",
      "panel": {
        "database": {
          "dialect": "sqlite3",
          "url": "file:/var/lib/pufferpanel/database.db?cache=shared"
        },
        "settings": {
            "companyName": "YOUR NEW NAME HERE"
        },
        "web": {
          "files": "/var/www/pufferpanel"
        }
      },
      "token": {
        "private": "private.pem"
      },
      "daemon": {
        "data": {
          "cache": "/var/lib/pufferpanel/cache",
          "servers": "/var/lib/pufferpanel/servers"
        }
      }
    }

To:

.. code-block:: javascript

    {
      "logs": "/var/log/pufferpanel",
      "panel": {
        "database": {
          "dialect": "sqlite3",
          "url": "file:/var/lib/pufferpanel/database.db?cache=shared"
        },
        "web": {
          "files": "/var/www/pufferpanel"
        }
      },
      "web": {
        "host": "YOUR_IP:YOUR_PORT"
      },
      "token": {
        "private": "private.pem"
      },
      "daemon": {
        "data": {
          "cache": "/var/lib/pufferpanel/cache",
          "servers": "/var/lib/pufferpanel/servers"
        },
        "sftp": {
          "host": "YOUR_IP:YOUR_POST"
        }
      }
    }
