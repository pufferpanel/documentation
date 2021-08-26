##################
SSL setup (nginx)
##################

The following ports are used by nginx. Please allow traffic to/from these ports.

* 80: HTTP traffic.
* 443: HTTPS traffic.

To set up SSL with let's encrypt you will also need a domain pointed to your panel's IP address.

Setting up PufferPanel to be served over SSL is simple. We will use nginx and an Let's Encrypt certificate.  
First, let's install nginx.

.. tabs::

   .. tab:: Ubuntu/Debian

      .. code-block:: bash

         sudo apt-get update
         sudo apt-get install nginx

   .. tab:: CentOS

      .. code-block:: bash

         sudo dnf install epel-release
         sudo dnf install nginx
         
Now navigate to http://yourip. You should see a default nginx page.  

Now set up an nginx virtual host. This will allow nginx to serve PufferPanel.
Create and open a config file at /etc/nginx/sites-enabled/pufferpanel.conf on Ubuntu/Debian or /etc/nginx/conf.d/pufferpanel.conf on CentOS

.. tabs::

   .. tab:: Ubuntu/Debian

      .. code-block:: bash
      
         nano /etc/nginx/sites-enabled/pufferpanel.conf

   .. tab:: CentOS

      .. code-block:: bash

         nano /etc/nginx/conf.d/pufferpanel.conf
         

Paste the following code to create a proxy. Make sure to change server_name to your panel's domain.
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
                 proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                 proxy_set_header X-Nginx-Proxy true;
                 proxy_http_version 1.1;
                 proxy_set_header Upgrade $http_upgrade;
                 proxy_set_header Connection "Upgrade";
                 proxy_set_header Host $host;
                 client_max_body_size 100M;
             }
         }

Click CTRL+x to save, and then press Y and enter to confirm.
Restart nginx. You should be able to access PufferPanel at the domain you've choosen above.

.. code-block:: bash

    systemctl restart nginx

Now that nginx is running, let's set up SSL.
First install certbot. This is the tool we will be using to obtain the certificate.

.. tabs::

   .. tab:: Ubuntu/Debian

      .. code-block:: bash
         
         sudo apt-get update
         sudo apt-get install certbot python3-certbot-nginx
   
   .. tab:: CentOS

      .. code-block:: bash
            
            sudo dnf install epel-release
            sudo dnf install certbot python3-certbot-nginx
         
Now run the certbot command. Replace panel.example.com with your own domain.  

.. code-block:: bash

    sudo certbot --nginx -d panel.example.com

Certbot will take care of redirecting http to https, renewing the certificates and will modify the config file to use SSL on port 443.  
That's it! You can now access your panel via HTTPS.

Your panel should now be accessed without appending port 8080 to the URL. Also your panel should be made to stop listening from the outside, by adding the following snippet in the top level of `config.json`, and restarting the panel. This way nginx wil be able to reach the panel without HTTPS, but the internet will not.

.. code-block:: json

    "web": {
      "host": "127.0.0.1:8080"
    }

.. note::

  There is also a `web` section inside the `panel` section - this `web` section goes at the same level as `panel`, not inside it.
