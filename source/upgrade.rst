Upgrading PufferPanel
=====================


.. note:: The following guides assume that your are running at least PufferPanel/pufferd 1.2.0


Upgrading the Panel
^^^^^^^^^^^^^^^^^^^^^

To upgrade PufferPanel to the latest version of v1.2.x, please run the following commands as the root user, or run ``sudo -i`` to become root:

.. code::

   cd /srv
   curl -L -o pufferpanel.tar.gz https://git.io/fNZYg
   tar -xf pufferpanel.tar.gz


Upgrading pufferd
^^^^^^^^^^^^^^^^^

To upgrade pufferd to the latest version of v1.2.x, please run the following commands as the root user, or run ``sudo -i`` to become root:

.. tabs::

   .. tab:: Debian/Ubuntu

      .. code::

         apt-get update
         apt-get upgrade pufferd

   .. tab:: CentOS

      .. code::

         yum update pufferd
