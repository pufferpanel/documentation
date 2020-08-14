Frequently Asked Questions
==========================


Q: Billing module?
^^^^^^^^^^^^^^^^^^

The development team takes the stance that any user who wishes to make money off of selling servers should be using software which has paid support or a similar guarantee to get support if and when there are issues. We also believe that such users should also use a panel which has been through numerous security audits to protect both their own information and that of their customers.

As such, we do not believe we are the best software for such a service. We do not over-sell ourselves and will not risk our own users for the sake of making money, or those that use our software in any form to make money.

While a module may occur in the future, the current panel code is not suitable for supporting such a feature.


Q: Where are my logs?
^^^^^^^^^^^^^^^^^^^^^

Pufferpanel stores logs in 2 different places.

| The panel stores it's log in ``/srv/pufferpanel/logs``
| The daemon (pufferd) stores it's logs in ``/var/log/pufferd``


Q: I got a 401 error in my log!
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Because pufferd has to authenticate with a secret token to the panel, it stores this token in a config. Reinstalls of the panel will cause this token to be incorrect, so you will have to manually get the token.

You can uninstall the daemon, then use the "auto-deploy" to re-deploy the daemon again.

If you are not able to reinstall the daemon, you can manually get this token by using the following command:

.. code::

  mysql -u root -p -e "select name, daemon_secret from pufferpanel.nodes"

Copy the "daemon_secret" from this into the /etc/pufferd/config.json file, then restart pufferd.


Q: How can I remove the captcha?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Log onto the machine that is running Pufferpanel and run the following command:

.. code::

   mysql -u root -p -e "update pufferpanel.acp_settings set setting_val = NULL where setting_ref like 'captcha%'"
