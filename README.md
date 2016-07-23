Wraith on Kalabox
=================

**"Wraith on Kalabox"** is a [Kalabox](http://kalabox.io) plugin that allows users to add [Wraith](http://bbc-news.github.io/wraith/) to their Kalabox app so they can do some basic visual regression and diff testing.

**If you are unfamiliar with Kalabox we highly recommend you read the main [Kalabox docs](http://docs.kalabox.io) before continuing.**

Installation
------------

Before you install **"Wraith on Kalabox"**  we assume you have [installed Kalabox](http://docs.kalabox.io/en/stable/users/install/) and have a running Kalabox app. You will also need to have [node and npm](http://nodejs.org) installed.

**Download the plugin**

```bash
# Go into an app you are running
cd /path/to/my/app

# Install plugin with npm
npm install https://github.com/kalabox/kalabox-plugin-wraith.git
```

**Activate the plugin**

Find the `kalabox.yml` for your app and ensure `kalabox-plugin-wraith` is included in your list of plugins. NOTE: You may need to add `plugins` if it does not already appear in your `kalabox.yml` file.

```yaml
plugins:
  - kalabox-plugin-wraith
```

**Restart the app**

Restart your app. This will download and build any needed Docker images provided by the plugin.

```bash
# Restart the app with debug more on so we can get some extra info
kbox restart -- -d
```

Using Wraith
------------



Configuring Wraith
------------------

For Developers
--------------

Developers can install the plugin with git.

```bash
cd /path/to/app
mkdir -p plugins
cd plugins
git clone https://github.com/kalabox/kalabox-plugin-wraith.git
cd kalabox-plugin-wraith
npm install
```

Then follow the steps to activate the plugin and restart the app from the main installation steps above.

Other Resources
---------------

* [Mountain climbing advice](https://www.youtube.com/watch?v=tkBVDh7my9Q)
