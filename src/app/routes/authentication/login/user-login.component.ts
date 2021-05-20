import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.less']
})
export class UserLoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      captcha: [],
      remember: [true]
    });
  }

  public submitForm(): void {

    for (const i of Object.keys(this.form.controls)) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    let username = this.form.get('username')!.value;
    let password = this.form.get('password')!.value;
    let captcha = this.form.get('captcha')!.value;
    let remember = this.form.get('remember')?.value;

    console.log(username)
    console.log(password)
    console.log(captcha)
    console.log(remember)

    // this.loginService
    //   .login(this.user)
    //   .subscribe((data: LoginResult) => {
    //     this.loginResult = data;
    //     sessionStorage.setItem('access_token', data.access_token);
    //     sessionStorage.setItem('token_type', data.token_type);
    //     sessionStorage.setItem('expire_in', String(data.expires_in));
    //   });

    // this.router.navigateByUrl('/');

  }

  ngOnInit(): void {
  }

}
