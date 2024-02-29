Troubleshooting
===============

How do I know what to do?
^^^^^^^^^^^^^^^^^^^^^^^^^

Take a look at your logs and at the service, look for any unusual behavior to get a direction on where to look if you don't have one already.

  Logs are generally stored ``/var/log/pufferpanel/``

  Service can be checked with ``systemctl status pufferpanel``


I am getting permission errors with my files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If the executable is showing a permission denied error, then it may be a problem with the template as the steamdownload may require you to set the executable permission, this can be done by adding ``chmod +x <executable>`` to the end of your install process

However if the permission error is cause by you messing with PufferPanel files outside of the provided file editing options (web-based file editor, sftp) we highly advice against doing that.

To fix it, you can run ``chown -R pufferpanel:pufferpanel /var/lib/pufferpanel`` to fix the permissions once. If you run into this error again, re-read this entire block.


I am having a port conflict, how do I change the port?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It should be noted ports below 1024 can't be bound to by PufferPanel as those require root permissions which pufferpanel by design doesn't have due to them not being neccesary.

Update the port in ``web.host`` in the panels config (``/etc/pufferpanel/config.json``).

  Note: The **only** reason to ever do this, is for handling port conflicts. **If** you want to have your game panel exposed over the internet, you should **always** `use a reverse proxy to setup TLS </en/latest/guides/ssl-setup-nginx.html>`_, to ensure your server remains secure.


I've setup PufferPanel at home, but my friend can't join.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In this case we cant provide a universal solution but simply can tell you to forward the gameservers port via your router, as this process differs between models and manufacturers we advice to look at the routers manual.


I still have Problem XYZ, what should i do?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If all of the above didn't resolve your problem feel free to come to our Discord server in the support channel or create a discussion on Github (slower). Make a post with all the information you collected up until now and tell us more about your hosting environment as some providers may have secondary firewalls in place.

  Please note it may get embarrassing if you get sent a link to this page as an answer to your post
