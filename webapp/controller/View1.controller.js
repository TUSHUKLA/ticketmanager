sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
function (Controller,JSONModel, MessageToast,Fragment,Filter,FilterOperator) {
    "use strict";

    return Controller.extend("com.tushar.project1.controller.View1", {
        onInit: function () {
            const tickets = [ 
                {
                "status": "resolved",
                "ticketid" : "0001",
                "creationdate":  "2024-06-01",
                "createdby": "Girish",
                "priority": "high",
                "assignedto": "Cofforge"

            },
            {
                "status": "resolved",
                "ticketid" : "0002",
                "creationdate":"2024-06-05",
                "createdby": "Manish",
                "priority": "medium",
                "assignedto": "Bluejay"

            },
            {
                "status": "resolved",
                "ticketid" : "0003",
                "creationdate": "2024-06-01",
                "createdby": "Parnika",
                "priority": " verry high",
                "assignedto": "Aricord"

            },
            {
                "status": "resolved",
                "ticketid" : "0004",
                "creationdate": "2024-06-08",
                "createdby": "Ajay",
                "priority": "medium",
                "assignedto": "Persistant"

            },
            {
                "status": "resolved",
                "ticketid" : "0005",
                "creationdate": "2024-06-10",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "Aricord"

            },
            {
                "status": "resolved",
                "ticketid" : "0006",
                "creationdate": "2024-06-10",
                "createdby": "Manish",
                "priority": "low",
                "assignedto": "Persistant"

            },
            {
                "status": "resolved",
                "ticketid" : "0007",
                "creationdate": "2024-06-01",
                "createdby": "Tushar",
                "priority": "medium",
                "assignedto": "Cofforge"

            },
            {
                "status": "resolved",
                "ticketid" : "0008",
                "creationdate": "2024-06-01",
                "createdby": "Ajay",
                "priority": "verry high",
                "assignedto": "TCS"

            },
            {
                "status": "resolved",
                "ticketid" : "0009",
                "creationdate": "2024-06-01",
                "createdby": "Manish",
                "priority": "verry low",
                "assignedto": "TCS"

            },
            {
                "status": "resolved",
                "ticketid" : "0010",
                "creationdate": "2024-06-01",
                "createdby": "Parnika",
                "priority": "high",
                "assignedto": "Bluejay"

            }
            
            ]
            
            const oTicket = new JSONModel(); 
            oTicket.setData(tickets); 
            this.getView().byId("table").setModel(oTicket,"T");            
        },

        onValueHelpRequestid: function (oEvent) {
			var sInputValue = oEvent.getSource().getValue(),
				oView = this.getView();

			if (!this._psuggest) {
				this._psuggest = Fragment.load({
					id: oView.getId(),
					name: "com.tushar.project1.view.suggest",
					controller: this
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this._psuggest.then(function(oDialog) {
				// Create a filter for the binding
				oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue)]);
				// Open ValueHelpDialog filtered by the input's value
				oDialog.open(sInputValue);
			});
		},

		onValueHelpSearch: function (oEvent) 
        {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Name", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpClose: function (oEvent) {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) {
				return;
			}

			this.byId("TI").setValue(oSelectedItem.getTitle());

       
        },

        onValueHelpRequestassign: function (oEvent) {
			var sInputValue2 = oEvent.getSource().getValue(),
				oView = this.getView();

			if (!this._psuggestassign) {
				this._psuggestassign = Fragment.load({
					id: oView.getId(),
					name: "com.tushar.project1.view.suggestassign",
					controller: this
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this._psuggestassign.then(function(oDialog) 
            {
				// Create a filter for the binding
				oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue2)]);
				// Open ValueHelpDialog filtered by the input's value
				oDialog.open(sInputValue2);
			});
		},

		onValueHelpSearch: function (oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Name", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpClose: function (oEvent) {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) {
				return;
			}

			this.byId("AT").setValue(oSelectedItem.getTitle());

       
        }, 
        
        onValueHelpRequestcreate: function (oEvent) {
			var sInputValue1 = oEvent.getSource().getValue(),
				oView = this.getView();

			if (!this._psuggestcreate) {
				this._psuggestcreate = Fragment.load({
					id: oView.getId(),
					name: "com.tushar.project1.view.suggestcreate",
					controller: this
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this._psuggestcreate.then(function(oDialog) 
            {
				// Create a filter for the binding
				oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue1)]);
				// Open ValueHelpDialog filtered by the input's value
				oDialog.open(sInputValue1);
			});
		},

		onValueHelpSearch: function (oEvent) 
        {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Name", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpClose: function (oEvent)
         {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) 
            {
				return;
			}

			this.byId("CB").setValue(oSelectedItem.getTitle());

       
        }

    });
});
