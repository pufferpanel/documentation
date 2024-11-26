Creating Node
=============

To add a new node to your panel, which only runs servers and not the panel itself, follow these steps.

Requirements
------------

A node must meet the requirements defined in :doc:`Installation <../installing>`

Install on Node
---------------------------

Install the PufferPanel package onto the node.

.. tab:: DEB-based

   .. code-block:: bash

      curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.deb.sh?any=true | sudo bash
      sudo apt update
      sudo apt-get install pufferpanel

.. tab:: RPM-based

   .. code-block:: bash

      curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.rpm.sh?any=true | sudo bash
      sudo yum install pufferpanel

.. tab:: Ubuntu/Debian - Manual Repo

   .. code-block:: bash

      echo "deb https://packagecloud.io/pufferpanel/pufferpanel/any/ any main" > sudo tee /etc/apt/sources.list.d/pufferpanel.list
      sudo apt update
      sudo apt-get install pufferpanel

.. tab:: Red-Hat - Manual Repo

   .. code-block:: bash

      echo "   [pufferpanel]
    name=pufferpanel
    baseurl=https://packagecloud.io/pufferpanel/pufferpanel/rpm_any/rpm_any/$basearch
    repo_gpgcheck=1
    gpgcheck=0
    enabled=1
    gpgkey=https://packagecloud.io/pufferpanel/pufferpanel/gpgkey
    sslverify=1
    sslcacert=/etc/pki/tls/certs/ca-bundle.crt
    metadata_expire=300" > sudo tee /etc/yum.repos.d/pufferpanel.repo
      sudo yum install pufferpanel


Create Node in Panel
--------------------

Log into your panel as an admin. Go to "Nodes". Click "Add Node".

Fill in the information requested on this page. Click "Create Node".

Click Next until you get to the config.

Open the `/etc/pufferpanel/config.json` file on the node and replace the contents of this file with the one shown on the panel.

Start the node
------------------

.. code:: bash

   sudo systemctl enable --now pufferpanel