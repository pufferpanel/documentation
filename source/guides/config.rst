Configuration
=============

PufferPanel is configured either via environment variables or via a JSON configuration file.

Each configuration environment variable is prefixed with ``PUFFER``.

The configuration file is located at ``/etc/pufferpanel/config.json`` by default.
If it is not found there, PufferPanel also checks the current working directory for a ``config.json`` file.
The configuration file path can be overridden with the ``PUFFER_CONFIG`` environment variable.

.. note::
  Relative directories in config options are relative to the current working directory of the PufferPanel process.

Configuration Options
---------------------

+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| Config File                             | Environment Variables                              | Description                                                                  |
+=========================================+====================================================+==============================================================================+
| logs                                    | ``PUFFER_LOGS``                                    | Path of the directory in which to place the ``pufferpanel.log`` file.        |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| web.host                                | ``PUFFER_WEB_HOST``                                | The IP (and port) that the HTTP server listens on.                           |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.enable                            | ``PUFFER_PANEL_ENABLE``                            | Whether the panel (frontend) is enabled or not.                              |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.database.dialect                  | ``PUFFER_PANEL_DATABASE_DIALECT``                  | | The type of database that the panel is using/connecting to.                |
|                                         |                                                    | | Supported: ``sqlite3``, ``mysql``, ``postgresql``, ``sqlserver``           |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.database.url                      | ``PUFFER_PANEL_DATABASE_URL``                      | | The url of the database to use. This is specific to the dialect.           |
|                                         |                                                    | | e.g. for ``"sqlite3"``, a ``file:<path>`` URL is used.                     |
|                                         |                                                    |                                                                              |
|                                         |                                                    | If the value is empty, ``"pufferpanel:pufferpanel@/pufferpanel"`` (for mysql)|
|                                         |                                                    | and ``"file:pufferpanel.db"`` (for sqlite3) is used instead.                 |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.database.log                      | ``PUFFER_PANEL_DATABASE_LOG``                      | Whether to enable extra verbose database logging.                            |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.web.files                         | ``PUFFER_PANEL_WEB_FILES``                         | | Path of a directory containing additional/replacement files to serve.      |
|                                         |                                                    | | e.g. additional themes, branding                                           |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.web.cookies.secure                | ``PUFFER_PANEL_WEB_COOKIES_SECURE``                | Value of the ``Secure`` header for setting cookies                           |
|                                         |                                                    | (see `MDN Set-Header#Secure`_)                                               |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.web.cookies.httpOnly              | ``PUFFER_PANEL_WEB_COOKIES_HTTPONLY``              | Value of the ``HttpOnly`` header for setting cookies                         |
|                                         |                                                    | (see `MDN Set-Header#httponly`_)                                             |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.web.cookies.domain                | ``PUFFER_PANEL_WEB_COOKIES_DOMAIN``                | Value of the ``Domain`` header for setting cookies                           |
|                                         |                                                    | (see `MDN Set-Header#domaindomain-value`_)                                   |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.web.cookies.age                   | ``PUFFER_PANEL_WEB_COOKIES_AGE``                   | Value of the ``Max-Age`` header for setting cookies                          |
|                                         |                                                    | (see `MDN Set-Header#max-agenumber`_)                                        |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.web.cookies.sameSite              | ``PUFFER_PANEL_WEB_COOKIES_SAMESITE``              | Value of the ``SameSite`` header for setting cookies                         |
|                                         |                                                    | (see `MDN Set-Header#samesitesamesite-value`_)                               |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.web.cookies.path                  | ``PUFFER_PANEL_WEB_COOKIES_PATH``                  | Value of the ``Path`` header for setting cookies                             |
|                                         |                                                    | (see `MDN Set-Header#pathpath-value`_)                                       |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.email.templateFolder              | ``PUFFER_PANEL_EMAIL_TEMPLATEFOLDER``              | Path to a directory which contains ``email.json`` and templates for          |
|                                         |                                                    | the different emails sent by PufferPanel.                                    |
|                                         |                                                    |                                                                              |
|                                         |                                                    | If present, ``email.json`` overrides the default included in PufferPanel.    |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.email.provider                    | ``PUFFER_PANEL_EMAIL_PROVIDER``                    | | Which email provider to use for sending emails to users.                   |
|                                         |                                                    | | Supported: ``smtp``, ``sendgrid``, ``mailjet``, ``mailgun``, ``debug``     |
|                                         |                                                    | | If set to an empty string or any unsupported value, emails are disabled.   |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.email.from                        | ``PUFFER_PANEL_EMAIL_FROM``                        | | The FROM field (or sender Email address) to use for outgoing emails.       |
|                                         |                                                    | | With some providers, only an email address might be supported only.        |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.email.domain                      | ``PUFFER_PANEL_EMAIL_DOMAIN``                      | | Used by the ``mailgun`` and ``mailjet`` providers.                         |
|                                         |                                                    | | For ``mailgun``: The domain registered in the admin interface.             |
|                                         |                                                    | | For ``mailjet``: The public API key.                                       |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.email.host                        | ``PUFFER_PANEL_EMAIL_HOST``                        | | Used by the ``smtp`` provider.                                             |
|                                         |                                                    | | For ``smtp``: The IP/domain and port of the mail server to connect to.     |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.email.key                         | ``PUFFER_PANEL_EMAIL_KEY``                         | | Used by the ``mailgun``, ``mailjet`` and ``sendgrid`` providers.           |
|                                         |                                                    | | For ``mailgun``: The private API key.                                      |
|                                         |                                                    | | For ``mailjet``: The private API key.                                      |
|                                         |                                                    | | For ``sendgrid``: The private API key.                                     |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.email.username                    | ``PUFFER_PANEL_EMAIL_USERNAME``                    | | Used by the ``smtp`` provider.                                             |
|                                         |                                                    | | For ``smtp``: The username used to authenticate to the SMTP server.        |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.email.password                    | ``PUFFER_PANEL_EMAIL_PASSWORD``                    | | Used by the ``smtp`` provider.                                             |
|                                         |                                                    | | For ``smtp``: The password used to authenticate to the SMTP server.        |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.settings.companyName              | ``PUFFER_PANEL_SETTINGS_COMPANYNAME``              | Name that is displayed in the user interface (e.g. heading).                 |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.settings.defaultTheme             | ``PUFFER_PANEL_SETTINGS_DEFAULTTHEME``             | | The theme that is selected by default, if not overridden by a user.        |
|                                         |                                                    | | This theme is also used for e.g. the login page.                           |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.settings.themeSettings            | ``PUFFER_PANEL_SETTINGS_THEMESETTINGS``            | The default theme settings applied to the theme selected in                  |
|                                         |                                                    | ``panel.settings.defaultTheme``.                                             |
|                                         |                                                    |                                                                              |
|                                         |                                                    | These settings are also applied to e.g. the login page.                      |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.settings.masterUrl                | ``PUFFER_PANEL_SETTINGS_MASTERURL``                | The base URL that the panel can be reached at.                               |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.sessionKey                        | ``PUFFER_PANEL_SESSIONKEY``                        | | The key used to sign the session cookie.                                   |
|                                         |                                                    | | If this value is empty, a new value is generated and saved in the config.  |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.registrationEnabled               | ``PUFFER_PANEL_REGISTRATIONENABLED``               | Whether users should be able to register accounts themselves.                |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| panel.token                             | ``PUFFER_PANEL_TOKEN``                             | | The seed used to generate the private key for signing JWTs.                |
|                                         |                                                    | | If this value is empty, a new value is generated and saved in the config.  |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.enable                           | ``PUFFER_DAEMON_ENABLE``                           | Whether the daemon (backend) is enabled.                                     |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.console.buffer                   | ``PUFFER_DAEMON_CONSOLE_BUFFER``                   | Size of the memory buffer used to cache a server's output in KB.             |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.console.forward                  | ``PUFFER_DAEMON_CONSOLE_FORWARD``                  | Whether to forward the output of servers to stdout.                          |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.sftp.host                        | ``PUFFER_DAEMON_SFTP_HOST``                        | The IP (and port) that the SFTP server listens on.                           |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.sftp.key                         | ``PUFFER_DAEMON_SFTP_KEY``                         | | The path to a file containing the private key used by the SFTP server.     |
|                                         |                                                    | | If this file does not exist, it is generated with a fresh private key.     |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.sftp.log                         | ``PUFFER_DAEMON_SFTP_LOG``                         | Whether to enable debug logging for the SFTP server.                         |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.auth.url                         | ``PUFFER_DAEMON_AUTH_URL``                         | The url of the panel to authenticate to.                                     |
|                                         |                                                    |                                                                              |
|                                         |                                                    | This option is only relevant for remote nodes and is provided by the panel   |
|                                         |                                                    | when registering the remote node.                                            |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.auth.clientId                    | ``PUFFER_DAEMON_AUTH_CLIENTID``                    | The client identifier used by a remote node to authenticate to the panel.    |
|                                         |                                                    |                                                                              |
|                                         |                                                    | This option is only relevant for remote nodes and is provided by the panel   |
|                                         |                                                    | when registering the remote node.                                            |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.auth.clientSecret                | ``PUFFER_DAEMON_AUTH_CLIENTSECRET``                | The client secret used by a remote to authenticate to the panel.             |
|                                         |                                                    |                                                                              |
|                                         |                                                    | This option is only relevant for remote nodes and is provided by the panel   |
|                                         |                                                    | when registering the remote node.                                            |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.data.cache                       | ``PUFFER_DAEMON_DATA_CACHE``                       | The path of the directory to use as a cache folder.                          |
|                                         |                                                    |                                                                              |
|                                         |                                                    | If this is a relative path, it will be relative to the path set in           |
|                                         |                                                    | *daemon.data.root*.                                                          |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.data.servers                     | ``PUFFER_DAEMON_DATA_SERVERS``                     | The path of the directory in which to store the servers' data.               |
|                                         |                                                    |                                                                              |
|                                         |                                                    | If this is a relative path, it will be relative to the path set in           |
|                                         |                                                    | *daemon.data.root*.                                                          |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.data.backups.folder              | ``PUFFER_DAEMON_DATA_BACKUPS_FOLDER``              | The path of the directory in which to store server backups.                  |
|                                         |                                                    |                                                                              |
|                                         |                                                    | If this is a relative path, it will be relative to the path set in           |
|                                         |                                                    | *daemon.data.root*.                                                          |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.data.binaries                    | ``PUFFER_DAEMON_DATA_BINARIES``                    | The path of the directory in which to store downloaded binary files          |
|                                         |                                                    | (e.g. Java, DepotDownloader).                                                |
|                                         |                                                    |                                                                              |
|                                         |                                                    | If this is a relative path, it will be relative to the path set in           |
|                                         |                                                    | *daemon.data.root*.                                                          |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.data.root                        | ``PUFFER_DAEMON_DATA_ROOT``                        | The path of the directory to use as a data root directory.                   |
|                                         |                                                    |                                                                              |
|                                         |                                                    | If this value is an empty string, the parent directory of the servers        |
|                                         |                                                    | folder will be used instead.                                                 |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.data.crashLimit                  | ``PUFFER_DAEMON_DATA_CRASHLIMIT``                  | The maximum amount of times that a server can crash while still being        |
|                                         |                                                    | restarted.                                                                   |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.curseforge.key                   | ``PUFFER_DAEMON_CURSEFORGE_KEY``                   | If not an empty string, overrides the default Curseforge API key provided by |
|                                         |                                                    | PufferPanel.                                                                 |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.depotDownloader.version          | ``PUFFER_DAEMON_DEPOTDOWNLOADER_VERSION``          | The version tag that should be used when downloading DepotDownloader.        |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| daemon.depotDownloader.disableLancache  | ``PUFFER_DAEMON_DEPOTDOWNLOADER_DISABLELANCACHE``  | Whether to disable the usage of a LAN cache by DepotDownloader.              |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| token.public                            | ``PUFFER_TOKEN_PUBLIC``                            | The URL at which a remote node can obtain the public key of the panel.       |
|                                         |                                                    |                                                                              |
|                                         |                                                    | This option is only relevant for remote nodes and is provided by the panel   |
|                                         |                                                    | when registering the remote node.                                            |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| security.forceOpenat                    | ``PUFFER_SECURITY_FORCEOPENAT``                    | | Override the check for the OpenAt2 syscall and force to not use it.        |
|                                         |                                                    | | This option should only be used if the implications are fully understood.  |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| security.trustedProxies                 | ``PUFFER_SECURITY_TRUSTEDPROXIES``                 | A list of proxy IP addresses which are trusted to provide the actual client  |
|                                         |                                                    | IP via a header defined in *security.trustedProxyHeader*.                    |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| security.trustedProxyHeader             | ``PUFFER_SECURITY_TRUSTEDPROXYHEADER``             | The name of the header which contains the actual client IP for a trusted     |
|                                         |                                                    | proxy.                                                                       |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| security.disableUnshare                 | ``PUFFER_SECURITY_DISABLEUNSHARE``                 | Whether to globally disable the usage of unshare.                            |
|                                         |                                                    |                                                                              |
|                                         |                                                    | Unshare provides some additional security, so disabling it for the entire    |
|                                         |                                                    | panel is not recommended.                                                    |
|                                         |                                                    | Unshare can be disabled on a per-server basis if it poses problems there.    |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| docker.root                             | ``PUFFER_DOCKER_ROOT``                             | If set to a non-empty string, overrides the directory where the server files |
|                                         |                                                    | live on the host system. This is used when the panel is also running inside  |
|                                         |                                                    | a docker container.                                                          |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+
| docker.disallowHost                     | ``PUFFER_DOCKER_DISALLOW_HOST``                    | Whether to disable environment options that would be executed on the host    |
|                                         |                                                    | (e.g. tty)                                                                   |
+-----------------------------------------+----------------------------------------------------+------------------------------------------------------------------------------+

