import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componenets/pages/home-page/home-page.component';
import { MainPageComponent } from './componenets/pages/main-page/main-page.component';

const routes: Routes = [
  {path: 'main/', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
