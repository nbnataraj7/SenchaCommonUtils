Ext.define("SenchaCommonUtils.utilities.SimpleAccordion", {

//Functionality to be utilized by the any panel

/*----------Create an accordion panel for a Parent panel---------------*/
createPanel: function(parentView, config){
    var header = Ext.create("Ext.Panel", {
        layout: {
            type: "vbox"
        },
        height: config.headerHeight,
        width: config.headerWidth,
        cls: "appicon/collapse.png"
    });
}
});