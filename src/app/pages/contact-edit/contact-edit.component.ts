import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { lastValueFrom } from 'rxjs'
import { ContactModel } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service'
import { UserMsgService } from '../../services/user-msg.service'


@Component({
    selector: 'contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

    constructor(
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute,
        private UserMsgService: UserMsgService,
    ) { }

    contact!: ContactModel

    ngOnInit(): void {
        this.route.data.subscribe(({ contact }) => {
            this.contact = contact || this.contactService.getEmptyContact() as ContactModel
        })
    }

    async onSaveContact() {
        await lastValueFrom(this.contactService.save({ ...this.contact }))

        this.router.navigateByUrl('/contacts')
        const onSave = this.contact._id ? 'Edit':'Added'
        this.UserMsgService.setUserMsg(`${onSave} contact (${this.contact.name})`)
    }

    onBack() {
        this.router.navigateByUrl('/contacts')
        // this.router.navigate(['/'])
    }



    // handleBirthDayChange(value: string) {
    //     this.contact.birthDate = new Date(value)
    // }

}
