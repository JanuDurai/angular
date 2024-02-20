import { Directive, ElementRef} from "@angular/core";

@Directive({
    selector: "[HighlightDirective]",
})
export class CustomDirective{
      constructor(private ele: ElementRef){
         ele.nativeElement.style.background = "lightyellow";
      }
}