Using a Database
================

PufferPanel supports several databases out of the box.
- SQLite (default)
- MySQL/MariaDB
- PostgreSQL
- Microsoft SQL Server

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
        "dialect": "postgres",
        "url": "user=pufferpanel password=pufferpanel dbname=pufferpanel port=9920 sslmode=disable"
      }
    }
  }
  
Microsoft SQL Server
^^^^^^^^^^^^^^^^^^

.. code-block:: JSON

  {
    "panel": {
      "database": {
        "dialect": "sqlserver",
        "url": "sqlserver://username:password@localhost:9930?database=pufferpanel"
      }
    }
  }
