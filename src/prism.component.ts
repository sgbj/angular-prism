declare var Prism: any;

import { Component, AfterViewInit, Input, ElementRef, ViewChild, AfterContentInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'prism',
  template: `
    <div hidden #raw style="display: none"><ng-content></ng-content></div>
    <pre class="language-{{language}}"><code #code></code></pre>
  `
})
export class PrismComponent implements AfterViewInit, AfterContentInit, OnChanges {
  private observer: MutationObserver | null;

  @Input() language: string;
  @Input() code: string;
  @ViewChild('raw') rawViewChild: ElementRef;
  @ViewChild('code') codeViewChild: ElementRef;

  constructor(private elementRef: ElementRef) { }

  onContentChanged() {
    this.codeViewChild.nativeElement.innerHTML = this.code ? 
      this.encodeEntities(this.code) : this.rawViewChild.nativeElement.innerHTML;
    Prism.highlightElement(this.codeViewChild.nativeElement);
  }

  ngAfterViewInit() {
    this.onContentChanged();
  }

  ngOnChanges() {
    this.onContentChanged();
  }

  ngAfterContentInit() {
    this.observer = new MutationObserver(this.onContentChanged.bind(this));
    this.observer.observe(this.rawViewChild.nativeElement, {
      'characterData': true,
      'childList': true,
      'subtree': true
    });
  }
  
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  encodeEntities(value) {
    return value
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}
