Installing PufferPanel
======================


System Requirements
-------------------

* A VPS or Dedicated server (32-bit *IS NOT* supported)
* SSH access and administrative (root or sudo) privileges on the server

.. note::

    PufferPanel comes out of the box with support for the following distributions:

    * Ubuntu 20.04
    * Debian 10
    * CentOS 7
    * Raspbian 10


Installing
----------

For easiest installation, if you have one of the listed suppored distributions, you con simply install our package and get going!

.. tabs::

   .. tab:: Ubuntu/Debian

      .. code-block:: bash

         curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.deb.sh | sudo bash
         sudo apt-get install pufferpanel
         sudo systemctl enable pufferpanel

   .. tab:: CentOS

      .. code-block:: bash

         curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.rpm.sh | sudo bash
         sudo yum install pufferpanel
         sudo systemctl enable pufferpanel
         
   .. tab:: Docker
   
      For Docker usage, please refer to :doc:`this page <installing-docker>`.

The following ports are used by PufferPanel. Please allow traffic to/from these ports to fully use your installation.

* 8080: Web access
* 5657: SFTP


Adding an admin
---------------

To create your first user, run the following command. Be sure to enter "Y" when it asks if this is an admin so you can fully use your panel.

.. code::

   pufferpanel user add


Starting the panel
------------------

.. code::

   systemctl start pufferpanel


Done!
-----

And that's it! Your panel is now available on port 8080 of your server.

Additional resources:

* :doc:`Enabling SSL <guides/ssl-setup-nginx>`
* Using a database instead of file-backed storage (TODO)
