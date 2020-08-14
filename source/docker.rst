Using Docker with PufferPanel
=============================


.. admonition:: Using Docker on an OpenVZ VPS
   :class: danger

   Some VPS providers use a technology called OpenVZ for their virtualization.

   Only OpenVZ kernel version **042stab105.4** or higher support Docker. You can check your kernel version by running ``uname -a``

   We recommend using a KVM VPS or dedicated server if you are planning to use Docker.

   If you don't know if your VPS is OpenVZ or not, run ``test -e /proc/user_beancounters && echo This VPS is OpenVZ`` and see if the message "This VPS is OpenVZ" prints out.


First, install Docker on the node. Please follow Docker's installation instructions located at https://docs.docker.com/get-docker/

Next, add the docker group (if not there) and add pufferd as a user of this group.

.. code::

   sudo groupadd --force --system docker
   sudo usermod -a -G docker pufferd

Restart pufferd.

.. code::

   systemctl restart pufferd
