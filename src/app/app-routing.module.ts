import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoryMappingListComponent} from './map/map-list/story-mapping-list.component';
import {UserComponent} from './user/user.component';
import {StoryMappingComponent} from './map/story-mapping.component';
import {StoryMappingEditComponent} from './map/story-mapping-edit/story-mapping-edit.component';
import {StoryMappingManageComponent} from './map/map-manage/story-mapping-manage.component';

const routes: Routes = [
  {
    path: 'map',
    component: StoryMappingComponent,
    children: [
      {
        path: 'edit/:id',
        component: StoryMappingEditComponent,
      },
      {
        path: 'manage/:id',
        component: StoryMappingManageComponent,
      },
      {
        path: 'list',
        component: StoryMappingListComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
