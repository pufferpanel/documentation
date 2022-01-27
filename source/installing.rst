Installing PufferPanel
======================


System Requirements
-------------------

* A VPS or Dedicated server (32-bit *IS NOT* supported)
* SSH access and administrative (root or sudo) privileges on the server
* One of the following operating systems:

+-----------------------+-------+----------------+
| OS/Version            | AMD64 | ARM            |
+=======================+=======+================+
| Centos 7              | Yes   | No             |
+-----------------------+-------+----------------+
| Centos 8              | Yes   | No             |
+-----------------------+-------+----------------+
| Fedora 33             | Yes   | No             |
+-----------------------+-------+----------------+
| Ubuntu Bionic (18.04) | Yes   | No             |
+-----------------------+-------+----------------+
| Ubuntu Cosmic (18.10) | Yes   | No             |
+-----------------------+-------+----------------+
| Ubuntu Disco (19.04)  | Yes   | No             |
+-----------------------+-------+----------------+
| Ubuntu Eoan (19.10)   | Yes   | No             |
+-----------------------+-------+----------------+
| Ubuntu Focal (20.04)  | Yes   | ARM64 Only     |
+-----------------------+-------+----------------+
| Ubuntu Groovy (20.10) | Yes   | ARM64 Only     |
+-----------------------+-------+----------------+
| Debian Jessie (8)     | Yes   | No             |
+-----------------------+-------+----------------+
| Debian Stretch (9)    | Yes   | No             |
+-----------------------+-------+----------------+
| Debian Buster (10)    | Yes   | No             |
+-----------------------+-------+----------------+
| Debian Bullseye (11)  | Yes   | No             |
+-----------------------+-------+----------------+
| Raspbian Buster (10)  | No    | ARM64 & ARM32  |
+-----------------------+-------+----------------+


Installing
----------

For easiest installation, if you have one of the listed supported distributions, you con simply install our package and get going!

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


Unsupported OS/Version
----------------------
.. warn::
   This is not recommended or supported. If it breaks, you're on your own!
   
It is possible to install PufferPanel on other Debian or Red Hat based OS/Versions not listed in the table above.
For a OS/Version that is not included in the table above, you will need to add :code:`os={os} distro={version}` with a os/version that is included in the repository, to the curl command between sudo and bash. i.e.
.. code-block:: bash
         
   curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.deb.sh | sudo os=ubuntu dist=focal bash
           

Ports
-----

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
