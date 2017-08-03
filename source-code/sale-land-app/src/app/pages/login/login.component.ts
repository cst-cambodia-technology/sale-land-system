import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from "../../auth.service";
import {AppSetting} from "../../app.setting";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public remember:boolean = false;
  constructor(private authService: AuthService, fb:FormBuilder) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.authService.authenticate(values['email'], values['password'], values['remember'])
        .subscribe(
          response => window.location.href = AppSetting.DOMAIN_NAME + '#/pages/dashboard',
          error => console.log(error)
        );
    }
  }
}
