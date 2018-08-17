sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Calculation.Tamko_Netprice.controller.TamkoDetail", {
		
		 onPrint : function(oEvent) {
        var oTarget = this.getView(),
            sTargetId = oEvent.getSource().data("targetId");
            
        if (sTargetId) {
            oTarget = oTarget.byId("IdTable");
        }
        
        if (oTarget) {
            var $domTarget = oTarget.$()[0],
                sTargetContent = $domTarget.innerHTML,
                sOriginalContent = document.body.innerHTML;
                
            document.body.innerHTML = sTargetContent;
            window.print();
            document.body.innerHTML = sOriginalContent;
        } else {
            jQuery.sap.log.error("onPrint needs a valid target container [view|data:targetId=\"SID\"]");
        }
    },
 itemPress1:function(){
    	  var oView = this.getView();
         var oDialog = oView.byId("helloDialog");
         if (!oDialog) {
            oDialog = sap.ui.xmlfragment(oView.getId(), "Calculation.Tamko_Netprice.view.hello",this);
            oView.addDependent(oDialog);
         }
         oDialog.setTitle("Customer Id");
         oDialog.open();
    },
     itemPress2:function(){
    	    var oView = this.getView();
         var oDialog = oView.byId("helloDialog");
       oDialog.setTitle("City");
         // create dialog lazily
         if (!oDialog) {
            // create dialog via fragment factory
            oDialog = sap.ui.xmlfragment(oView.getId(), "Calculation.Tamko_Netprice.view.hello",this);
             
            
            oView.addDependent(oDialog);
         }
         oDialog.open();
    },
     itemPress3:function(){
    	    var oView = this.getView();
         var oDialog = oView.byId("helloDialog");
         
          oDialog.setTitle("Country");
         //var v = oDialog.getTitle();
         //  if (v===''){
           	
         //  }
          
         // create dialog lazily
         if (!oDialog) {
            // create dialog via fragment factory
            oDialog = sap.ui.xmlfragment(oView.getId(), "Calculation.Tamko_Netprice.view.hello",this);
            
            oView.addDependent(oDialog);
         }
         oDialog.open();
    },
     itemPress4:function(){
    	    var oView = this.getView();
         var oDialog = oView.byId("helloDialog");
           
            oDialog.setTitle("Name");
         // create dialog lazily
         if (!oDialog) {
            // create dialog via fragment factory
            oDialog = sap.ui.xmlfragment(oView.getId(), "Calculation.Tamko_Netprice.view.hello",this);
           
            oView.addDependent(oDialog);
         }
         oDialog.open();
    },
     zcanceId : function () {
           this.getView().byId("helloDialog").close();
       },   /*if not then cancel */
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Calculation.Tamko_Netprice.view.TamkoDetail
		 */
       onInit: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			var that = this;
			oRouter.getRoute("TamkoDetail").attachPatternMatched(function(oEvent) {
				var selectedvalues = oEvent.getParameters().arguments.Appserver;
				var oModel = that.getOwnerComponent().getModel();
			var sPath = "/MyentitySet";
				oModel.read(sPath,{
						success: function(odata, response) {

						var oModel2 = new sap.ui.model.json.JSONModel(odata);
						that.getView().setModel(oModel2);
						var oTable = that.getView().byId("IdTable");
						var oTemplate = new sap.m.ColumnListItem({
							cells: [
								
								// new sap.m.ObjectIdentifier({
								// 	title: "{Id}",
								// 	visible:true,
								// 	titleActive:true,
								// 	// titlePress:function(){
							
							 // //   var oDialog = this.getSource().byId("helloDialog");
							 // //   if (!oDialog) {
							 // //      oDialog = sap.ui.xmlfragment(this.getView().getId(),"Calculation.Tamko_Netprice.view.hello",this);
							 // //      this.getView().addDependent(oDialog);
							 // //   }
							 // //   oDialog.setTitle("Customer Id");
							 // //   oDialog.open();
										
								// 	// }
								// }),
									// new sap.m.ObjectIdentifier({
									// title: "{Ort01}",
									// visible:true,
									// titleActive:true}),
									
									// new sap.m.ObjectIdentifier({
									// title: "{Land1}",
									// visible:true,
									// titleActive:true}),
									
									// new sap.m.ObjectIdentifier({
									// title: "{Name}",
									// visible:true,
									// titleActive:true})
									
									// ***********************
									
								new sap.m.Text({
									text: "{Id}"
								}),
									
								new sap.m.Text({
									text: "{Ort01}"
								}),
								new sap.m.Text({
									text: "{Land1}"
								}),
								new sap.m.Text({
									text: "{Name}"
								})
							]

						});

						oTable.bindAggregation("items", "/results", oTemplate);
					}
				});
					
				});
			
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Calculation.Tamko_Netprice.view.TamkoDetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Calculation.Tamko_Netprice.view.TamkoDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Calculation.Tamko_Netprice.view.TamkoDetail
		 */
		//	onExit: function() {
		//
		//	}

		
});
});