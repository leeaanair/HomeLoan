import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ElgCalComponent } from './elg-cal/elg-cal.component';
import { EmiCalComponent } from './emi-cal/emi-cal.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { FeatCalcDocComponentComponent } from './feat-calc-doc-component/feat-calc-doc-component.component';
import { StepperComponentComponent } from './stepper-component/stepper-component.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LoginregComponent} from './loginreg/loginreg.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';

import {MatRadioModule} from '@angular/material/radio';
import { LoanTrackerComponent } from './loan-tracker/loan-tracker.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component'
import {AdminLoginComponent} from './admin-login/admin-login.component'
import { CustomerServiceService } from './services/customer-service.service';

import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { UploadFileService } from './services/upload-file.service';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminVerificationComponent } from './admin-verification/admin-verification.component';





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

    LoanTrackerComponent,
    PersonalDetailsComponent,


    AboutComponent,
    UploadFilesComponent,
    AdminDashboardComponent,
    AdminVerificationComponent
    

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
    NgbModule
          ],

  providers: [CustomerServiceService,UploadFileService],

  bootstrap: [AppComponent]
})
export class AppModule { }
