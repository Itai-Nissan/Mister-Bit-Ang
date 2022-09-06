import { Component, inject, OnInit } from '@angular/core';
import { UserMsgService } from '../../services/user-msg.service';
import { transition, style, animate, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
    style({
      opacity: 0
    }),
    animate('0.4s ease-in', style({
      opacity: 1
    }))
  ]);
  
  const leaveTrans = transition(':leave', [
    style({
      opacity: 1
    }),
    animate('1s ease-out', style({
      opacity: 0
    }))
  ])
  
  const fadeIn = trigger('fadeIn', [
    enterTransition
  ]);
  
  const fadeOut = trigger('fadeOut', [
    leaveTrans
  ]);
  
@Component({
    selector: 'user-msg',
    templateUrl: './user-msg.component.html',
    styleUrls: ['./user-msg.component.scss'],
    animations: [
        fadeIn,
        fadeOut
      ]
})
export class UserMsgComponent {
    // constructor(public userMsgServices: UserMsgService) { }
    constructor(public userMsgServices: UserMsgService) {
        userMsgServices
        this.userMsgServices = inject(UserMsgService)
    }
}
