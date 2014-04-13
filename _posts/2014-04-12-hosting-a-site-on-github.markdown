---
layout: post
title:  "Using GoDaddy domain name for username.github.io"
date:   2014-04-12 11:32:47
---
Excellent documentation exists for setting up a website via Github Pages
at https://pages.github.com/. In just a few simple steps, it's possible to see
the results of your index.html file hosted at username.github.io. Love it!

What I wanted to do was to use a special domain name (cassandrajens.me) for this
site. I purchased my domain name from https://godaddy.com.

To set up your Github page with a domain name from GoDaddy, here are a few simple
steps.

1. Go to https://godaddy.com
2. Log in to your account (sign in)
3. The landing page contains a table containing rows of GoDaddy services/solutions.
You'll want to find **DOMAINS** and click **LAUNCH**.
4. In the main navigation, find the **DNS** dropdown and select **DNS Manager**.
5. Under your desired domain name, select **EDIT ZONE**.
6. Add a **CNAME alias** for www, using the following parameters:
    * Host: www
    * Points To: username.github.io

Your domain name, hosted by GoDaddy, will now resolve to the IP address
for username.github.io. Happy website building!
