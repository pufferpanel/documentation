Finding Your Logs
=================


PufferPanel and pufferd are 2 different pieces of software which make up the panel. As a result, there are several locations in which your logs will reside.


PufferPanel Logs
^^^^^^^^^^^^^^^^

The PufferPanel logs are located by default next to the rest of your panel files. If you followed the installation steps defined, this would be located at ``/srv/pufferpanel/logs``. Otherwise, it is the logs folder where your panel was installed at.

.. admonition:: SENSITIVE INFORMATION
   :class: danger

   Unless otherwise asked by a developer, DO NOT share the .html located in this directory. They contain information which can be used to access your panel and/or your account. ONLY provide the .log files.


pufferd Logs
^^^^^^^^^^^^

As pufferd is designed to work with your system and follow more standardized practices, the pufferd logs are located in /var/log/pufferd by default. These logs are broken up based on date the process was started.
