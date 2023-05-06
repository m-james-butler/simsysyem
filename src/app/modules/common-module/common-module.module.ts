import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { MatButtonModule } from '@angular/material/button';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SigninComponent, MainNavigationComponent, SubNavigationComponent, InfoboxComponent, FooterComponent],
  imports: [CommonModule, MatButtonModule, RouterModule],
  exports: [HeaderComponent, SubNavigationComponent, InfoboxComponent,FooterComponent],
})
export class CommonModuleModule {}
