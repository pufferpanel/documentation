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

Currently, there exist only templates for discord bots (python, js and JDA), found in the `templates repository <https://github.com/PufferPanel/templates/>`_ (can be imported directly from the panel).

If you want to host another type of bot, you'll need to create a template yourself.
This is quite straight forward and there are plenty of  `example templates <https://github.com/PufferPanel/templates/>`_ to work from.
