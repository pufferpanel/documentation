Template Definitions
====================

How to add a new template
-------------------------

One of the main features of PufferPanel is its template system, 
which makes it very easy to add new games by simply editing a 
JSON file through your panel, or importing one of our templates 
from https://github.com/PufferPanel/templates

Template Structure
------------------

Templates are made up of a beginning description and 4 main sections: 
install, run, environment, and data

Variables are created in the data section and can be used throughout the template with the syntax 
```${variable}``` to replace data where needed.

**type:** To start, include the beginning section which includes the "type" of template it is. 
This type field is not utilized yet, but will be in the future for grouping of templates.

For this example we are going to make a template for SpongeForge, so the type is set to "java"
like the other Minecraft templates.

**display:** This sets the name of the template displayed in PufferPanel.

.. code-block:: json

  {
    "type": "java",
    "display": "SpongeForge - Minecraft"
  }
  
Run Section
-----------
  
The run section defines what happens when the start and stop buttons are pressed.

* **stop** - Command to send to the console of the running server to stop it
* **pre** - Processors to run before the server starts
* **post** - Processors to run after the server starts
* **command** - Command to run that runs the actual server
* **environmentVars** - Any environment variables to set for this server


.. code-block:: json

  {
    "run": {
      "stop": "stop",
      "pre": [],
      "post": []
      "command": "java -Xmx${memory} -jar server.jar"
    }
  }

Pre and post support the operators defined in the above section.

Environment variables are a simple key-value mapping. This can be used to set environment variables as a hard-coded value, or as a variable if needed.

.. code-block:: json

  { 
    "environmentVars": {
      "NAME": "VALUE",
      "IP": "${ip}"
    }
  }
  
  
Operators
---------

A "operations" is a command or operation that can occur on installing, before starting, and 
after stopping a server. Operators are made up of different times, each one having a specific job.

These operations include (but not limited to):
  * download
  * move
  * command
  * writefile
  * mkdir

Each processor has access to each data variable defined, and can use their values. They also have 
the environment variables which can be defined in the run section below. 

download
^^^^^^^^

Downloads a file or multiple files

.. code-block:: json

  {
    "type": "download",
    "files": [
      "http://files.minecraftforge.net/maven/net/minecraftforge/forge/${forgeversion}/forge-${forgeversion}-installer.jar",
      "http://files.minecraftforge.net/maven/org/spongepowered/spongeforge/${spongeversion}/spongeforge-${spongeversion}.jar"
    ]
  }

move
^^^^

Can be used to either move a file into a different location, or rename a file. 

In this case we are renaming a file that begins with "forge-" to "installer.jar" so that the commands 
below will work even if the version of Forge changes.

.. code-block:: json

  {
    "source": "forge-*.jar",
    "target": "installer.jar",
    "type": "move"
  }
  
This is moving a file that begins with "spongeforge-" into the newly created mods directory

.. code-block:: json

  {
    "source": "spongeforge-*.jar",
    "target": "mods",
    "type": "move"
  }
        

mkdir
^^^^^

Creates a new directory

.. code-block:: json

  {
    "target": "mods",
    "type": "mkdir"
  }        

command
^^^^^^^

Executes a command directly on the system. You should use this type only when necessary, 
and if possible, make the commands generic to the host operating system.

.. code-block:: json

  {
    "commands": [
      "java -jar installer.jar --installServer"
    ],
    "type": "command"
  }

writefile
^^^^^^^^^

Writes text into a file, including writing the value of defined variables such as ${ip} and ${port}.

.. code-block:: json

  {
    "type": "writefile",
    "text": "server-ip=${ip}\nserver-port=${port}\n",
    "target": "server.properties"
  }
