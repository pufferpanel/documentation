##################
SSL setup (nginx)
##################

The following ports are used by nginx. Please allow traffic to/from these ports.

* 80: HTTP traffic.
* 443: HTTPS traffic.

To set up SSL with let's encrypt you will also need a domain pointed to your panel's IP address.

Setting up pufferpanel to be served over SSL is simple. We will use nginx and an Let's Encrypt certificate.  
First, let's install nginx.

.. tabs::

   .. tab:: Ubuntu/Debian

      .. code-block:: bash

         sudo apt-get update
         sudo apt-get install nginx
         
Now navigate to http://yourip. You should see a default nginx page.  

.. image:: https://www.nginx.com/wp-content/uploads/2014/01/welcome-screen-e1450116630667.png
    :alt: nginx default page

Let's first set up an nginx virtual host. This will allow nginx to serve pufferpanel.
Create and open a config file at /etc/nginx/sites-available/pufferpanel.conf

.. code-block:: bash

    nano /etc/nginx/sites-available/pufferpanel.conf

Now paste the following code. Make sure to change server_name to your panel's domain.
.. code-block::
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
                 proxy_http_version 1.1;
                 proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                 proxy_set_header Host $http_host;
                 proxy_set_header X-Nginx-Proxy true;
                 proxy_set_header Connection "Upgrade";
                 proxy_set_header X-Forwarded-Proto $scheme;
             }
         }

Click CTRL+x to save, and then press Y and enter to confirm.
Now restart nginx. You should be able to access pufferpanel at the domain you've choosen above.

.. code-block:: bash
    systemctl restart nginx

Now that nginx is running, let's set up SSL.
First install certbot. This is the tool we will be using to obtain the certificate.

.. tabs::

   .. tab:: Ubuntu 20.04/Debian 10/Debian 9

      .. code-block:: bash
         
         sudo apt-get update
         sudo apt-get install certbot python-certbot-nginx

   .. tab:: Ubuntu 18.04

      .. code-block:: bash

         sudo add-apt-repository ppa:certbot/certbot
         sudo apt-get update
         sudo apt-get install python-certbot-nginx
         
Now run the certbot command. Replace panel.example.com with your own domain.

.. code-block:: bash
    sudo certbot --nginx -d panel.example.com
    
That's it! Now you can access your panel via HTTPS.
