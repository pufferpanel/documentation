OVH Servers
===========

You should check your partitioning scheme to see how it is laid out. Some default OVH partition setups give most of the available disk space to /home. If this is the case, prior to migration please find the following line in /etc/pufferd/config.json

.. code::

   "serverfolder": "/var/lib/pufferd/servers",

and change it to

.. code::

   "serverfolder": "/home/pufferd/servers",

and run the following commands

.. code::

   mkdir /home/pufferd
   chown -R pufferd:pufferd /home/pufferd
