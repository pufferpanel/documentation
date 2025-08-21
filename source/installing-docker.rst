Installing PufferPanel using Docker
===================================

.. 

   The Docker image is currently X86_64 only due to limitations in the Github Actions infrastructure.

PufferPanel offers several images that include dependencies needed to run game servers. 
We recommend using *latest* as it contains everything you will need to get servers running quickly.

.. warning:: 
    Be aware that if you are running a Linux distribution that enforces SELinux by default, you will run into issues
    when creating a server that runs in its own docker container, as opposed to running on the PufferPanel container.

    In these situations, you can:

    - Disable SELinux.
    - Configure SELinux to allow the PufferPanel container to spawn other containers.
    - Avoid using game servers running on their own containers, (e.g., use the ``minecraft-vanilla`` template instead of ``minecraft-vanilla-docker``).

Creating mounting points
-------------------------

Before creating the container, you need to create mounting points to ensure your PufferPanel configuration 
and game server data are preserved even if the container is recreated or updated. 

With them, your settings, game servers, and files persist across upgrades and restarts.

To create the config and data mounting points use the following commands:

.. code-block:: bash

    $ sudo mkdir -p /var/lib/pufferpanel
    $ sudo docker volume create pufferpanel-config

Creating the container
----------------------
Once the mounting points are ready, create your container.

Keep in mind that if you want your servers to be accessible from outside the host machine, you must bind the ports 
to the host using the ``-p host_port:container_port`` option.

.. code-block:: bash

    $ sudo docker create --name pufferpanel \
        -p 8080:8080 -p 5657:5657 \
        -v pufferpanel-config:/etc/pufferpanel \
        -v /var/lib/pufferpanel:/var/lib/pufferpanel:z \
        -v /var/run/docker.sock:/var/run/docker.sock \
        --restart=on-failure \
        pufferpanel/pufferpanel:latest
    
- 8080:8080 → exposes the PufferPanel web UI (required, so you can access the web UI)
- 5657:5657 → SFTP port used by PufferPanel (required, to allow file transfers, such as for example, when :doc:`Import Minecraft Servers <guides/import-minecraft-server>`)
- Add more ``-p host:container`` pairs for any game server ports you want reachable from outside

.. note::

    If you later need to open more ports for other game server, you can remove the container using
    ``sudo docker container rm pufferpanel`` and create a new one using the previous command with the new port configurations.

Start the container
-------------------
Once the container is created you can start it by running the following command:

.. code-block:: bash

    $ sudo docker start pufferpanel

Add user to the container
-------------------------
Finally, create an admin user to manage PufferPanel:

.. code-block:: bash

    $ sudo docker exec -it pufferpanel /pufferpanel/pufferpanel user add

Congratulations! 🎉

Your PufferPanel instance is now up and running.

You can access the web interface at: http://localhost:8080

Understanding the config
------------------------

With the usage of Docker, we move the configuration options to be environment variables. This means you don't have to override the config.json to apply changes.
You can use the following to get all of the environment variables on the container.

.. code-block:: bash

    docker inspect pufferpanel --format='{{range .Config.Env}}{{println .}}{{end}}'


The variables follow the format of the JSON config, just using _ to handle children instead of {}.


Tags
----

pufferpanel/pufferpanel:latest
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This includes all the dependencies for game servers that we include in our templates.
This is a combination of all below images.
This is the best image for just getting the panel up and running with little effort.


pufferpanel/pufferpanel:java
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This includes both Java 8 and Java 16 from OpenJDK. This lets you handle both pre-1.17 and 1.17+ Minecraft: Java Edition servers. 
Java 8 is accessible by using java8 as your Java command with javac8 for the compiler.
Java 16 is accessible by using java16 as your Java command with javac16 for the compiler.
Java 16 is the default JRE if java is used.


pufferpanel/pufferpanel:srcds
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This includes all SRCDS dependencies for game servers such as CS:GO.


pufferpanel/pufferpanel:nodejs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This includes all NodeJS dependencies.


pufferpanel/pufferpanel:base
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This is a no-dependency installation that only includes the panel. This is the recommended image for just running the panel
or if you need to create a custom image.
