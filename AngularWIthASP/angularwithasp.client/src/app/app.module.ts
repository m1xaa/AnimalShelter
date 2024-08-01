import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './componenets/pages/home-page/login-modal/login-modal.component';
import { RegistrationModalComponent } from './componenets/pages/home-page/registration-modal/registration-modal.component';
import { HeaderComponent } from './componenets/header/header.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { HomePageComponent } from './componenets/pages/home-page/home-page.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule, NgForOf } from '@angular/common';
import { PostsPageComponent } from './componenets/pages/posts-page/posts-page.component';
import { DeletePostModalComponent } from './componenets/pages/posts-page/ui/delete-post-modal/delete-post-modal.component';
import { CreatePostModalComponent } from './componenets/pages/posts-page/ui/create-post-modal/create-post-modal.component';
import { PostsTableComponent } from './componenets/pages/posts-page/ui/posts-table/posts-table.component';
import { postReducer } from './state/posts/post.reducer';
import { StoreModule } from '@ngrx/store';
import { PostEffects } from './state/posts/post.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PostPageComponent } from './componenets/pages/post-page/post-page.component';
import { ReviewDisplayComponent } from './componenets/pages/post-page/reviews/review-display/review-display.component';
import { DeleteReviewModalComponent } from './componenets/pages/post-page/reviews/delete-review-modal/delete-review-modal.component';
import { CreateReviewModalComponent } from './componenets/pages/post-page/reviews/create-review-modal/create-review-modal.component';
import { ReviewReducer } from './state/reviews/review.reducer';
import { ReviewEffects } from './state/reviews/review.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent,
    RegistrationModalComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    PostsPageComponent,
    DeletePostModalComponent,
    CreatePostModalComponent,
    PostsTableComponent,
    PostPageComponent,
    ReviewDisplayComponent,
    DeleteReviewModalComponent,
    CreateReviewModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ posts: postReducer, reviews: ReviewReducer}),
    EffectsModule.forRoot([PostEffects, ReviewEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    NgForOf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
