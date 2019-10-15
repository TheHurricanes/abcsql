import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginOb: {};
  constructor(private fb: FormBuilder, private userService: UserService,
    private flashService: NgFlashMessageService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onLoginSubmit(form) {
    this.loginForm.reset();
    this.loginOb = {
      username: form.username,
      password: form.password
    }

    this.userService.loginService(form)
      .subscribe(data => {
        if (data['success']) {
          this.router.navigate(['dashboard']);
          this.flashService.showFlashMessage({
            messages: ['Yay! You just logged in!'],
            dismissible: true,
            timeout: 3000,
            type: 'success'
          });
          this.userService.storeUserData(data.token, data.user);
        } else {
          this.flashService.showFlashMessage({
            messages: [data['msg']],
            dismissible: true,
            timeout: 3000,
            type: 'danger'
          });
        }
      }
      );
  }
}
