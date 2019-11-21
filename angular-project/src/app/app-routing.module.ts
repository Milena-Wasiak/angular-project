import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosList } from './photos-list/photos-list.component'
import { ContactForm } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: PhotosList },
  { path: 'contact', component: ContactForm }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
