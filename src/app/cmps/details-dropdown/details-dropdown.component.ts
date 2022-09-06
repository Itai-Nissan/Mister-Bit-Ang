import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactModel } from '../../models/contact.model';


@Component({
  selector: 'details-dropdown',
  templateUrl: './details-dropdown.component.html',
  styleUrls: ['./details-dropdown.component.scss']
})
export class DetailsDropdownComponent implements OnInit {

  constructor() { }
  @Input() contact!: ContactModel
  @Output() onRemove = new EventEmitter<string>()

  ngOnInit(): void {
    // console.log(this.contact);
    
  }

  onRemoveContact() {
    console.log(this.contact._id)    
    this.onRemove.emit(this.contact._id)
}


}
