/**
 * This is only for local test
 */
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PrismModule } from '@sgbj/angular-prism';

@Component({
  selector: 'app',
  template: `
    <prism language="typescript">console.log('Hello world!');</prism>
  `
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, PrismModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
