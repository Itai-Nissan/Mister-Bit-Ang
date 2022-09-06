import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactModel } from '../../models/contact.model'


@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }
  @Input() contacts!: ContactModel[] | null
  @Output() onRemove = new EventEmitter<string>()

  ngOnInit(): void {
  }

}