.. _`MDN Set-Header#Secure`: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure
.. _`MDN Set-Header#httponly`: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly
.. _`MDN Set-Header#domaindomain-value`: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#domaindomain-value
.. _`MDN Set-Header#max-agenumber`: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#max-agenumber
.. _`MDN Set-Header#samesitesamesite-value`: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value
.. _`MDN Set-Header#pathpath-value`: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#pathpath-value

Configuration Files with Default Values
---------------------------------------

.. tab:: DEB/RPM Package

  .. code-block:: json

    {
      "logs": "/var/log/pufferpanel",
      "panel": {
        "database": {
          "dialect": "sqlite3",
          "url": "file:/var/lib/pufferpanel/database.db?cache=shared"
        },
        "web": {
          "files": "/var/www/pufferpanel"
        }
      },
      "daemon": {
        "data": {
          "root": "/var/lib/pufferpanel"
        }
      },
      "web": {
        "host": "0.0.0.0:8080"
      }
    }

.. tab:: Docker

  .. code-block:: json

    {
      "logs": "/var/log/pufferpanel",
      "panel": {
        "database": {
          "dialect": "sqlite3",
          "url": "file:/var/lib/pufferpanel/database.db?cache=shared"
        },
        "web": {
          "files": "/var/www/pufferpanel"
        }
      },
      "daemon": {
        "data": {
          "root": "/var/lib/pufferpanel"
        }
      },
      "docker": {
        "disallowHost": true
      }
    }

