Using Docker with PufferPanel
=============================

First, install Docker on the node. Please follow Docker's installation instructions located at https://docs.docker.com/get-docker/

Next, add the docker group (if not there) and add pufferpanel as a user of this group.

.. code::

   sudo groupadd --force --system docker
   sudo usermod -a -G docker pufferpanel

Restart PufferPanel.

.. code::

   systemctl restart pufferpanel
