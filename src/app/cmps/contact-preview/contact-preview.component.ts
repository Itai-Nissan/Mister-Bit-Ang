import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactModel } from '../../models/contact.model';
import { UserMsgService } from '../../services/user-msg.service'


@Component({
    selector: 'contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

    constructor(
        private UserMsgService: UserMsgService,
    ) { }
    @Input() contact!: ContactModel
    @Output() onRemove = new EventEmitter<any>()

    ngOnInit(): void {
    }


    onRemoveContact() {
        console.log('it');
        let ans = confirm('Remove contact ' + this.contact.name + '?')
        if (!ans) return
        else {
            this.onRemove.emit(this.contact._id)
        }
        this.UserMsgService.setUserMsg(`Contact removed (${this.contact.name})`)
    }

}