.. tab:: Fallback Defaults

  If a value is not set in the config file or in the environment variable, these values are used.

  .. code-block:: json

    {
      "logs": "logs",
      "web": {
        "host": "0.0.0.0:8080"
      },
      "panel": {
        "enable": true,
        "database": {
          "dialect": "sqlite3",
          "url": "",
          "log": false
        },
        "web": {
          "files": "www",
          "cookies": {
            "secure": false,
            "httpOnly": true,
            "domain": "",
            "age": 2592000,
            "sameSite": "Strict",
            "path": "/"
          }
        },
        "email": {
          "templateFolder": "",
          "provider": "",
          "from": "",
          "domain": "",
          "host": "",
          "key": "",
          "username": "",
          "password": ""
        },
        "settings": {
          "companyName": "PufferPanel",
          "defaultTheme": "PufferPanel",
          "themeSettings": {},
          "masterUrl": "http://localhost:8080"
        },
        "sessionKey": "",
        "registrationEnabled": true,
        "token": ""
      },
      "daemon": {
        "enable": true,
        "console": {
          "buffer": 50,
          "forward": false
        },
        "sftp": {
          "host": "0.0.0.0:5657",
          "key": "sftp.key",
          "log": false
        },
        "auth": {
          "url": "http://localhost:8080",
          "clientId": "",
          "clientSecret": ""
        },
        "data": {
          "cache": "cache",
          "servers": "servers",
          "backups": {
            "folder": "backups"
          },
          "binaries": "binaries",
          "crashLimit": 3,
          "root": ""
        },
        "curseforge": {
          "key": ""
        },
        "depotDownloader": {
          "version": "latest",
          "disableLancache": false
        }
      },
      "token": {
        "public": ""
      },
      "security": {
        "forceOpenat": false,
        "trustedProxies": [],
        "trustedProxyHeader": "",
        "disableUnshare": false
      },
      "docker": {
        "root": "",
        "disallowHost": false
      }
    }
