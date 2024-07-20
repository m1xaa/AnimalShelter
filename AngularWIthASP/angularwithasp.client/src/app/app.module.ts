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
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgForOf } from '@angular/common';
import { MainPageComponent } from './componenets/pages/main-page/main-page.component';
import { PostsPageComponent } from './componenets/pages/posts-page/posts-page.component';
import { DeletePostModalComponent } from './componenets/pages/posts-page/ui/delete-post-modal/delete-post-modal.component';
import { CreatePostModalComponent } from './componenets/pages/posts-page/ui/create-post-modal/create-post-modal.component';
import { PostsTableComponent } from './componenets/pages/posts-page/ui/posts-table/posts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent,
    RegistrationModalComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    MainPageComponent,
    PostsPageComponent,
    DeletePostModalComponent,
    CreatePostModalComponent,
    PostsTableComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    NgForOf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
