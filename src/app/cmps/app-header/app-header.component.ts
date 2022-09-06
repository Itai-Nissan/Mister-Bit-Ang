import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from '../../services/auth-service/auth.service';
import { UserService } from '../../services/user-service/user.service';

import { UserModel } from '../../models/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  user!: UserModel
  user$!: Observable<UserModel>
  userSubscription!: Subscription;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.authService.checkLoggedIn()
    this.user$ = this.userService.user$
    // this.user$.forEach((user)=>{
    //   console.log(user.name)      
    // })
  }

}

