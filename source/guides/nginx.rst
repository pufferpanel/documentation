nginx Configuration
===================

Configuring nginx to serve your panel is pretty straight forward. All you have to do is configure a proxy_pass block to forward all traffic intended for the panel to it..

.. tabs::

   .. tab:: SSL

      .. code::

         server {
           listen 80;
           listen [::]:80;
           server_name panel.examplehost.com;

           location ~ ^/\.well-known {
             root /var/www/html;
             allow all;
           }

           location / {
               return 301 https://$host$request_uri;
           }  
         }

         server {
           listen 443 ssl;
           listen [::]:443 ssl;
           root /var/www/pufferpanel;

           ssl_certificate     /etc/nginx/ssl/<server>.crt;
           ssl_certificate_key /etc/nginx/ssl/<server>.key;

           server_name panel.examplehost.com;

           location / {    
             proxy_set_header X-Real-IP $remote_addr;
             proxy_http_version 1.1;
             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
             proxy_set_header Host $http_host;
             proxy_set_header Connection "Upgrade";
             proxy_set_header Upgrade $http_upgrade; 
             proxy_set_header X-Nginx-Proxy true;
             proxy_set_header X-Forwarded-Proto $scheme;
             proxy_pass http://localhost:8080;
           }
         }

   .. tab:: No SSL

      .. warning::

         | PufferPanel has to send sensitive data like passwords over the network
         | Because of this it is not advisable to run a publicly accessible instance without SSL

      .. code::

         server {
             listen 80;
             root /var/www/pufferpanel;
    
             server_name panel.examplehost.com;
    
             location ~ ^/\.well-known {
               root /var/www/html;
               allow all;
             }

             location / {
                 proxy_pass http://localhost:8080;
                 proxy_set_header X-Real-IP $remote_addr;
                 proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                 proxy_set_header X-Nginx-Proxy true;
                 proxy_set_header X-Forwarded-Proto $scheme;
                 proxy_http_version 1.1;
                 proxy_set_header Upgrade $http_upgrade;
                 proxy_set_header Connection "Upgrade";
                 proxy_set_header Host $host;
             }
         }
