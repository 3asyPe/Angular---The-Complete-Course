import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective{
    
    @HostBinding("class.open")classAdded: boolean = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.classAdded = this.elRef.nativeElement.contains(event.target) ? !this.classAdded : false;
    }
      
    constructor(private elRef: ElementRef) {}

}