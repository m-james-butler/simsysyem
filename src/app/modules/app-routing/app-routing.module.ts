import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPageComponent } from 'src/app/components/main/content-page/content-page.component';
import { HomePageComponent } from 'src/app/components/main/home-page/home-page.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { NewsListComponent } from 'src/app/components/main/news-list/news-list.component';
import { NewsPageComponent } from 'src/app/components/main/news-page/news-page.component';

const routes: Routes = [
  { path: 'Main', component: MainComponent, children: [
    {path: 'Main', redirectTo: '', pathMatch: 'full'},
    {path: 'News', component: NewsListComponent},
    {path: 'News/:id', component: NewsPageComponent},
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
