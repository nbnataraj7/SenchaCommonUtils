Ext.define("SenchaCommonUtils.Utilities.SimpleAccordion", {

//Functionality to be utilized by the any panel


/*--------- Function to Expand and Collapse the Panel -----------------*/
collapseOrExpand: function(view){
    //Make the panel below the panel header expand or collapse
    var hidden = view.getParent().getItems().getAt(1).getHidden();
    if(hidden){
        view.getParent().getItems().getAt(1).setHidden(false);
        view.removeCls("collapsed");
    }
    else{
        view.getParent().getItems().getAt(1).setHidden(true);
        view.addCls("collapsed");
    }
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
                xtype: 'container',
                height: config.height,
                html: config.html,
                cls: "collapse-panel-header"
            },
            {
            // Body
                xtype: 'container',
                height: childConfig.height,
                html: childConfig.html,
                cls: "collapse-panel-body"
            }
        ]
    });

    collapsiblePanel.getItems().getAt(0).element.on('tap', this.collapseOrExpand.bind(this, collapsiblePanel.getItems().getAt(0), this), this);

    //Add the Panel to the Parent
    parentView.add(collapsiblePanel);
}
});