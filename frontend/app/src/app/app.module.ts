import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './crud/create/create.component';
import { HomeComponent } from './crud/home/home.component';
import { UpdateComponent } from './crud/update/update.component';
import { DetailsComponent } from './crud/details/details.component';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud/crud-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CrudService } from './crud/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    UpdateComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
