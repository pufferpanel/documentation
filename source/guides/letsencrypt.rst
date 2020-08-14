Using LetsEncrypt with PufferPanel
==================================


LetsEncrypt provides free SSL certificates and are great way to enhance the security of your PufferPanel installation

For the purposes of this guide, replace "panel.example.com" with your PufferPanel installation's domain name.

.. warning:: Enabling SSL on the panel will require that you update your pufferd configs to point to the updated URL. Refer to the directions below to do this.


Modify nginx config file
^^^^^^^^^^^^^^^^^^^^^^^^

Find your pufferpanel.conf configuration file located in either /etc/nginx/sites-available or /etc/nginx/conf.d

Add the following location block to your nginx config file

.. code::

   location /.well-known/acme-challenge/ {
       try_files $uri =404;
   }

Here is some context for where you should place it

.. code::

       location / {
           try_files /public/router.php =404;
           fastcgi_split_path_info ^(.+?\.php)(/.*)$;
           fastcgi_pass unix:/var/run/php7.2-fpm.sock;
           fastcgi_index router.php;
           fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
           include /etc/nginx/fastcgi_params;
       }
        
       location /.well-known/acme-challenge/ {
           try_files $uri =404;
       }
        
       location /assets {
           try_files /app/\$uri =404;
       }
   }

Make sure to reload nginx

``systemctl restart nginx``


Grab the LetsEncrypt client
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code::

   sudo -i #(or su root)
   apt install -y certbot

Now generate the certificates

.. code::

   certbot certonly --webroot -w /srv/pufferpanel/ -d panel.exemple.com #news
   certbot renew --webroot -w /srv/pufferpanel/ -d panel.exemple.com #Renew

| Go back to your pufferpanel.conf and update the server block with the directives below (make sure to replace ``panel.example.com`` with your domain)
| If a directive already exists in your server block, replace it with the one below

.. code::

   listen 443;
   ssl_certificate /etc/letsencrypt/live/panel.exemple.com/cert.pem;
   ssl_certificate_key /etc/letsencrypt/live/panel.exemple.com/privkey.pem;


Updating pufferd configs
^^^^^^^^^^^^^^^^^^^^^^^^

Once your panel is using HTTPS, you will need to update your pufferd configs to use the new URL.

| Update the following file, changing http to https where appropriate:
| ``/etc/pufferd/config.json``

| Restart the pufferd service
| ``sudo service pufferd restart``


Enabling HTTPS on pufferd
^^^^^^^^^^^^^^^^^^^^^^^^^

Copy the full chain certificate and the private key files from LetsEncrypt into pufferd.

.. code::

   cp /etc/letsencrypt/live/panel.example.com/fullchain.pem /etc/pufferd/https.pem
   cp /etc/letsencrypt/live/panel.example.com/privkey.pem /etc/pufferd/https.key

Change the owner and group of the files

.. code::

   chown pufferd:pufferd /etc/pufferd/https.pem
   chown pufferd:pufferd /etc/pufferd/https.key

Restart the pufferd service

.. code::

   sudo service pufferd restart

Next, update the node through the panel to have the private IP set to be your domain.
