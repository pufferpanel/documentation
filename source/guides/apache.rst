Apache Configuration
====================


The following examples show how to configure a vhost to make a PufferPanel instance on the same server accessible under ``panel.example.com``

To use Apache 2 as a reverse proxy you will need to enable the following modules:

* mod_proxy
* mod_proxy_http
* mod_proxy_wstunnel
* mod_rewrite


.. tabs::

   .. tab:: SSL

      This example assumes that you have a subdomain specific certificate located in Let's Encrypts default location, however you can of course use certificates from other authorities and certificates stored in other locations as well

      .. code::

         <IfModule mod_ssl.c>
             <VirtualHost _default_:443>
                 ServerName panel.example.com

                 ProxyPreserveHost On
                 SSLProxyEngine On
                 ProxyPass / http://localhost:8080/
                 ProxyPassReverse / http://localhost:8080/

                 RewriteEngine on
                 RewriteCond %{HTTP:Upgrade} websocket [NC]
                 RewriteCond %{HTTP:Connection} upgrade [NC]
                 RewriteRule .* ws://localhost:8080%{REQUEST_URI} [P]

                 SSLEngine on
                 SSLCertificateFile /etc/letsencrypt/live/panel.example.com/fullchain.pem
                 SSLCertificateKeyFile /etc/letsencrypt/live/panel.example.com/privkey.pem
             </VirtualHost>
         </IfModule>

   .. tab:: No SSL

      .. warning::

         | PufferPanel has to send sensitive data like passwords over the network
         | Because of this it is not advisable to run a publicly accessible instance on HTTP

      .. code::

         <VirtualHost _default_:80>
             ServerName panel.example.com

             ProxyPreserveHost On
             ProxyPass / http://localhost:8080/
             ProxyPassReverse / http://localhost:8080/

             RewriteEngine on
             RewriteCond %{HTTP:Upgrade} websocket [NC]
             RewriteCond %{HTTP:Connection} upgrade [NC]
             RewriteRule .* ws://localhost:8080%{REQUEST_URI} [P]
         </VirtualHost>
