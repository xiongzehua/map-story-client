import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { UserComponent } from './user/user.component';
import {StoryMappingListComponent} from './story-mapping/story-mapping-list/story-mapping-list.component';
import {StoryMappingEditComponent} from './story-mapping/story-mapping-edit/story-mapping-edit.component';
import {StoryMappingManageComponent} from './story-mapping/story-mapping-manage/story-mapping-manage.component';
import {CardComponent} from './story-mapping/card/card.component';
import { LoginComponent } from './user/login-register/login-register.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StoryMappingListComponent,
    UserComponent,
    StoryMappingEditComponent,
    StoryMappingManageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
