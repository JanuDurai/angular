import { Component } from "@angular/core";

@Component({
    selector:"app-pageNotFound",
    template: `<p> Page is Not Found!.......</p>`,
    styles: [`p{
        display: block;
        height: 800px;
        border: 2px solid cadetblue;
        margin: 200px 30px;
        color: black;
       
        padding-top: 400px;
        text-align:center; 
        font-size: xx-large;
    }
    `]
    })
export class PageNotFoundComponent{

}