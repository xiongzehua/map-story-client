import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {StoryMappingEditComponent} from './story-mapping/story-mapping-edit/story-mapping-edit.component';
import {StoryMappingManageComponent} from './story-mapping/story-mapping-manage/story-mapping-manage.component';
import {StoryMappingListComponent} from './story-mapping/story-mapping-list/story-mapping-list.component';
import { LoginComponent } from './user/login-register/login-register.component';

const routes: Routes = [
  {
    path: 'storymapping/edit/:id',
    component: StoryMappingEditComponent,
  },
  {
    path: 'storymapping/manage/:id',
    component: StoryMappingManageComponent,
  },
  {
    path: 'storymapping/list',
    component: StoryMappingListComponent,
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'login-register',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'storymapping/list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
