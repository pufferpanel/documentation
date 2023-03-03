Installing PufferPanel using Docker
===================================

PufferPanel offers several images that include dependencies needed to run game servers. 
We recommend using *latest* as it contains everything you will need to get servers runing quickly.

Creating the container
----------------------

**Via command line**

To create the container, start it, and add the default user:

.. code-block:: bash

    $ mkdir -p /var/lib/pufferpanel
    $ docker volume create pufferpanel-config
    $ docker create --name pufferpanel -p 8080:8080 -p 5657:5657 -v pufferpanel-config:/etc/pufferpanel -v /var/lib/pufferpanel:/var/lib/pufferpanel -v /var/run/docker.sock:/var/run/docker.sock --restart=on-failure pufferpanel/pufferpanel:latest
    $ docker start pufferpanel
    $ docker exec -it pufferpanel /pufferpanel/pufferpanel user add

And you're done. Your panel is now accessible at http://localhost:8080

----

**Via Docker Compose**

You will need the Docker Compose plugin installed on your system.

Create the Pufferpanel directory: 

.. code-block:: bash

    $ mkdir -p /var/lib/pufferpanel

Create the following ``docker-compose.yml`` file which defines the Pufferpanel service, including its ports and volume mappings. This is equivalent to the command line setup above. 

.. code-block:: yml

    version: '3.2'
    services:
      pufferpanel:
        image: pufferpanel/pufferpanel:latest # See "Tags" for other images
        restart: on-failure
        ports:
          - 8080:8080 # XXXX:8080, where port XXXX on the outside (host) will be sent to 8080 inside the container
          - 5657:5657 # YYYY:5657
        volumes:
          - ./pufferpanel-config:/etc/pufferpanel
          - /var/lib/pufferpanel:/var/lib/pufferpanel
          - /var/run/docker.sock:/var/run/docker.sock

Start the container and add the default user:

.. code-block:: bash

    $ docker compose up -d
    $ docker exec -it pufferpanel /pufferpanel/pufferpanel user add

And you're done. Your panel is now accessible at http://localhost:XXXX (where XXXX is 8080 as defined above).


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
