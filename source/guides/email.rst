E-Mail setup
================


PufferPanel has built-in e-mail support. This guide will show you how to set it up.

Prerequisites
#############

- An SMTP e-mail server or a mailgun API key

Setup
#####
In this guide, we will be using GMail as our e-mail server, but any will work.  
You can also use mailgun, which will only require an API key.  

Open the config file located at `/etc/pufferpanel/config.json` using your favorite text editor.
It is recommended to use a tool such as https://jsonlint.com/ to make sure the syntax is correct.

.. code-block:: bash

    sudo nano /etc/pufferpanel/config.json

Under "panel", add an email section. It should look like this: (dont include comments)  

.. code-block:: json

   {
     "panel": {
       "email": {
         "provider": "smtp",
         "from": "someone@gmail.com",
         "host": "smtp.gmail.com:587",
         "username": "someone@gmail.com",
         "password": "*******"
         "provider": "mailgun",
         "key": "your_api_key"
         "domain": "your_api_key"
       }
     }
   }

Now, adjust the config options to your needs.  

provider
  debug, SMTP, mailgun or mailjet.

key
  mailgun: API key

  mailjet: Private API Key

from
  SMTP: the e-mail address the messages will be sent from

host
  SMTP: the IP address or domain name of the mail server, followed by the port

username
  SMTP: the username to use when authenticating with the mail server

password
  SMTP: the password to use when authenticating with the mail server

domain
  mailjet: Public API Key

Once you've set it up, restart PufferPanel.

.. code-block:: bash

  sudo systemctl restart pufferpanel

Congratulations! You've successfully set up e-mails with PufferPanel.
