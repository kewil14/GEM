import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspaceClientRoutingModule } from './espace-client-routing.module';
import { EspaceClientComponent } from './espace-client.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModuleModule } from "../../shared-module/shared-module.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        EspaceClientComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        EspaceClientRoutingModule,
        SharedModuleModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class EspaceClientModule { }
