Installing PufferPanel
======================


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


Installing
----------

For easiest installation, if you have one of the listed supported distributions, you can simply install our package and get going!

.. tab:: Ubuntu/Debian

   .. code-block:: bash

      $ curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.deb.sh | sudo bash
      $ sudo apt-get install pufferpanel
      $ sudo systemctl enable pufferpanel         
         
.. tab:: Docker
   
   For Docker usage, please refer to :doc:`this page <installing-docker>`.


Unsupported OS/Version
----------------------
.. warning::
   This is not recommended or supported. If it breaks, you're on your own!
   
It is possible to install PufferPanel on other Debian or Red Hat based OS/Versions not listed in the table above.
For a OS/Version that is not included in the table above, you will need to add :code:`os={os} dist={version}` with a os/version that is included in the repository, to the curl command between sudo and bash. i.e.

.. tab:: DEB

   .. code-block:: bash

      $ curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.deb.sh | sudo os=ubuntu dist=jammy bash
         
.. tab:: RPM

   Installs using RPM files are a manual process. Refer to the `latest release <https://github.com/PufferPanel/PufferPanel/releases>`_ to get the RPM file.

Ports
-----

The following ports are used by PufferPanel. Please allow traffic to/from these ports to fully use your installation.

* 8080: Web access
* 5657: SFTP


Adding an admin
---------------

To create your first user, run the following command. Be sure to enter "Y" when it asks if this is an admin so you can fully use your panel.

.. code:: bash

   $ sudo pufferpanel user add


Starting the panel
------------------

.. code:: bash

   $ sudo systemctl enable --now pufferpanel

--------------------
Managing the service
--------------------

PufferPanel uses Systemd to manage the service, consult the man page `man systemctl` or `a guide <https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units>`_ for instructions on how to use it.

Done!
-----

And that's it! Your panel is now available on port 8080 of your server.

Additional resources:

* :doc:`Enabling SSL with Nginx <guides/ssl-setup-nginx>`
