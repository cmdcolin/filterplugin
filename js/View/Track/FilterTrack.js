define([
    'dojo/_base/declare',
    'JBrowse/View/Track/CanvasFeatures'
],
function(
    declare,
    CanvasFeatures
) {
    return declare(CanvasFeatures, {
        constructor: function() {
            console.log('FilterFeature track added');
        },
        _trackMenuOptions: function() {
            var opts = this.inherited(arguments);
            var thisB = this;
            opts.push({
                label: "Add high quality filter?",
                type: "dijit/CheckedMenuItem",
                checked: !!this.config.filterEnabled,
                onClick: function() {
                    if(this.checked) {
                        thisB.addFeatureFilter(function(feat) {
                            return feat.get('quality')=='high';
                        }, 'myfilter');
                    }
                    else {
                        thisB.removeFeatureFilter('myfilter');
                    }
                    thisB.config.filterEnabled = this.checked;
                    thisB.redraw();
                }
            });
            return opts;
        }
    });
});
