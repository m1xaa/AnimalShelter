import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componenets/pages/home-page/home-page.component';
import { PostsPageComponent } from './componenets/pages/posts-page/posts-page.component';
import { PostPageComponent } from './componenets/pages/post-page/post-page.component';

const routes: Routes = [
  {path: 'posts', component: PostsPageComponent},
  {path: 'post', component: PostPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
