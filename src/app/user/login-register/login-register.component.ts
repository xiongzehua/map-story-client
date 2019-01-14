import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/entities';

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

  user = new User(null, null, null);

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.validateLoginForm = this.fb.group({
      username: [null, [ Validators.required ]],
      password: [null, [ Validators.required ]],
      remember: [true]
    });

    this.validateRegisterForm = this.fb.group({
      username: [null, [ Validators.required ]],
      password: [null, [ Validators.required ]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    })
  }

  confirmationValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateRegisterForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };

  toRegister():void {
    this.showLogin = false;
  }
  submitLoginForm(): void {
    for (const i in this.validateLoginForm.controls) {
      this.validateLoginForm.controls[i].markAsDirty();
      this.validateLoginForm.controls[i].updateValueAndValidity();
    }
    
    // request for logining using this.user.username and this.user.password
    // code here
    

    this.userService.showLoginRegister = false;
    this.userService.isAnonymous = false;
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


    this.showLogin = true;
  }

}
