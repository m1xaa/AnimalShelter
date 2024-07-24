import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componenets/pages/home-page/home-page.component';
import { PostsPageComponent } from './componenets/pages/posts-page/posts-page.component';

const routes: Routes = [
  {path: 'posts', component: PostsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
