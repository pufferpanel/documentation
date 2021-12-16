Import Minecraft Servers
========================

If you have an existing server you'd like to import, then there's 2 methods that can be used. Both methods will use the same starting steps:

1) Create the server in PufferPanel. Any template may be used, however it's recommended to use the one most appropriate for the server type you are using.
I.e minecraft-forge for Forge servers, minecraft-paper for Paper servers.

SFTP (recommended)
^^^^^^^^^^^^^^^^^^

This is by far the recommended method of importing a server.

1) Find the SFTP credentials in the panel. Log into SFTP using these credentials using your preferred client.

2) Upload the files to the server.

3) Rename your jar to server.jar

Direct File Access
^^^^^^^^^^^^^^^^^^

1) Get the server's id.

2) Copy the files from your current location to /var/lib/pufferpanel/servers/<id>

3) Rename your jar to server.jar

4) Run the following: `sudo chown -R pufferpanel:pufferpanel /var/lib/pufferpanel`
