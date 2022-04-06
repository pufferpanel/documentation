Using a Database
================

PufferPanel supports several databases out of the box.

- SQLite (default)
- MySQL/MariaDB
- PostgreSQL
- Microsoft SQL Server

Note that changing the database engine that is being used after installation is NOT supported at this time. It is recommended to configure a database beforehand if you do not wish to use SQLite. SQLite is the default database we use, as it is localized and easy to manage, however it may not handle scale or replication. As such, for small-scale databases it will be sufficient, but any large-scale install should consider one of the other database engines that are supported.

SQLite
^^^^^^^^^^^^^^^^^^

.. code-block:: JSON

  {
    "panel": {
      "database": {
        "dialect": "sqlite3",
        "url": "file:/var/lib/pufferpanel/database.db?cache=shared"
      }
    }
  }

MySQL/MariaDB
^^^^^^^^^^^^^^^^^^

.. code-block:: JSON

  {
    "panel": {
      "database": {
        "dialect": "mysql",
        "url": "user:pass@tcp(127.0.0.1:3306)/pufferpanel"
      }
    }
  }
  
PostgresSQL
^^^^^^^^^^^^^^^^^^

.. code-block:: JSON

  {
    "panel": {
      "database": {
        "dialect": "postgresql",
        "url": "user=pufferpanel password=pufferpanel dbname=pufferpanel port=9920 sslmode=disable"
      }
    }
  }
  
Microsoft SQL Server
^^^^^^^^^^^^^^^^^^^^

.. code-block:: JSON

  {
    "panel": {
      "database": {
        "dialect": "sqlserver",
        "url": "sqlserver://username:password@localhost:9930?database=pufferpanel"
      }
    }
  }
