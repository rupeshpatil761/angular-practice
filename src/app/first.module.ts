import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTableModule} from 'angular2-datatable';
import { Routes,RouterModule } from '@angular/router';
import {FormsComponent} from './forms/forms.component';
import {DatatableComponent} from './datatable/datatable.component';
import {PdfComponent} from './pdfDownload/pdf.component';
import {UserService} from './services/users.service';
import {FormsModule} from '@angular/forms';
import { Md2Module }  from 'md2';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutes} from './app.routes';
import {SharedModule} from './shared.module';

const routes : Routes = [{path:"forms",component : FormsComponent},{path:"datatable",component : DatatableComponent},{path:"pdf-download",component : PdfComponent}];

@NgModule({
  declarations: [
    FormsComponent,
    DatatableComponent,
    PdfComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,   
    Md2Module,
    NoopAnimationsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService] //Dont Write bootstrap section
})
export class FirstModule { }
