import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModuleModule } from './modules/common-module/common-module.module';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { HomePageComponent } from './components/main/home-page/home-page.component';
import { MatTabsModule } from "@angular/material/tabs"

@NgModule({
  declarations: [AppComponent, MainComponent, HomePageComponent],
  imports: [BrowserModule, CommonModuleModule, AppRoutingModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
