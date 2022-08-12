import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { AnimalsPageComponent } from './components/animals-page/animals-page.component';
import { CollaborationPageComponent } from './components/collaboration-page/collaboration-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { AnimalGroupPageComponent } from './components/animals-page/animal-group-page/animal-group-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ManagementPageComponent } from './components/management-page//management-page.component';
import { NewPostComponent } from './components/management-page/new-post/new-post.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryPageComponent,
    LocationPageComponent,
    AnimalsPageComponent,
    CollaborationPageComponent,
    ContactsPageComponent,
    AnimalGroupPageComponent,
    LoginPageComponent,
    ManagementPageComponent,
    NewPostComponent,
    PostsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
