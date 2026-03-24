Migrating from v2 to v3
=======================

Migrating to v3 is simple. To migrate to v3, please follow these steps on all places where PufferPanel is installed.
This includes any nodes.

Remove old repository
^^^^^^^^^^^^^^^^^^^^^

Removing the repository is as simple as removing it from your apt/yum source list.

On APT systems, delete `/etc/apt/sources.list.d/pufferpanel_pufferpanel.list`

On YUM systems, delete `/etc/yum.repos.d/pufferpanel_pufferpanel.repo`

Install new repository
^^^^^^^^^^^^^^^^^^^^^^

.. tab:: DEB-based

   .. code-block:: bash

      curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.deb.sh?any=true | sudo bash
      sudo apt update

.. tab:: RPM-based

   .. code-block:: bash

      curl -s https://packagecloud.io/install/repositories/pufferpanel/pufferpanel/script.rpm.sh?any=true | sudo bash

.. tab:: Ubuntu/Debian - Manual Repo

   .. code-block:: bash

      echo "deb https://packagecloud.io/pufferpanel/pufferpanel/any/ any main" | sudo tee /etc/apt/sources.list.d/pufferpanel.list
      sudo apt update

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

Update Panel
^^^^^^^^^^^^

Run the following to update the panel:

.. tab:: DEB-based

   .. code-block:: bash

      sudo apt-get install pufferpanel
      systemctl restart pufferpanel

.. tab:: RPM-based

   .. code-block:: bash

      sudo yum install pufferpanel
      systemctl restart pufferpanel

Stop Nodes
^^^^^^^^^^

On each node, run `systemctl stop pufferpanel`

**Note that if any old nodes are left running you will not be able to log into the panel to download the configuration files necessary to update them.**

Deploy New Configs
^^^^^^^^^^^^^^^^^^

Log into the panel.
For each node, get the new config that is available through the panel and deploy it on that node.

Update Nodes
^^^^^^^^^^^^

Run the following on each node:

.. tab:: DEB-based

   .. code-block:: bash

      sudo apt-get install pufferpanel
      systemctl restart pufferpanel

.. tab:: RPM-based

   .. code-block:: bash

      sudo yum install pufferpanel
      systemctl restart pufferpanel


Validate
^^^^^^^^

Validate that all nodes now show up and all servers appear functional.
