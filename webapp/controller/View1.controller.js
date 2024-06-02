sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
function (Controller,JSONModel,MessageToast) {
    "use strict";

    return Controller.extend("com.tushar.project1.controller.View1", {
        onInit: function () {
            var tickets = [ 
                {
                "status": "resolved",
                "ticketid" : 1,
                "creation date":  "2024-06-01",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "girish"

            },
            {
                "status": "resolved",
                "ticket id" : 1,
                "creationdate":"2024-06-0",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "girish"

            },
            {
                "status": "resolved",
                "ticketid" : 1,
                "creationdate": "2024-06-01",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "girish"

            },
            {
                "status": "resolved",
                "ticketid" : 1,
                "creationdate": "2024-06-01",
                "createdby": "Tushar",
                "priority": "high",
                "assigned to": "girish"

            },
            {
                "status": "resolved",
                "ticketid" : 1,
                "creationdate": "2024-06-01",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "girish"

            },
            {
                "status": "resolved",
                "ticketid" : 1,
                "creation date": "2024-06-01",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "girish"

            },
            {
                "status": "resolved",
                "ticketid" : 1,
                "creationdate": "2024-06-01",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "girish"

            },
            {
                "status": "resolved",
                "ticketid" : 1,
                "creationdate": "2024-06-01",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "girish"

            },
            {
                "status": "resolved",
                "ticketid" : 1,
                "creationdate": "2024-06-01",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "girish"

            },
            {
                "status": "resolved",
                "ticketid" : 1,
                "creationdate": "2024-06-01",
                "createdby": "Tushar",
                "priority": "high",
                "assignedto": "girish"

            },
            {
                "status": "resolved",
                "ticketid" : 1,
                "creationdate": "2024-06-01",
                "created by": "Tushar",
                "priority": "high",
                "assignedto": "girish"

            }

            ]
            
            let oTicket = new JSONModel(); 
            oTicket.setData(tickets); 
            this.getView().byId("table").setModel(oTicket,"T");

            

        },
        onSearch:function(){
            let s= this.query().byId("SF");
            let page=this.getview().byid("ObjectPageLayout");
            if(s==page)
            {

            }

        }

    });
});
