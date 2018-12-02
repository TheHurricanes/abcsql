import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService,
    private flashService: NgFlashMessageService,
    private router: Router,
    ) { }

  ngOnInit() {
   }

  onClickLogout() {
    this.userService.logout();
    this.flashService.showFlashMessage({
      messages: ['You are now logged out!'],
      dismissible: true,
      timeout: 3000,
      type: 'success'
    });
    this.router.navigate(['login']);
  }

  getTokenStatus() {
    if (localStorage.getItem('id_token')) {
      return true;
    } else {
      return false;
    }
  }
}
