Themes
======


.. note::

   Theming support has been added with 2.1.0, older version do not support this


Using Themes
------------

Every theme consists of one ``.tar`` file, place this file (without extracting it) in the ``themes`` directory in your panels web files (usually ``/var/www/pufferpanel/``)
The next time you visit your panel the dark mode button will have turned into a theming button which, when clicked, will bring up both the dark mode switch and all the themes available on your panel


Creating Themes
---------------

As mentioned in the previous section, every theme consists of one ``.tar`` file, the name of this file is also the name of the theme as displayed on the panel

This ``.tar`` file can be created with the command ``tar -cf <theme name>.tar theme.json theme.css [...]``

A theme always needs to contain a ``theme.json`` file, in this file you'll specify the color schemes of your theme for both light and dark mode

Additionally you can include a ``theme.css`` which you can use to include custom CSS with which you can take control of the panels looks beyond changing the colors
If you want to change the colors of some element using CSS it is advised to use the CSS variables that are automatically generated using the colors in your ``theme.json``

Sometimes you might want to use additional resources like images in your CSS
To do so you simply add those resources to the tar file and refer to them in your CSS by their path in the tar file
If for example your tar file contains an ``img`` directory in which you have a file called ``bg.png`` you would refer to this file in your CSS as ``img/bg.png``

The following is an example of a ``theme.json`` as it would look for the panels default theme defining all colors used by the panel

.. code:: json

   {
     "colors": {
       "light": {
         "primary": "#07a7e3",
         "anchor": "#07a7e3",
         "accent": "#65a5f8",
         "info": "#2196f3",
         "success": "#4caf50",
         "warning": "#fb8c00",
         "error": "#ff5252"
       },
       "dark": {
         "primary": "#3b8db8",
         "anchor": "#07a7e3",
         "accent": "#65a5f8",
         "info": "#2196f3",
         "success": "#4caf50",
         "warning": "#fb8c00",
         "error": "#ff5252"
       }
     }
   }
