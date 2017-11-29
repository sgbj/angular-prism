# @sgbj/angular-prism

Use the Prism syntax highlighter in your Angular applications.

## Installation

To install this library, run:

```bash
$ npm install @sgbj/angular-prism --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install @sgbj/angular-prism
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { PrismModule } from '@sgbj/angular-prism';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    PrismModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

and in your SCSS:

```scss
@import '~prismjs/themes/prism'
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<prism language="typescript">console.log('Hello world!');</prism>
```

or

```xml
<!-- You can now use your library component in app.component.html -->
<prism language="typescript" [code]="code"></prism>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [sgbj](mailto:scott@batary.io)
