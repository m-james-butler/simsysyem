import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from 'src/app/components/main/home-page/home-page.component';
import { MainComponent } from 'src/app/components/main/main.component';

const routes: Routes = [
  { path: 'Main', component: MainComponent, children: [
    {path: 'Main', component: HomePageComponent},
    {path: '', component: HomePageComponent}
  ] },
  { path: 'Personnel', component: MainComponent },
  { path: 'Sim', component: MainComponent },
  { path: 'Archives', component: MainComponent },
  { path: 'Search', component: MainComponent },
  { path: 'Log In', component: MainComponent },
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
