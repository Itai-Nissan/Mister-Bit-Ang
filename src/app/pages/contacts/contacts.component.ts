import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { UserMsgService } from '../../services/user-msg.service';
import { ContactService } from '../../services/contact.service';
import { ContactModel } from 'src/app/models/contact.model';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService, private userMsgServices: UserMsgService) { }
  contacts!: ContactModel[]
  contacts$!: Observable<ContactModel[]>
  subscription!: Subscription

  ngOnInit(): void {
    this.contactService.query()
    this.contacts$ = this.contactService.contacts$
    
  }

  onRemoveContact(contactId: string) {
    console.log('yesen');
    this.contactService.deleteContact(contactId)
    
    // this.userMsgServices.setUserMsg(`Contact removed (${contactId})`)
}


}
