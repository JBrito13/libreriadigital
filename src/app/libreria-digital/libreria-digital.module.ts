// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { LibreriaDigitalRoutingModule } from './libreria-digital-routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LibreriaDigitalComponent } from './libreria-digital.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactComponent,
    LibreriaDigitalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    LibreriaDigitalRoutingModule,
    SharedModule
  ]
})
export class LibreriaDigitalModule { }
