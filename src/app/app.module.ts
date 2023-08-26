import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModuleModule } from './modules/common-module/common-module.module';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { HomePageComponent } from './components/main/home-page/home-page.component';
import { MatTabsModule } from "@angular/material/tabs";
import { ContentPageComponent } from './components/main/content-page/content-page.component';
import { NewsListComponent } from './components/main/news-list/news-list.component';
import { PostPageComponent } from './components/main/post-page/post-page.component';
import { NewsPageComponent } from './components/main/news-page/news-page.component'

@NgModule({
  declarations: [AppComponent, MainComponent, HomePageComponent, ContentPageComponent, NewsListComponent, PostPageComponent, NewsPageComponent],
  imports: [BrowserModule, CommonModuleModule, AppRoutingModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
