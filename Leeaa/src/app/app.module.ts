import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { FeatCalcDocComponentComponent } from './feat-calc-doc-component/feat-calc-doc-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    ImageComponentComponent,
    FeatCalcDocComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
