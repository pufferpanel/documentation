SourceDS - Autoupdate
=====================


Setting up your Source Server (such as Team Fortress 2) to auto-update is a simple task within PufferPanel.

The first step is to add some additional startup parameters for the server, shown below (replacing SERVER with the UUID for your server). To do so, edit the [Server].json File and add the line to the arguments section. Verify that the "-norestart" argument is the last argument, otherwise the Server keeps restarting when pressing "Stop" in the PufferPanel.

.. code::

   -autoupdate -steam_dir steamcmd -steamcmd_script /var/lib/pufferpanel/servers/[SERVER]/steamcmd/autoupdate.txt

In the ``/var/lib/pufferpanel/servers/[SERVER]/steamcmd/autoupdate.txt`` file we need to add the following code, replacing ``<APP_ID>`` with the application ID for the game.

.. code::

   login anonymous
   force_install_dir ..
   app_update <APP_ID>
   quit

After this, simply restart your server and it should begin checking for updates whenever you start the server.

.. warning:: Some games may require additional parameters in the autoupdate.txt file.
