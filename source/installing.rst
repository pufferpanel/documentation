Installing PufferPanel
======================


System Requirements
-------------------

* A VPS or Dedicated server (32-bit *IS NOT* supported)
* SSH access and administrative (root or sudo) privileges on the server
* One of the following operating systems:

+-----------------------+-------+----------------+------------------+
| OS/Version            | AMD64 | ARM            | Included in Repo |
+=======================+=======+================+==================+
| Centos 7              | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Centos 8              | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Fedora 33             | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Ubuntu Bionic (18.04) | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Ubuntu Cosmic (18.10) | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Ubuntu Disco (19.04)  | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Ubuntu Eoan (19.10)   | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Ubuntu Focal (20.04)  | Yes   | ARM64 Only     | Yes              |
+-----------------------+-------+----------------+------------------+
| Ubuntu Groovy (20.10) | Yes   | ARM64 Only     | Yes              |
+-----------------------+-------+----------------+------------------+
| Ubuntu Hirsute (21.04)| Yes   | ARM64 Only     | No               |
+-----------------------+-------+----------------+------------------+
| Ubuntu Indri (21.10)  | Yes   | ARM64 Only     | No               |
+-----------------------+-------+----------------+------------------+
| Debian Jessie (8)     | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Debian Stretch (9)    | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Debian Buster (10)    | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Debian Bullseye (11)  | Yes   | No             | Yes              |
+-----------------------+-------+----------------+------------------+
| Raspbian Buster (10)  | No    | ARM64 & ARM32  | Yes              |
+-----------------------+-------+----------------+------------------+


Installing
----------

For easiest installation, if you have one of the listed supported distributions, you con simply install our package and get going!

.. tabs::

   .. tab:: Ubuntu/Debian

      .. code-block:: bash

         curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.deb.sh | sudo bash
         sudo apt-get install pufferpanel
         sudo systemctl enable pufferpanel
         
      .. note::
         If the OS/Version you are wanting to install PufferPanel on is not included in the PackageCloud repository, you will need to add :code:`os={os} distro={version}` with a os/version that is included in the repository, to the curl command between sudo and bash. i.e.
         :code:`curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.deb.sh | sudo os=ubuntu dist=focal bash`

   .. tab:: CentOS

      .. code-block:: bash

         curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.rpm.sh | sudo bash
         sudo yum install pufferpanel
         sudo systemctl enable pufferpanel
         
      .. note::
         If the OS/Version you are wanting to install PufferPanel on is not included in the PackageCloud repository, you will need to add :code:`os={os} distro={version}` with a os/version that is included in the repository, to the curl command between sudo and bash. i.e.
         :code:`curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.rpm.sh | sudo os=el dist=8 bash`
         
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
