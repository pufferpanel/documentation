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


Q: Where do I find my servers IP address?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

PufferPanel will bind to every address on its host system by default, you can find interface addresses on most Linux systems via ``ip a``. If you don't have access to this, you're likely not using a supported platform.

Q: Can I use GitHub CodeSpaces/I need help with GitHub CodeSpaces.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It is against GitHub's TOS to use their services for hosting, consequently, we will not provide any support.
