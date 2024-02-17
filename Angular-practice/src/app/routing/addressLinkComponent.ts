import { Component,inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: `<app-address-link>`,
    // template : `<button routerLink="Address" routerLinkActive = "active" style="text-align: center"> Address </button> `,
    template: `<button (click)="navToAddressPage()"> </button>`,
    styles: [` a:hover{
        background-color: rgb(98, 194, 197);
        border: 2px solid black;
        color:white;
    }
    
    button{
        display: block;   
        width: 100px;
        height:50px;
        border: 2px solid cadetblue;
        text-align:center;
        background-color: cadetblue;
        color: azure;
        margin: 30px 100px;
    }
    
    
    .active{
        background-color: aliceblue;
        color: cadetblue;
        border: 2px solid cadetblue;
        font-weight: bolder;
        font-size:medium;
     }
    
    `]
})

export class AddressLinkComponent {

    router: Router =inject(Router);

    navToAddressPage() {
            this.router.v
    }
}