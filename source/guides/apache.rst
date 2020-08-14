Apache Configuration
====================


Generating the Configuration Automatically
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If the PufferPanel installer did not automatically create the needed configuration files for Apache, use the following commands as root to automatically generate them

.. code::

   cd /srv/pufferpanel
   ./pufferpanel addapache

Otherwise, follow the instructions below to manually create the configuration.


Creating the Configuration Manually
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. admonition:: CAUTION
   :class: danger

   This documentation is incomplete and may not be completely accurate. Please consult the Apache documentation for any problems using this.

This documentation assumes you have Apache/Httpd installed. If you do not, please consult apache's documentation or the many tutorials on installing a LAMP server.

First, you must locate your root configuration for Apache/Httpd (generally ``/etc/httpd/httpd.config`` or ``/etc/apache2/apache2.conf``). In that file, change/append the following.

.. code::

   DocumentRoot /srv/pufferpanel/public
   <Directory "/srv/pufferpanel/public">
       AllowOverride All
       Order Allow,Deny
       Allow from all
       Require all granted
   </Directory>

Next, you must edit your vhost config most likely located at /etc/apache2/sites-available/000-default.conf if you aren't running any other sites, or you create another conf like pufferpanel.conf and save it there if you run multiple websites.

| To create the conf file, you can just ``nano /etc/apache2/sites-available/pufferpanel.conf``
| Then insert the following code into the file and save:

.. code::

   <VirtualHost *:80>
       #ServerName www.example.com
       DocumentRoot /srv/pufferpanel/public
   </VirtualHost>

If you are running multiple sites and the above code is in pufferpanel.conf, you MUST uncomment the ServerName line and set it to the domain you will use to connect to the panel. If you only run one site, the above code should replace everything in your 000-default.conf file.

.. note::

   | If you are receiving "500 Bad Request" error, make sure to enable mod rewrite!
   | Type sudo a2enmod rewrite in your terminal following it with sudo service apache2 restart
