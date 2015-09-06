# SenchaCommonUtils
A Collection of Common utilities for a sencha project
Here you can find some common UI utilities

## Including these utilities into any sencha project
1. Include the Utilities folder in your sencha project by copying it inside the app folder of the project.
2. Copy the various css files provided here to the resources/css folder.
3. include the necessary css file into your index.html based on the preference of accordion style.

##Example demonstrating the use of these utilities

    Ext.define("SenchaCommonUtils.controller.Main", {
        extend: 'Ext.app.Controller',
        requires: ['SenchaCommonUtils.Utilities.SimpleAccordion'],
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
            SimpleAccordion.createPanel(parentView, panel1Config, body1Config);
            SimpleAccordion.createPanel(parentView, panel1Config, body1Config);
        }
    });