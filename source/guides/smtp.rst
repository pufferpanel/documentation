SMTP E-Mail setup
================


PufferPanel has built-in e-mail support. This guide will show you how to set it up.

Prerequisites
#############

- An SMTP e-mail server

Setup
#####
In this guide, we will be using GMail as our e-mail server, but any will work.

Open the config file located at `/etc/pufferpanel/config.json` using your favorite text editor.
It is recommended to use a tool such as https://jsonlint.com/ to make sure the syntax is correct.

.. code-block:: bash

    sudo nano /etc/pufferpanel/config.json

Under "panel", add an email section. It should look like this:

.. code-block:: json

   {
     "panel": {
       ... other config options, make sure to add a comma
       "email": {
         "provider": "smtp",
         "from": "someone@gmail.com",
         "host": "smtp.gmail.com:587",
         "username": "someone@gmail.com",
         "password": "*******"
       }
     }
   }

Now, adjust the config options to your needs.  
- provider - debug, SMTP, or mailgun.
- from - the e-mail address the messages will be sent from
- host - the IP address or domain name of the mail server, followed by the port
- username
- password

Once you've set it up, restart PufferPanel.

.. code-block:: bash

  sudo systemctl restart pufferpanel
Congratulations! You've successfully set up SMTP with PufferPanel.

