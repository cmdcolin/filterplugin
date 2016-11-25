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
                onClick: function() {
                    if(this.checked) {
                        console.log('here');
                        thisB.addFeatureFilter(function(feat) {
                            console.log(feat.get('type'));
                            return feat.get('quality')=='high';
                        }, 'myfilter');
                    }
                    else {
                        thisB.removeFeatureFilter('myfilter');
                    }
                }
            });
            return opts;
        }
    });
});
