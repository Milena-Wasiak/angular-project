import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactForm } from './contact/contact.component';
import { PhotosList } from './photos-list/photos-list.component';
import { PhotosCard } from './photos-list/photos-card/photos-card.component';
import { PhotoPagination } from './photos-list/photo-pagination/photo-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactForm,
    PhotosList,
    PhotosCard,
    PhotoPagination
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
