import { Injectable } from '@angular/core';
import {MyResponse, Project, User} from '../model/entities';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User = null;
  showLoginRegister = false;
  isAnonymous = true;

  constructor(private http: HttpClient) { }

  signup(user: User): Observable<Object> {
    // user = {
    //   userEmail: 'test4@nju.com',
    //   userPassword: 'qwe123',
    //   userName: '测试用户'
    // };
    const httpHeaders = {
      'Authorization': 'my-auth-token',
    };
    const options = {
      headers: httpHeaders,
    };
    return this.http.post('/api/signup', user, options);
  }
  signin(user: User): Observable<Object> {
    const loginingUser = {
      userEmail: user.userEmail,
      userPassword: user.userPassword
    };
    const httpHeaders = {
      'Authorization': 'my-auth-token',
    };
    const options = {
      headers: httpHeaders,
    };
    return this.http.post('/api/signin', loginingUser, options);
  }
}
