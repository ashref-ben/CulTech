import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { LoginComponent } from "./login/login.component";
import { AuthenticationGuard } from "./guards/authentication.guard";
import { AddProgrammeEchangeComponent } from './application/add-programme-echange/add-programme-echange.component';
import { ProgrammeEchangeComponent } from './application/programme-echange/programme-echange.component';
import { UpdateProgrammeComponent } from './application/update-programme/update-programme.component';
import { DisplayProgrammeUserComponent } from './application/display-programme-user/display-programme-user.component';
import { AddApplicationComponent } from './application/add-application/add-application.component';
import { DisplayApplicationComponent } from './application/display-application/display-application.component';
/*const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'super-admin',
    component: AllTemplatesAdminComponent, canActivate: [AuthenticationGuard],data :{role:"SUPER-ADMIN"},
    children: [
      {
        path: 'home',
        component: BodyAdminComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AllTemplatesAdminComponent, canActivate: [AuthenticationGuard],data :{role:"ADMIN"},
    children: [
      {
        path: 'home',
        component: BodyAdminComponent
      }
    ]
  },

  {
    path: 'organizer',
    component: AllTemplatesAdminComponent, canActivate: [AuthenticationGuard],data :{role:"ORGANIZER"},
    children: [
      {
        path: 'home',
        component: BodyAdminComponent
      }
    ]
  },
  {
    path: 'user',
    component: AllTemplateUserComponent, canActivate: [AuthenticationGuard],data :{role:"USER"},
    children: [
      {
        path: 'home',
        component: BodyUserComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: "/login"
  }
];*/
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'super-admin',
    component: AllTemplatesAdminComponent,
    children: [
      {
        path: 'home',
        component: BodyAdminComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AllTemplatesAdminComponent,
    children: [
      {
        path: 'home',
        component: BodyAdminComponent
      },
      {
        path: 'addprogramme',
        component: AddProgrammeEchangeComponent
      },
      {
        path: 'updateprogramme/:id',
        component: UpdateProgrammeComponent
      },
      {
        path: 'programme',
        component: ProgrammeEchangeComponent
      },
      {
        path: 'display-application',
        component: DisplayApplicationComponent
      }
    ]
  },

  {
    path: 'organizer',
    component: AllTemplatesAdminComponent,
    children: [
      {
        path: 'home',
        component: BodyAdminComponent
      }
    ]
  },
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
      {
        path: 'home',
        component: BodyUserComponent
      },
      {
        path: 'programme',
        component: DisplayProgrammeUserComponent
      },
      {
        path: 'apply/:id',
        component: AddApplicationComponent
      },
      {
        path: 'display-application',
        component: DisplayApplicationComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: "/user"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
