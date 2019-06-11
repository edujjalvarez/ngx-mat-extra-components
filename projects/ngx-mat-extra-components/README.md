# MatExtraComponentsLibrary

* Set of extra `angular material` components.
* It is developed using `Angular >= 7.1.0` and its newly introduced `ng g library` schematics.
* Library location: `projects/ngx-mat-extra-components` directory of this repository.

## Installation

`npm i ngx-mat-extra-components`

## NgxMatExtraDatepickerComponent

`import { NgxMatExtraDatepickerComponent } from 'ngx-mat-extra-components'`<br>
`selector: ngx-mat-extra-datepicker`

### @Inputs()

yourFormGroup: FormGroup (Required)
yourFormControlName: string (Required)
placeholder: string (Optional, default: 'Fecha')

## Usage

1) Import the `NgxMatExtraComponentsModule` in your module.
 > `import { NgxMatExtraComponentsModule } from 'ngx-mat-extra-components'`

 ```typescript
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatExtraComponentsModule } from 'ngx-mat-extra-components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...,
    NgxMatExtraComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 ```

 2) In your component .ts

```typescript
createFormGroup(): FormGroup {
    return this._formBuilder.group({
        ...,
        FechaNacimiento: ['', Validators.required],
    });
}
```

3) In your component .html

```html
<ngx-mat-extra-datepicker
    [yourFormGroup]="dialogForm"
    [yourFormControlName]="'FechaNacimiento'"
    [placeholder]="'Fecha de nacimiento'"></ngx-mat-extra-datepicker>
```

## Running the example in local env

* `npm i`
* Run `ng serve` for a dev server and running the demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build the NgxMatTypeahead module

Run `ng build NgxMatTypeahead` to build the library. The build artifacts will be stored in the `dist/ngx-mat-extra-components` directory. Use the `--prod` flag for a production build.