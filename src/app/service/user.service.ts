import { Injectable } from '@angular/core';
import {MyResponse, Project, User} from '../model/entities';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User = null;
  showLoginRegister = false;
  isAnonymous = true;

  constructor(private http: HttpClient) { }

  signup(user: User) {
    user = {
      userEmail: 'test4@nju.com',
      userPassword: 'qwe123',
      userName: '测试用户'
    };
    const httpHeaders = {
      'Authorization': 'my-auth-token',
    };
    const options = {
      headers: httpHeaders,
    }
    this.http
      .post('/api/signup', user, options).subscribe(
      (items: MyResponse) => {
        console.log(items['data']);
        console.log(items.data);
        this.user = items['data'];
        console.log(this.user);
      }
    );
  }
  signin(user: User) {
    user = {
      userEmail: 'test1@nju.com',
      userPassword: 'qwe123'
    };
    const httpHeaders = {
      'Authorization': 'my-auth-token',
    };
    const options = {
      headers: httpHeaders,
    }
    this.http
      .post('/api/signin', user, options).subscribe(
      (items: MyResponse) => {
        this.user = items['data'];
        console.log(this.user);
      }
    );
  }
}
