import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ContactInfoComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactInfoComponent,
    NavbarComponent,
  ]
})
export class NavigationModule { }
