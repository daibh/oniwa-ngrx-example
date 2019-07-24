import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[contextMenu]'
})
export class ContextMenuDirective {

    constructor(private el: ElementRef) { }

    @Input() contextMenu: any[] = [];

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        const e = <KeyboardEvent>event;
        const targetEl = (event.target as any);

        if (e.keyCode === 32 && e.ctrlKey === true) {
            // let it happen, don't do anything
            const tagName = targetEl.tagName.toLowerCase();
            let selectedValue = '';
            if (
                (tagName == "textarea" || tagName == "input") &&
                /^(?:text|textarea)$/i.test(targetEl.type) &&
                (typeof targetEl.selectionStart == "number")
            ) {
                selectedValue = 'A:' + targetEl.value.slice(targetEl.selectionStart, targetEl.selectionEnd);
            } else if (window.getSelection) {
                selectedValue = window.getSelection().toString();
            }
            console.log('aaaaaaaaaaaaaaaa', e, e.keyCode, e.ctrlKey, selectedValue);
            const contextMenu = targetEl.closest('.context-menu-wrapper').querySelector('.context-menu') as HTMLElement;
            if (!contextMenu.classList.contains('show')) {
                contextMenu.classList.add('show');
                console.log((e.view as any).$.offset(window.getSelection().getRangeAt(0), window.getSelection().focusOffset, window.getSelection()))
                contextMenu.style.top = (event as any).pageY;
                contextMenu.style.left = (event as any).pageX;
            }
            return;
        }

    }

}
