import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatExtraComponentsComponent } from './ngx-mat-extra-components.component';
import { NgxMatExtraDatepickerComponent } from './ngx-mat-extra-datepicker/ngx-mat-extra-datepicker.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule } from '@angular/material';

@NgModule({
	declarations: [
		NgxMatExtraComponentsComponent,
		NgxMatExtraDatepickerComponent,
	],
	imports: [
		CommonModule,
        FormsModule,
        ReactiveFormsModule,
		FlexLayoutModule,
		NgxMaskModule.forRoot(),
		MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatIconModule,
	],
	exports: [
		NgxMatExtraComponentsComponent,
		NgxMatExtraDatepickerComponent,
	]
})
export class NgxMatExtraComponentsModule { }
