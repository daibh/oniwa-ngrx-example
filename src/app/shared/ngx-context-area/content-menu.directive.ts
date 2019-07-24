import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import * as moment from 'moment';

@Directive({
    selector: '[contextMenu]'
})
export class ContextMenuDirective {
    contextId: any;
    browserType: number = 0;
    scrollBarWidth: number = 0;
    constructor(private el: ElementRef) {
        this.contextId = moment().format('ctxddHHmmssx');
        (el.nativeElement as HTMLElement).setAttribute('data-context-id', this.contextId);
        const userAgent = window.navigator.userAgent;
        if (userAgent.indexOf('Chrome') !== -1) {
            this.browserType = 0;
        } else if (userAgent.indexOf('Firefox') !== -1) {
            this.browserType = 1;
        }
    }

    @Input() contextMenu: any[] = [];

    @HostListener('keyup', ['$event']) onKeyDown(event: KeyboardEvent) {
        const e = <KeyboardEvent>event;
        const targetEl = (event.target as any);

        if (e.keyCode === 32 && e.ctrlKey === true) {
            // let it happen, don't do anything
            const tagName: string = targetEl.tagName.toLowerCase();
            let selectedValue = '';
            if (
                (tagName === "textarea" || tagName === "input") &&
                /^(?:text|textarea)$/i.test(targetEl.type) &&
                (typeof targetEl.selectionStart == "number")
            ) {
                selectedValue = targetEl.value.slice(targetEl.selectionStart, targetEl.selectionEnd);
            } else if (window.getSelection) {
                selectedValue = window.getSelection().toString();
            }
            // console.log('aaaaaaaaaaaaaaaa', e, e.keyCode, e.ctrlKey, selectedValue);
            const parentElement: HTMLElement = targetEl.parentElement;
            parentElement.style.position = 'relative';
            let wapperTemplateElement: HTMLElement = parentElement.querySelector(`${tagName}[data-context-id="${this.contextId}"]~#${this.contextId}`);
            let preTemplateElement: HTMLElement;
            if (!wapperTemplateElement) {
                let wapperTemplateElementWidth = parentElement.clientWidth;
                wapperTemplateElementWidth -= 2 * parseInt(window.getComputedStyle(parentElement, null).getPropertyValue('padding-left').replace(/(\D)/g, ''));
                wapperTemplateElementWidth -= parseInt(window.getComputedStyle(parentElement, null).getPropertyValue('padding-right').replace(/(\D)/g, ''));
                wapperTemplateElementWidth -= parseInt(window.getComputedStyle(parentElement, null).getPropertyValue('border-left-width').replace(/(\D)/g, ''));
                wapperTemplateElementWidth -= parseInt(window.getComputedStyle(parentElement, null).getPropertyValue('border-right-width').replace(/(\D)/g, ''));
                wapperTemplateElement = document.createElement('div');
                wapperTemplateElement.id = this.contextId;
                wapperTemplateElement.style.position = 'absolute';
                wapperTemplateElement.style.top = '0';
                wapperTemplateElement.style.opacity = '0';
                wapperTemplateElement.style.zIndex = '-1';
                wapperTemplateElement.style.padding = '6px 12px';
                wapperTemplateElement.style.border = '1px solid';
                wapperTemplateElement.style.width = wapperTemplateElementWidth + 'px';
                preTemplateElement = document.createElement('span');
                wapperTemplateElement.appendChild(preTemplateElement);
                preTemplateElement.style.whiteSpace = 'pre-wrap'
                // wapperTemplateElement.style.height = this.browserType === 1 ? targetEl.offsetHeight : targetEl.clientHeight;

                if (tagName === 'textarea') {
                    preTemplateElement.style.wordBreak = 'break-word';
                }
                parentElement.appendChild(wapperTemplateElement);
            };
            if (!preTemplateElement) {
                preTemplateElement = wapperTemplateElement.firstChild as HTMLElement;
            }
            let preWidth = this.browserType === 1 ? targetEl.offsetWidth : targetEl.clientWidth;
            this.scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            preTemplateElement.style.width = (preWidth - this.scrollBarWidth) + 'px';
            preTemplateElement.innerHTML = targetEl.value.slice(0, targetEl.selectionEnd).replace(/\n$/, '\n\r');
            const clientRects: ClientRectList = preTemplateElement.getClientRects();
            const firsttRect: ClientRect = clientRects.item(0);
            const lastRect: ClientRect = clientRects.item(clientRects.length - 1);
            const contextMenu: HTMLElement = targetEl.closest('.context-menu-wrapper').querySelector('.context-menu');
            if (contextMenu) {
                if (lastRect) {
                    contextMenu.style.top = lastRect.top - firsttRect.top - targetEl.scrollTop + 'px';
                    contextMenu.style.left = lastRect.left + lastRect.width + 'px';
                }
                if (!contextMenu.classList.contains('show')) {
                    contextMenu.classList.add('show');
                }
            }
            e.stopPropagation();
            return;
        }

    }

}
