import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './BackOffice/header-admin/header-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { FotterAdminComponent } from './BackOffice/fotter-admin/fotter-admin.component';
import { SideBarAdminComponent } from './BackOffice/side-bar-admin/side-bar-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { FotterUserComponent } from './FrontOffice/fotter-user/fotter-user.component';
import { HeaderUserComponent } from './FrontOffice/header-user/header-user.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppHttpInterceptor} from "./Interceptors/app-http.interceptor";
import { AddProgrammeEchangeComponent } from './application/add-programme-echange/add-programme-echange.component';
import { ProgrammeEchangeComponent } from './application/programme-echange/programme-echange.component';
import { UpdateProgrammeComponent } from './application/update-programme/update-programme.component';
import { DisplayApplicationComponent } from './application/display-application/display-application.component';
import { AddApplicationComponent } from './application/add-application/add-application.component';
import { UpdateApplicationComponent } from './application/update-application/update-application.component';
import { DisplayProgrammeUserComponent } from './application/display-programme-user/display-programme-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    BodyAdminComponent,
    FotterAdminComponent,
    SideBarAdminComponent,
    AllTemplatesAdminComponent,
    AllTemplateUserComponent,
    BodyUserComponent,
    FotterUserComponent,
    HeaderUserComponent,
    LoginComponent,
    AddProgrammeEchangeComponent,
    ProgrammeEchangeComponent,
    UpdateProgrammeComponent,
    DisplayApplicationComponent,
    AddApplicationComponent,
    UpdateApplicationComponent,
    DisplayProgrammeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : AppHttpInterceptor , multi  : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
