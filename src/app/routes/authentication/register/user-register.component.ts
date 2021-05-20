import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.less']
})
export class UserRegisterComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      captcha: [],
    });
  }

  public submitForm(): void {

    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

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
