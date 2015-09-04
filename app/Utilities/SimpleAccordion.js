Ext.define("SenchaCommonUtils.Utilities.SimpleAccordion", {

//Functionality to be utilized by the any panel


/*--------- Function to Expand and Collapse the Panel -----------------*/
collapseOrExpand: function(view){

},

/*----------Create an accordion panel for a Parent panel---------------*/
createPanel: function(parentView, config, childConfig){

    //Create a Collapsible panel
    var collapsiblePanel = Ext.create("Ext.Panel", {
        layout: {
            type: "vbox"
        },
        items: [
            {
            // Header
                xtype: 'panel',
                height: config.height,
                html: config.html,
                cls: "collapse-panel-header"
            },
            {
            // Body
                xtype: 'panel',
                height: childConfig.height,
                html: childConfig.html,
                cls: "collapse-panel-body"
            }
        ]
    });

    //Add Collapse Event to this panel
    var panelHead = collapsiblePanel.getItems().getAt(0).on('tap', this.collapseOrExpand.bind(panelHead), this);

    //Add the Panel to the Parent
    parentView.add(collapsiblePanel);
}
});