import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalGroupPageComponent } from './components/animals-page/animal-group-page/animal-group-page.component';
import { AnimalsPageComponent } from './components/animals-page/animals-page.component';
import { CollaborationPageComponent } from './components/collaboration-page/collaboration-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ManagementPageComponent } from './components/management-page/management-page.component';
import { NewPostComponent } from './components/management-page/new-post/new-post.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';

const routes: Routes = [{ path: 'history', component: HistoryPageComponent },
{ path: 'location', component: LocationPageComponent },
{ path: 'collaboration', component: CollaborationPageComponent },
{ path: 'contacts', component: ContactsPageComponent },
{ path: 'animals', component: AnimalsPageComponent },
{ path: 'animals/:id', component: AnimalGroupPageComponent },
{ path: 'admin/login', component: LoginPageComponent },
{ path: 'admin/management', component: ManagementPageComponent },
{ path: 'admin/management/post', component: NewPostComponent },
{ path: '', component: PostsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
