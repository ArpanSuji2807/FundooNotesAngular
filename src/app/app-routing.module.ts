import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/Registration/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
  {path:"regis",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"forgetpass",component:ForgetpasswordComponent},
  {path:"resetPassword/:token",component:ResetpasswordComponent},
  {path:"dashboard",component:DashboardComponent,
  children:[{path:"notes",component:GetAllNotesComponent}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
