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
import{FaqComponent} from './faq/faq.component';
import{AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: 'calculator', component: ElgCalComponent},
  // {
  //   path:'', component: ImageComponentComponent}
  {path: 'login', component:LoginregComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'adminlogin', component:AdminLoginComponent},
  {path: 'aboutus', component:AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = []