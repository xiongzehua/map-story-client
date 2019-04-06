import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';
import {ProjectService} from './service/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'map-story-client';

  constructor(
    public userService: UserService,
    public projectService: ProjectService,
    public router: Router
  ) {
    // show login-register dialog when enter into the index page
    this.userService.showLoginRegister = true;
  }

  showLoginModal(): void {
    this.userService.showLoginRegister = true;
  }

  loginCancel(): void {
    this.userService.showLoginRegister = false;
  }

  logout(): void {
    this.userService.isAnonymous = true;
    this.userService.user.userToken = '';

    // 重定向到首页
    this.router.navigateByUrl('/storymapping/list');
    this.projectService.listProject();
  }
}
