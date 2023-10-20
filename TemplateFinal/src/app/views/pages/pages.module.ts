import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, DropdownModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { OneBlogComponent } from './one-blog/one-blog.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    BlogComponent,
    OneBlogComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    GridModule,
    IconModule,
    FormModule,
    DropdownModule,
    BrowserModule,
    MatChipsModule,
    DropdownModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class PagesModule {
}
