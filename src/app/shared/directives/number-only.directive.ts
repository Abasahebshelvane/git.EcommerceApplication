import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
  standalone: true
})
export class NumberOnlyDirective {

  constructor(private _el:ElementRef) { }
@HostListener('input',['$event']) onInputChange(event:any){
  const initialvalue= this._el.nativeElement.value;
  if(initialvalue==0){
    this._el.nativeElement.value="";
  }else{
    this._el.nativeElement.value=initialvalue.replace(/[^0-9]*/g,'');
    if(initialvalue!==this._el.nativeElement.value){
      event.stopPropagration();
    }
  }
}
}
