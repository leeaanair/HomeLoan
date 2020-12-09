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



@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    ImageComponentComponent,
    FeatCalcDocComponentComponent,
    StepperComponentComponent,
    EmiCalComponent,
    routingComponent,
    ElgCalComponent
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
    MatSelectModule
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
