Using Docker with PufferPanel
=============================

First, install Docker on the node. Please follow Docker's installation instructions located at https://docs.docker.com/engine/install/. When using Ubuntu, do not install Docker using its snap package, as it will not have permission to write into `/var/lib/pufferpanel`. 

Next, add the docker group (if not there) and add pufferpanel as a user of this group.

.. code::

   sudo groupadd --force --system docker
   sudo usermod -a -G docker pufferpanel

Restart PufferPanel.

.. code::

   systemctl restart pufferpanel
