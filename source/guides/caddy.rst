Caddy Configuration
===================

Since Caddy can use different methods of configuring, we will only talk about what to add to your Caddyfile since that is the easiest solution for those new to Caddy.
Caddy supports SSL out of the box with no configuration, so the only thing you will need to do is update the hosname in the configuation below to match your desired hostname.

Reload Caddy to apply this change.

.. code::

  panel.example.com {
      reverse_proxy 127.0.0.1:8080
  }

