SRCDS Dependencies
==================

SRCDS requires additional dependencies that are not managed by PufferPanel, failing to install these may result in errors like:

.. code-block:: bash

	[DAEMON] Allocating server
	[DAEMON] Server allocated
	[DAEMON] Ready to be installed
	[DAEMON] Installing server
	[DAEMON] Downloading file https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz
	[DAEMON] Executing: mkdir steamemd
	[DAEMON] Executing: tar --no-same-owner -xzvf steamcmd_linux.tar.gz -C steamcmd steamcmd.sh
	linux32/steamerrorreporter
	linux32/libstdc++.so.6
	linux32/crashhandler.so
	[DAEMON] Executing: steamcmd/steamcmd.sh +login anonymous +force_install_dir .. +app_update 2944206
	+quit
	steamcmd/steamcmd.sh: line 37: /var/lib/pufferpanel/servers/daa1b7fe/steamcmd/1linux32/steamcemd: No
	such file or directory
	[DAEMON] Executing: mkdir -p .steam/sdk32
	[DAEMON] Executing: cp steamcmd/linux32/steamclient.so .steam/sdk32/steamclient.so
	cp: cannot stat ‘steamemd/linux32/steamclient.so': No such file or directory
	[DAEMON] Server installed
	[DAEMON] Starting server
	[DAEMON] fork/exec ./startserver.sh: no such file or directory
	[DAEMON] Failed to start server
 

Ubuntu
------

Required
++++++++

- lib32gcc1

Command
+++++++

.. code-block:: bash

	dpkg --add-architecture i386
	apt-get update
	apt-get install lib32gcc1
