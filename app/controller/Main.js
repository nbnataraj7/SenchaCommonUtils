Ext.define("SenchaCommonUtils.controller.Main", {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            main: 'main'
        },
        control: {
            main: {

            }
        }
    },
    launch: function(){
        this.callParent(arguments);
        console.log("Main Controller Launched");
        this.LaunchAccordion(this.getMain());
    },
    LaunchAccordion: function(parentView){
        var panel1Config = {
            height: '50px',
            html: 'Panel Header'
        }
        var body1Config = {
            height: '100px',
            html: 'Body of this Panel'
        }

        var SimpleAccordion = new Ext.create("SenchaCommonUtils.Utilities.SimpleAccordion");
        SimpleAccordion.createPanel(parentView, panel1Config, body1Config);
    }
});