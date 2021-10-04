Caddy Configuration
===================

Open ports **80** and **443** in your firewall on router and in ubuntu firewall if you use it.

Get a domain, free ones can be found on duckdns https://www.duckdns.org among other place.

**Install caddy**

Follow https://caddyserver.com/docs/install and choose your supported distro.

in ubuntu is the following commands for installation

sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo apt-key add -
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee -a /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy

-

Make a new **text file** named **Caddyfile** file in whatever folder your want. Example documents. Text file can be created by cd to your location by cd command or right clicking in folder and opening terminal and typing example on ubuntu **gedit Caddyfile**

In the text file format as follows

.. code:: 

  yourdomain.com {
    reverse_proxy localhost:8080
  }

now you may need to stop caddy web server before using its reverse proxy functionality do this by typing `sudo service caddy stop`

now in the same destination as your **Caddyfile** type `sudo caddy run`

Your done!
