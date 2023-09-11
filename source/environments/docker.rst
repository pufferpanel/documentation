Docker
======

The docker environment runs a separate docker container for every server, however to make use of it you need to first follow :doc:`these instructions </docker>` to set the host system up for docker support

Execution
---------

Any commands run by servers as part of install, pre/post run hooks or as the run command are executed within the server container and therefore have access to anything in the server files and the docker image, but not having access to anything only available on the host system

Dependencies
------------

The docker environment expects you to provide an image that covers all dependencies needed by the application you're trying to run, PufferPanel does **NOT** use the images default entrypoint but rather creates a fresh container for the server, mounts in the server files and runs the run command defined for the server in PufferPanel in the root of the server files, meaning that docker images are really only used as dependency containers

Security
--------

The docker environment uses a separate container for every server and therefore provides strong isolation for files but also processes etc, additionally, running via docker means that you can expose applications on ports below 1024 without actively needing to use a root user, it is therefore a good choice when working with untrusted users
