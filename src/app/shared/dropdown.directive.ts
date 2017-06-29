import { Directive, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') toggleClass = false;

    @HostListener('click') onClick(eventData: Event) {
        this.toggleClass = !this.toggleClass;
    }
}