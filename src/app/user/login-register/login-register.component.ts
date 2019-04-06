import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import {MyResponse} from '../../model/entities';
import {ProjectService} from '../../service/project.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.less']
})
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],

})
export class LoginComponent implements OnInit {
  validateLoginForm: FormGroup;
  validateRegisterForm: FormGroup;
  showLogin = true;

  user = {
    userName: '',
    userPassword: '',
    userEmail: ''
  };

  constructor(private fb: FormBuilder, private userService: UserService, private projectService: ProjectService) { }

  ngOnInit() {
    this.validateLoginForm = this.fb.group({
      userEmail: [null, [ Validators.email, Validators.required ]],
      userPassword: [null, [ Validators.required ]],
      remember: [true]
    });

    this.validateRegisterForm = this.fb.group({
      userName: [null, [ Validators.required ]],
      userEmail: [null, [ Validators.email, Validators.required ]],
      userPassword: [null, [ Validators.required ]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }

  confirmationValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateRegisterForm.controls.userPassword.value) {
      return { confirm: true, error: true };
    }
  }
  toRegister(): void {
    this.showLogin = false;
  }
  submitLoginForm(): void {
    for (const i in this.validateLoginForm.controls) {
      this.validateLoginForm.controls[i].markAsDirty();
      this.validateLoginForm.controls[i].updateValueAndValidity();
    }

    // request for logining using this.user.username and this.user.password
    // code here
    this.userService.signin(this.user).subscribe(
      (items: MyResponse) => {
        this.userService.user = items['data'];
        if (items['status'] === 0) {
          this.userService.showLoginRegister = false;
          this.userService.isAnonymous = false;

          this.projectService.listProject();
        } else {
          alert('登录失败');
        }
      }
    );
  }

  toLogin(): void {
    this.showLogin = true;
  }
  submitRegisterForm(): void {
    for (const i in this.validateRegisterForm.controls) {
      this.validateRegisterForm.controls[i].markAsDirty();
      this.validateRegisterForm.controls[i].updateValueAndValidity();
    }
    // request for registering using this.user.username and this.user.password
    // code here
    this.userService.signup(this.user).subscribe(
      (items: MyResponse) => {
        this.userService.user = items['data'];
        if (items['status'] === 0) {
          this.showLogin = true;
        } else {
          alert('注册失败');
        }
      }
    );
  }

}
