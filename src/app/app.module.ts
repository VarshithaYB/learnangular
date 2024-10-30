import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeService } from './coffee.service';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from './reactive/reactive.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { Reactive2Component } from './reactive2/reactive2.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    CoffeeComponent,
    HttpComponent,
    ReactiveComponent,
    Reactive2Component,
    FormbuilderComponent,
    ParentchildComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
