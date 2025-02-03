Getting Support for PufferPanel
===============================

Do Your Homework First
^^^^^^^^^^^^^^^^^^^^^^

We try to cover off common issues, problems, and situations in our documentation. Please start with reading that first.

For topics outside PufferPanel, please try to educate yourself about using Linux first. It's not hard, we promise!

We recommend `Linux Journey <https://linuxjourney.com/>`_ for absolute beginners.

Craft Thoughtful Questions
^^^^^^^^^^^^^^^^^^^^^^^^^^

Support fatigue is a real concern, and, it's unfair to expect help when you're not willing to put basic effort in.

To help us, help you, please take a proactive approach when requesting help. Show the problem you're addressing, what steps have you taken to address it, etc.


Describe the Problem
^^^^^^^^^^^^^^^^^^^^

Provide a detailed explanation of what you're trying to accomplish and what went wrong. Avoid vague statements like “Doesn't work.” Instead, specify the issue: e.g., “When attempting to start PufferPanel, I encounter an error message stating ``[ERROR] 2024/07/27 18:57:56 open email/emails.json: no such file or directory``”.

Provide Logs
^^^^^^^^^^^^

Always prefer logs to screenshots, they generally contain more information to help diagnose issues.

When you *must* take a screenshot, please do not truncate it. Show the entire web page.

Logs are essential for diagnosing issues. PufferPanel's logs are typically stored at ``/var/log/pufferpanel``.

If using Docker, access logs via ``docker logs <container_name>``. For system services, use ``journalctl``.



Useful details
^^^^^^^^^^^^^^

To avoid playing 20 questions, please also include the following information:

* The PufferPanel version:

.. code-block:: console

    # pufferpanel version


* Exact OS version, I.E. ``Ubuntu Server 24.04 ("Noble Numbat")`` instead of ``Ubuntu``.

* CPU Model or Architecture. I.E. ``AMD Ryzen 9 7950X3D 16-Core Processor`` or ``Ampere A1``.

* (If Applicable) What template you're using I.E. ``Minecraft`` or ``Palworld``.

* (If Applicable) What environment you're trying to use. I.E ``docker`` or ``host``.