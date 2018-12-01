import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators }  from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  userOb:{};
  constructor(private fb :FormBuilder, private userService:UserService,
    private flashService:NgFlashMessageService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),  
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',Validators.required)
    });
  }
  onRegisterSubmit(form){
    this.userOb = {
      name:form.name,
      username:form.username,
      email:form.email,
      password:form.password
    }
      this.registerForm.reset();
      this.userService.registerService(this.userOb).subscribe( data =>
      {
        if(data['success']) {
            this.flashService.showFlashMessage({
              messages: [data['msg']], 
              dismissible: true, 
              timeout: 3000,
              type: 'success'
            });
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
