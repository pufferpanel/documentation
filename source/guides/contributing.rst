Contributing
============

Translations
-------------

If you want to help with translating PufferPanel `please follow this link <https://crowdin.com/project/pufferpanel>`_

Templates
---------

If you want to contribute new templates or changes to existing ones `please take a look at the templates repository <https://github.com/PufferPanel/templates>`_

Development
-----------

| To contribute features or bugfixes you'll want to set up a development environment to test your changes, the following will help you with that
| If you plan to contribute your changes it is generally a good idea to come to `our discord server <https://discord.gg/v8dz49e>`_ and talk to the team beforehand so you don't end up investing your time into something someone else is already working on or might even have finished already, though that is not required

After making your changes you can contribute them by opening a pull request on `the PufferPanel repository <https://github.com/PufferPanel/PufferPanel>`_

Requirements
^^^^^^^^^^^^

First of all you will need a few tools

* `The golang toolchain (at least version 1.15 at the point of writing) <https://golang.org/doc/install>`_
* NodeJS (at least version 14 at the point of writing, see `here for Linux <https://nodejs.org/en/download/package-manager/>`_ or `here for Windows and macOS <https://nodejs.org/en/download/>`_)
* NPM (should come bundled with NodeJS)
* `A Git client <https://git-scm.com/downloads>`_ (other Git clients are fine too, but the following will assume the standard Git CLI tool)

Setup
^^^^^

| Clone the repository somewhere convenient for you with the command ``git clone https://github.com/PufferPanel/PufferPanel.git``
| The command will create new directory named ``PufferPanel`` for you, this will be referred to as the repo root or repository root
| In there you will find all the source code as well as some additional files
| Navigate into that directory in your command line (``cd PufferPanel``) and navigate into the ``client`` directory there (``cd client``), then run ``npm install`` to download/update the dependencies of the frontend code
| You will probably want a custom config file for your development setup to be able to customize a few things like where data is stored, the following example will set all data to be stored in a directory ``PufferPanelData`` outside of the repository, enable logging of database queries and emails that would otherwise be sent and set the port the panel starts on to ``8080``, however you can of course cutomize it according to your needs

.. code::

   {
     "logs": "../PufferPanelData/logs",
     "web": {
       "host": "0.0.0.0:8080"
     },
     "token": {
       "private": "../PufferPanelData/private.pem",
       "public": "../PufferPanelData/public.pem"
     },
     "panel": {
       "database": {
         "dialect": "sqlite3",
         "url": "file:../PufferPanelData/database.db?cache=shared",
         "log": "true"
       },
       "web": {
         "files": "client/dist"
       },
       "email": {
         "templates": "assets/email/emails.json",
         "provider": "debug"
       }
     },
     "daemon": {
       "data": {
         "servers": "../PufferPanelData/servers"
         "modules": "../PufferPanelData/modules"
         "cache": "../PufferPanelData/cache"
       }
     }
   }

Building
^^^^^^^^

| To build the backend, in the repository root, run ``go build -o pufferpanel github.com/pufferpanel/pufferpanel/v2/cmd``
| This produces a binary that you can run using the command ``./pufferpanel``

| To build the frontend, navigate to the ``client`` directory in the repo
| If you want to make a development build, run ``npm run dev-build``, or to keep the process running and have it automatically recompile any changes you make you can run ``npm run dev-watch``
| A development build will provide some helpers useful for debugging and a global ``pufferpanel`` object you can access in the browser console for some quick testing, however development builds are also bigger in file size and less performant
| If you want to make a production build, run ``npm run build``
| A production build is smaller in size but is harder to debug as it doesn't supply the afore mentioned helpers like source maps etc
| The build output will be generated in the ``dist`` directory (that is also why the above example config lists ``client/dist`` as the location for the web files)
