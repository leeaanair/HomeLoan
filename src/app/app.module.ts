import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { BrowserModule } from '@angular/platform-browser';

import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';

import { AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { FeatCalcDocComponentComponent } from './feat-calc-doc-component/feat-calc-doc-component.component';
import { StepperComponentComponent } from './stepper-component/stepper-component.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LoginregComponent} from './loginreg/loginreg.component';
import { FooterComponent } from './footer/footer.component';

import { LoanTrackerComponent } from './loan-tracker/loan-tracker.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component'
import {AdminLoginComponent} from './admin-login/admin-login.component'
import { ElgCalComponent } from './elg-cal/elg-cal.component';
import { EmiCalComponent } from './emi-cal/emi-cal.component';
import { ForgotPasswordComponentComponent } from './forgot-password-component/forgot-password-component.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';

import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminVerificationComponent } from './admin-verification/admin-verification.component';
import {HomeDetailsComponent} from './home-details/home-details.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import { UserAppStatusComponent } from './user-app-status/user-app-status.component';

import { CustomerServiceService } from './services/customer-service.service';
import { SessionService } from './services/session.service';
import { FilesArrayService } from './services/files-array.service';
import { AdminLoginServiceService } from './services/adminlogin-service.service';
import { CalculatorsComponent } from './calculators/calculators.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    ImageComponentComponent,
    FeatCalcDocComponentComponent,
    StepperComponentComponent,
    EmiCalComponent,
    routingComponent,
    ElgCalComponent,
    RegisterComponent,
    LoginComponent,
    LoginregComponent,
    FooterComponent,
    AdminLoginComponent,
    AboutComponent,
    ForgotPasswordComponentComponent,
	UploadFilesComponent,
    LoanTrackerComponent,
    PersonalDetailsComponent,
    AdminDashboardComponent,
    AdminVerificationComponent,
    HomeDetailsComponent,
    UserDashboardComponent,
    UserAppStatusComponent,
    CalculatorsComponent,
    ResetPasswordComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule, 
    MatInputModule,
    MatButtonModule,
    FormsModule,
    NgxSliderModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    NgbModule
          ],
  providers: [CustomerServiceService, SessionService, FilesArrayService, AdminLoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
