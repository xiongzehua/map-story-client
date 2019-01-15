import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'map-story-client';

  constructor(
    public userService: UserService,
  ) { }

  showLoginModal(): void {
    this.userService.showLoginRegister = true;
  }

  loginCancel(): void {
    this.userService.showLoginRegister = false;
  }
}
