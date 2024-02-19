import { Component } from "@angular/core";

@Component({
    selector : `<app-address>`,
  template : `  <p> Address Component </p>`,
                
    styles   : [`p{
        display: block;
        height: 800px;
        border: 2px solid cadetblue;
        margin: 200px 30px;
        color: white;
        background-color: skyblue;
        padding-top: 400px;
        text-align:center; 
        font-size: xx-large;
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
        `]
})

export class AddressComponent{


}