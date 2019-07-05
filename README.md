THIS PROJECT IS NOW OFFICIALLY DEPRECATED
-----------------------------------------

Kalabox is now deprecated and will EOL sometime later in 2019. 

Check out https://www.kalabox.io for information on how to migrate to either Lando or Pantheon Localdev

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
npm install https://github.com/kalabox/wraith.git --save
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

You will want to confer with the [Wraith documentation](http://bbc-news.github.io/wraith/) on the various commands you can run with wraith. Here is how you invoke  `wraith` commands via Kalabox.

`kbox wraith <wraith arguments>`

```
Options:
  -h, --help     Display help message.                                      [boolean]
  -v, --verbose  Use verbose output.                                        [boolean]
  -d, --debug    Use debug output.                                          [
```

```bash
# Do the wraith setup
kbox wraith setup

# Run capture using the generated config file
kbox wraith capture configs/capture.yaml
```

Configuring Wraith
------------------

`kbox wraith setup`

This will generate the normal wraith config files. They will be accesibile inside of your app at `config/wraith`.

You should note that the `directory` key in your config below is for paths inside of the wraith container and NOT on your local machine. That said your entire app directory will be shared inside of the container at `/src`. This means that in a default app setup setting `directory` to `/src/code/shots` should make your screenshots available at `http://myapp.kbox/shots/gallery.html`. Obviously this can very based on your webser config.

Here is an example config `wraith capture` config file.

```yaml
# (required) The engine to run Wraith with. Examples: 'phantomjs', 'casperjs', 'slimerjs'
browser: "phantomjs"

# (required) The domains to take screenshots of.
domains:
  current:  "http://playbox.kalamuna.com/"
  new:      "http://playbox.kbox"

# (required) The paths to capture. All paths should exist for both of the domains specified above.
paths:
  home:     /

# (required) Screen widths (and optional height) to resize the browser to before taking the screenshot.
screen_widths:
  - 320
  - 600x768
  - 768
  - 1024
  - 1280

# (optional) JavaScript file to execute before taking screenshot of every path. Default: nil
before_capture: 'javascript/disable_javascript--phantom.js'

# (required) The directory that your screenshots will be stored in
directory: '/src/code/shots'

# (required) Amount of fuzz ImageMagick will use when comparing images. A higher fuzz makes the comparison less strict.
fuzz: '20%'

# (optional) The maximum acceptable level of difference (in %) between two images before Wraith reports a failure. Default: 0
threshold: 5

# (optional) Specify the template (and generated thumbnail sizes) for the gallery output.
gallery:
  template: 'slideshow_template' # Examples: 'basic_template' (default), 'slideshow_template'
  thumb_width:  200
  thumb_height: 200

# (optional) Choose which results are displayed in the gallery, and in what order. Default: alphanumeric
# Options:
#   alphanumeric - all paths (with or without a difference) are shown, sorted by path
#   diffs_first - all paths (with or without a difference) are shown, sorted by difference size (largest first)
#   diffs_only - only paths with a difference are shown, sorted by difference size (largest first)
# Note: different screen widths are always grouped together.
mode: diffs_first

```

Here are some more [basic config examples](http://bbc-news.github.io/wraith/configs.html).

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
