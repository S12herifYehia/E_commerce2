import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';





@NgModule({
  declarations: [HomeComponent,SettingsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
