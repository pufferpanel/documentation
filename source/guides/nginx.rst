nginx Configuration
===================


Generating the Configuration Automatically
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If the PufferPanel installer did not automatically create the needed configuration files for nginx, use the following commands as root to automatically generate them

.. code::

   cd /srv/pufferpanel
   ./pufferpanel addnginx

Otherwise, follow the instructions below to manually create the configuration.


Creating the Configuration Manually
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This documentation will assume you have nginx installed. If you do not, please consult `nginx's documentation <https://www.nginx.com/>`_ on how to install.

You will need to locate where your nginx server configs are (generally ``/etc/nginx``). In there, will be either a ``conf.d`` or a ``sites-enabled`` folder. In one of those folders, create a ``pufferpanel.conf`` file and add the following (replacing panel.examplehost.com with the IP address or domain to access the panel on).

.. note::

   This configuration assumes that you have PHP listening using a unix socket. Most configurations will default to using a socket, although some configure it with a TCP connection. To determine if this is the case run the command below.

   | CentOS: ``grep '^listen *=' /etc/php-fpm.d/www.conf``
   | Ubuntu 14.04: ``grep '^listen *=' /etc/php5/fpm/pool.d/www.conf``
   | Ubuntu 16.04/18.04: ``grep '^listen =' /etc/php/*/fpm/pool.d/www.conf``

   Should this be ``127.0.0.1:9000``, you should replace the ``unix:/var/run/php/php7.2-fpm.sock`` below with ``127.0.0.1:9000;``

.. code::

   server {
       listen 80;
       root /srv/pufferpanel/;
       index index.php;

       server_name panel.examplehost.com;

       client_max_body_size 20m;
       client_body_timeout 120s;

       location / {
           try_files /public/router.php =404;
           fastcgi_split_path_info ^(.+?\.php)(/.*)$;
           fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
           fastcgi_index router.php;
           fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
           include /etc/nginx/fastcgi_params;
       }

       location /assets {
           try_files /app/$uri =404;
       }
   }

   #server {
   #    listen 443;
   #    root /srv/pufferpanel/;
   #    index index.php;
   #
   #    server_name panel.examplehost.com;
   #
   #    ssl on;
   #    ssl_certificate     /etc/nginx/ssl/<server>.crt;
   #    ssl_certificate_key /etc/nginx/ssl/<server>.key;
   #
   #    location / {
   #        try_files /public/router.php =404;
   #        fastcgi_split_path_info ^(.+?\.php)(/.*)$;
   #        fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
   #        fastcgi_index router.php;
   #        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
   #        include /etc/nginx/fastcgi_params;
   #    }
   #
   #    location /assets {
   #        try_files /app/$uri =404;
   #    }

Afterwards, use ``service nginx restart`` to restart nginx and apply this change.

.. note::

   This file does not permit HTTPS access to your panel directly. If you wish to use HTTPS, uncomment the second server block and point the ssl_certificate and ssl_certificate_key to those for your server. If you use Cloudflare for HTTPS support, this should not be uncommented.
