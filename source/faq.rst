Frequently Asked Questions
==========================


Q: Billing module?
^^^^^^^^^^^^^^^^^^

The development team takes the stance that any user who wishes to make money off of selling servers should be using software which has paid support or a similar guarantee to get support if and when there are issues. We also believe that such users should also use a panel which has been through numerous security audits to protect both their own information and that of their customers.

As such, we do not believe we are the best software for such a service. We do not over-sell ourselves and will not risk our own users for the sake of making money, or those that use our software in any form to make money.

While a module may occur in the future, the current panel code is not suitable for supporting such a feature.


Q: Where are my logs?
^^^^^^^^^^^^^^^^^^^^^

PufferPanel stores all of their logs in ``/var/log/pufferpanel``.


Q: Where are the servers located?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

PufferPanel stores all the servers in ``/var/lib/pufferpanel/servers``.


Q: Can I migrate from v1 to v2?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

At this time, we do not have a migration path to v2. Due to the changing nature of v2, we do not want to have to deal with rewriting migrations if we have to make changes. Once v2 is more stable, we will have a migration tool to help move from v1 to v2.

Q: How do I disable user registration?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Log into you PufferPanel installation with an admin account and navigate to the ``Settings`` page from the sidebar, there you'll find a checkbox ``Allow users to register themselves``, untick that and hit ``Save`` and the registration link will not be shown on the login page anymore and attempts to register for example using the API will now always fail.

Q: How do I change the panel title?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Log into you PufferPanel installation with an admin account and navigate to the ``Settings`` page from the sidebar, there you'll find a text field ``Company Name``, change that and hit ``Save`` and the panel title will be updated.

Q: How do I run a bot/are there templates for bots?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

PufferPanel works as an abstraction over the host OS so, it supports everything the host OS does.

Generic templates for "X" bot/bot library don't exist, each project works differently. There is no generic way to cover them.

You'll need to create a template for them yourself, this is quite straight forward and there are plenty of  `example templates <https://github.com/PufferPanel/templates/>`_ to work from.

Q: I am getting permission errors with my files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Stop messing with your files outside of PufferPanel. PufferPanel does not run under a "special" user that ignores permissions on files. If you are mucking with them outside of the SFTP credentials provided by the panel, it *WILL* screw them up.

To fix it, you can run ``chown -R pufferpanel:pufferpanel /var/lib/pufferpanel`` to fix the permissions once. If you run into this error again, re-read this entire block.

Q: I am having a port conflict, how do I change the port?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update the port in ``web.host`` in the panels config (``/etc/pufferpanel/config.json``).

  Note: The _only_ reason to ever do this, is for handling port conflicts. When you want to have your game panel exposed over the internet, you should **always** `use a reverse proxy to setup TLS </en/latest/guides/ssl-setup-nginx.html>`_, to ensure your server remains secure.

Q: Where do I find my servers IP address?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

PufferPanel will bind to every address on its host system by default, you can find interface addresses on most Linux systems via ``ip a``. If you don't have access to this, you're likely not using a supported platform.

Q: Can I use GitHub CodeSpaces/I need help with GitHub CodeSpaces.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It is against GitHub's TOS to use their services for hosting, consequently, we will not provide any support.
