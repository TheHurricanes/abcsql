import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  constructor(private router:Router, private userService:UserService,
    flashService:NgFlashMessageService) { }

  ngOnInit() {

    this.userService.getProfile().subscribe(
      profile => {
        this.user = profile;
      },
      err => {
        console.log(err);
        return false;        
      }
    );

  }

}
