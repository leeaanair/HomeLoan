import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElgCalComponent } from './elg-cal/elg-cal.component';
import {ImageComponentComponent} from './image-component/image-component.component';
import {StepperComponentComponent} from './stepper-component/stepper-component.component';
import {MenuComponentComponent} from './menu-component/menu-component.component';
import {EmiCalComponent} from './emi-cal/emi-cal.component';
import { LoginregComponent } from './loginreg/loginreg.component';
import { FooterComponent } from './footer/footer.component';
import{AdminLoginComponent} from './admin-login/admin-login.component';
import {LoanTrackerComponent} from './loan-tracker/loan-tracker.component';  
import{FaqComponent} from './faq/faq.component';
import{AboutComponent} from './about/about.component';
import { ForgotPasswordComponentComponent } from './forgot-password-component/forgot-password-component.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminVerificationComponent } from './admin-verification/admin-verification.component';

import { CalculatorsComponent } from './calculators/calculators.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import { LogoutComponent } from './logout/logout.component';




const routes: Routes = [
  {path: 'calculator', component: CalculatorsComponent},
  {path: 'login', component:LoginregComponent},
  {path: 'adminlogin', component:AdminLoginComponent},
  {path: 'loantracker', component:LoanTrackerComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'stepper', component:StepperComponentComponent},
  {path: 'forgot', component: ForgotPasswordComponentComponent},
  {path: 'submitFiles', component: UploadFilesComponent},
  {path: 'aboutus', component:AboutComponent},
  {path: 'admindashboard', component: AdminDashboardComponent},
  {path: 'adminverification', component: AdminVerificationComponent},
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'userdashboard', component: UserDashboardComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = []

