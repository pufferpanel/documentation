Minecraft Dependencies
======================

Minecraft requires additional dependencies that are not managed by PufferPanel, failing to install these may result in errors like:

.. code-block:: bash


	[DAEMON] Allocating server
	[DAEMON] Server allocated
	[DAEMON] Ready to be installed
	[DAEMON] Installing server
	[DAEMON] Version 1.16.5 json located, downloading from https://launchermeta.mojang.com/v1/packages/436877ffaef948954053e1a78a366b8b7c204a91/1.16.5.json
	[DAEMON] Version jar located, downloading from https://launcher.mojang.com/v1/objects/1b557e7b033b583cd9f66746b7a9ab1ec1673ced/server.jar
	[DAEMON] Downloading: https://launcher.mojang.com/v1/objects/1b557e7b033b583cd9f66746b7a9ab1ec1673ced/server.jar
	[DAEMON] Writing some data to file: server.properties
	[DAEMON] Writing some data to file: eula.txt
	[DAEMON] Server installed
	[DAEMON] Starting server
	[DAEMON] Failed to start server
	[DAEMON] exec: "java": executable file not found in $PATH
	[DAEMON] Starting server
 
To resolve this please install JDK/JRE required for your Mincraft version.

You can see what version of Java you have installed by running `java -version`.
