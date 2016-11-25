# filterplugin

A JBrowse plugin example which demonstrates the use of the filtering APIs to filter out features on a given track


## Installation

Download this github repo to plugins/FilterPlugin

Then add something like this to your jbrowse_conf.json

    "plugins": ["FilterPlugin"]

See http://gmod.org/wiki/JBrowse_FAQ#How_do_I_install_a_plugin for more details


## Track setup

You can then load your track with the FilterPlugin track type with the --type argument to flatfile-to-json.pl


    bin/flatfile-to-json.pl --type "FilterPlugin/View/Track/FilterTrack" --trackLabel YourTrack --gff yourfile.gff

Alternatively, you can just replace "type" in trackList.json with "FilterPlugin/View/Track/FilterTrack" if your data is already loaded.


This will use the FilterPlugin's track type which adds a track menu option to apply a filter.

## Filter API

The JBrowse filter API includes a basic mixin called FeatureFiltererMixin that adds functions for adding, removing, or chaining multiple filters together. These functions are available globally on the browser object, or on any given track object.

