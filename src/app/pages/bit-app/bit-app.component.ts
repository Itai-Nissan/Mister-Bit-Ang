import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { UserMsgService } from '../../services/user-msg.service';
import { ContactService } from '../../services/contact.service';
import { ContactModel } from 'src/app/models/contact.model';

import { UserService } from '../../services/user-service/user.service';
import { UserModel } from '../../models/user.model';



@Component({
  selector: 'bit-app',
  templateUrl: './bit-app.component.html',
  styleUrls: ['./bit-app.component.scss']
})
export class BitAppComponent implements OnInit {

  constructor(private userService: UserService, private contactService: ContactService, private userMsgServices: UserMsgService) { }
  // contacts!: ContactModel[]
  // contacts$!: Observable<ContactModel[]>
  // subscription!: Subscription

  // user!: UserModel
  // user$!: Observable<UserModel>


  ngOnInit(): void {
    // this.contactService.query()
    // this.contacts$ = this.contactService.contacts$

    // this.user$ = this.userService.user$



    
  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
    // this.userMsgServices.setUserMsg(`Contact removed (${contactId})`)
}


}
