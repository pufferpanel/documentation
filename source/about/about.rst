What is PufferPanel?
====================


PufferPanel is a web-based Game Server Management System created by players for players. PufferPanel allows you to run multiple different game servers all from one central location, and give other users their own servers, or access to your own servers.

At its core, PufferPanel is a self-contained, statically linked binary which functions as a command runner for supported environments and provides users access to interact with these processes via a self-served Vue.js Web UI.

Open Source
^^^^^^^^^^^

PufferPanel has been and will always be committed to being free and open-source software. All of our projects are available on our `GitHub Account <https://github.com/PufferPanel>`_ and we welcome any user to submit ideas or code. Being licensed under appropriate licenses means that you are welcome to run PufferPanel in a commercial (for-profit) environment or make any changes to the system that you see fit.


Why Create PufferPanel
^^^^^^^^^^^^^^^^^^^^^^

We set out to create PufferPanel to fill a hole in the Game Server industry. There are very few free and open-source game management panels out there, and we wanted to be the one. There are many users who simply cannot afford to shell out money on expensive management panels just to run a few personal servers, or to get access to a system that restricts them from making modifications to the system. PufferPanel changes all of this by providing a simple interface that can support multiple game types and keeps things simple and non-bloated.


Why Use PufferPanel
^^^^^^^^^^^^^^^^^^^

PufferPanel offers you a no-hassle solution for managing your game servers at a personal level. By keeping all of our code open-source we allow anyone to submit ideas and features directly to the panel. In addition, you can browse through everything and submit bug reports and fixes as you find and patch them without having to wait on someone else to fix and release a new version.

Best of all? It's free.

What PufferPanel Isn't
^^^^^^^^^^^^^^^^^^^^^^

- A general purpose containerisation platform (docker) or a resource accounting/management layer (cgroups).
- A network management layer, port forwarding tool, proxy manager etc. Networking behaves as you would ordinarily expect.
- Database Management System (DBMS). There is no capacity to manage databases or provide them to child processes.
- Integrated for commercial use. There is no support for automatically provisioning servers, billing integration or anything of the like.

Design
^^^^^^

PufferPanel is designed with a purposefully narrow software stack to keep the maintenance burden and complexity down. As it ships as an OS package, it is simple to install and upgrade, it's like any other package on your system!

Specifically, it comprises two pieces:

1) A Vue.js Web UI to interact and manage most of the Panels features.
2) A Golang backend that both acts as the web server, the back end (node) and the file management layer.

Fundamentally, PufferPanel relies on the concept of “Templates” which are JSON definitions of procedures used to __provision__ servers, these are how we provide support for various pieces of software.