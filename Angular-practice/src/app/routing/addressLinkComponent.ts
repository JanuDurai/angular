import { Component } from "@angular/core";

@Component({
    selector : `<app-address-link>`,
    template : `<a routerLink="Address" routerLinkActive = "active"> Address </a>`,
    styles   : [` a:hover{
        background-color: rgb(98, 194, 197);
        border: 2px solid black;
        color:white;
    }
    
    a{
        display: block;
        width: 100px;
        height:50px;
        border: 2px solid cadetblue;
        float:right;
        background-color: cadetblue;
        color: azure;
        margin: 30px 100px;
    }
    
    
    .active{
        background-color: aliceblue;
        color: cadetblue;
        border: 2px solid cadetblue;
        font-weight: bolder;
     }
    
    `]
})

export class AddressLinkComponent{


}