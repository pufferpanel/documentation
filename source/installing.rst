Installing PufferPanel
======================


System Requirements
-------------------

* A VPS or Dedicated server (32-bit *IS NOT* supported)
* SSH access and administrative (root or sudo) privileges on the server
* PHP 7.1 minimum
* MySQL 5.6+ (MariaDB 10.2 is recommended)
* Subdomain for the panel

.. note::

   PufferPanel has been tested and works with the following Linux distributions: ``Ubuntu 18.04``, ``Ubuntu 16.04``, ``Ubuntu 14.04``, ``CentOS 7``, and ``Debian 8``.

.. admonition:: Can I use mydomain.com/panel?
   :class: warning

   No. PufferPanel does not support being installed on a path for a domain. You must either use a subdomain dedicated to PufferPanel (we recommend panel.mydomain.com) or a dedicated IP.


Install Dependencies
--------------------

Please run the commands for your distribution below to install the necessary dependencies in order for PufferPanel to run.

.. tabs::

   .. tab:: Ubuntu 18.04

      .. code::

         sudo apt install software-properties-common
         sudo apt-add-repository universe
         ## Because people may have trouble installing the php-fpm. But this work around worked for my install.

         sudo apt install -y openssl curl nginx mysql-client mysql-server php-fpm php-cli php-curl php-mysql

         ## Make sure to set the MySQL root password when running this
         sudo mysql_secure_installation

   .. tab:: Ubuntu 16.04

      .. code::

         # If you currently have apache2 installed you will not be able to use nginx as well. Please plan accordingly.
         sudo apt install software-properties-common
         sudo add-apt-repository ppa:ondrej/php
         sudo apt update
         sudo apt update
         sudo apt install -y openssl curl nginx mysql-client mysql-server php-fpm php-cli php-curl php-mysql

         ## Make sure to set the MySQL root password when running this
         sudo mysql_secure_installation

   .. tab:: Ubuntu 14.04

      .. code::

         # This adds the https://launchpad.net/~ondrej/+archive/ubuntu/php/ repo in order to install php7
         sudo add-apt-repository ppa:ondrej/php

         # If you currently have apache2 installed you will not be able to use nginx as well. Please plan accordingly.
         sudo apt update
         sudo apt install -y openssl curl nginx mysql-client mysql-server php-fpm php-cli php-curl php-mysql

         ## Make sure to set the MySQL root password when running this
         sudo mysql_secure_installation

   .. tab:: CentOS 7

      .. code::

         # This installs the epel and remi repos for php7 support
         sudo rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
         sudo yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
         sudo yum install yum-utils
         sudo yum-config-manager --enable remi-php72

         # If you currently have apache2 installed you will not be able to use nginx as well. Please plan accordingly.
         sudo yum update
         sudo yum install nginx mariadb-server mariadb php-fpm php-common php-cli php-pdo php-mysqlnd

         # Make sure to run these commands to make sure the services start on reboot
         sudo systemctl enable nginx
         sudo systemctl start nginx

         sudo systemctl enable mariadb
         sudo systemctl start mariadb

         sudo systemctl enable php-fpm
         sudo systemctl start php-fpm

         ## Make sure to set the MySQL root password when running this
         sudo mysql_secure_installation

         ## Add rule for selinux so nginx can reach our files
         mkdir -p /srv/pufferpanel
         chcon -Rt httpd_sys_content_t /srv/pufferpanel
         ## Allow http to connect to networks (to reach pufferd)
         setsebool -P httpd_can_network_connect 1

   .. tab:: Debian 8

      .. code::

         # This adds the https://packages.sury.org/php/ repo in order to install php7
         sudo apt -y install apt-transport-https lsb-release ca-certificates wget
         sudo wget https://packages.sury.org/php/apt.gpg -O - | sudo apt-key add -
         sudo echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list

         # If you currently have apache2 installed you will not be able to use nginx as well. Please plan accordingly.
         sudo apt update
         sudo apt install -y openssl curl nginx mysql-client mysql-server php-fpm php-cli php-curl php-mysql

         ## Make sure to set the MySQL root password when running this
         sudo mysql_secure_installation


Running the Installer
---------------------

We now offer an automated installer to help make the installation process easier. This installer can run by copy and pasting the command below into your terminal. The installer will guide you through the entire installation process.

.. code::

   # Please run these with either sudo in front of them, or as the root user (sudo -i)
   mkdir -p /srv && cd /srv
   curl -L -o pufferpanel.tar.gz https://git.io/fNZYg
   tar -xf pufferpanel.tar.gz
   cd pufferpanel 
   chmod +x pufferpanel
   ./pufferpanel install

If the web service auto-install does not work or you get the default nginx page, please read the following page to configure nginx: :doc:`guides/nginx`.

If you prefer to use Apache, you can follow this guide instead: :doc:`guides/apache`.


Next Steps
----------

Be sure to allow traffic on port 5656 to allow the pufferd daemon to communicate with PufferPanel and port 5657 to allow SFTP access to the servers.

If you are using OVH, please see our :doc:`suggestion for OVH Servers <guides/ovh>`, as most OVH partition setups give most of the available disk space to /home.

Congratulations! You will be given the URL of your PufferPanel installation after the installer has finished.

Since pufferd is installed on the local node already with PufferPanel, you can get started creating servers right away!
