import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarClientRoutingModule } from './navbar-client-routing.module';
import { SharedModuleModule } from 'app/shared-module/shared-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarClientRoutingModule,
    SharedModuleModule
  ]
})
export class NavbarClientModule { }
