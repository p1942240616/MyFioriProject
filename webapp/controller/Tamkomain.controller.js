sap.ui.define([
			"sap/ui/core/mvc/Controller"
		], function (Controller) {
			"use strict";

			return Controller.extend("Calculation.Tamko_Netprice.controller.Tamkomain", {


					oSelectDistrict: function () {
					
						var odistrict = this.getView().byId("DistrictListId").getValue(); // get the instance of the district with the value entered
						var oModel = this.getView().getModel("TamkoModel");
						var sPath = "/DistrictListSet(DistrictName='" + odistrict + "')/NetPriceSet"; // path of the odata srv. NetPriceSet is the navigation name
						var that = this;
						oModel.read(sPath, {
							success: function (oData, Response) {
								var oModel2 = new sap.ui.model.json.JSONModel(oData); //convert the odata model to json format.
								var oTerritoryValue = that.getView().byId("IdTerritry"); // get the instance of the teritory multibox
								oTerritoryValue.setModel(oModel2); // set the model for teritory instance
								var otamplate = new sap.ui.core.Item({
									text: "{TeritoryValue}"
								}); // define the template for teritory multicombobox.
								oTerritoryValue.bindAggregation("items", "/results", otamplate); // get "/results" from console, this is nothing but the entity.
							},

						});
					},

						// if (!this._dialog) {
						// 	this._dialog = sap.ui.xmlfragment("Calculation.Tamko_Netprice.model.BusyFragment", this);
						// 	this.getView().addDependent(this._dialog);
						// }
						// jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._dialog);
						// this._dialog.open();

						// // simulate end of operation
						// var timeout = jQuery.sap.delayedCall(2, this, function () {
						// 	this._dialog.close();
						// });

						// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
						// oRouter.navTo("Routedetail",{
						// });

						onDialogClosed: function () {
								this._dialog.close();
							},

							zpress: function (oEvent) {
								var value = "123";
								this.getView().byId("IdtamkoPage");

								var oRouter = this.getOwnerComponent().getRouter();
								this.getView().getModel().refresh();
								oRouter.navTo("TamkoDetail", {
									Appserver: value
								});
								var oView = this.getView();

							},

							// if switch is defaulth "OFF" if press for ON customr lable and input should be desbaled.
							zchange: function () {
								var k = this.getView().byId("zswitchId").getState();
								if (k == true) {
									var m = this.getView().byId("zcustomer1");
									m.setVisible(false);
									var n = this.getView().byId("zcustomer2");
									n.setVisible(false);
								} else {
									var m = this.getView().byId("zcustomer1");
									m.setVisible(true);
									var n = this.getView().byId("zcustomer2");
									n.setVisible(true);
								}
							}

						//	}

						/**
						 * Called when a controller is instantiated and its View controls (if available) are already created.
						 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
						 * @memberOf Calculation.Tamko_Netprice.view.Tamkomain
						 */
						//	onInit: function() {
						//
						//	},

						/**
						 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
						 * (NOT before the first rendering! onInit() is used for that one!).
						 * @memberOf Calculation.Tamko_Netprice.view.Tamkomain
						 */
						//	onBeforeRendering: function() {
						//
						//	},

						/**
						 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
						 * This hook is the same one that SAPUI5 controls get after being rendered.
						 * @memberOf Calculation.Tamko_Netprice.view.Tamkomain
						 */
						//	onAfterRendering: function() {
						//
						//	},

						/**
						 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
						 * @memberOf Calculation.Tamko_Netprice.view.Tamkomain
						 */
						//	onExit: function() {
						//
						//	}

					});

			});