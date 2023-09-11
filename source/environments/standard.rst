Standard
========

The standard environment is the most simple option, however it does **NOT** provide any security features

Execution
---------

Any commands run by servers as part of install, pre/post run hooks or as the run command are executed directly on the host system as the same user PufferPanel is running as, commands are **NOT** run through a shell, meaning that shell features like globbing are only available if the program itself supports it or the command invokes a shell itself

Dependencies
------------

Any software your server depends on like for example Python need to be installed on the host system as a system wide installation, **per user installs will not work as PufferPanel cannot see those**

Security
--------

The standard environment is mostly aimed at personal instances and focusses on simplicity, it does **NOT** prevent servers from accessing each others or PufferPanels files and due to running servers using the same user that PufferPanel is running as ports below 1024 are off limits

If you need strong isolation of servers or access to ports below 1024 consider using the :doc:`docker environment<docker>` instead
