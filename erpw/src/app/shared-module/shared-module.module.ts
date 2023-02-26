import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarClientComponent } from './component/client/navbar-client/navbar-client.component';
import { FooterComponent } from './component/client/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarClientComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarClientComponent,
    FooterComponent
  ]
})
export class SharedModuleModule { }
