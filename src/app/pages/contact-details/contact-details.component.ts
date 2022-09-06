import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable, Subscription, switchMap } from 'rxjs';
import { ContactService } from '../../services/contact.service'
import { UserService } from '../../services/user-service/user.service'
import { UserMsgService } from '../../services/user-msg.service'

import { UserModel } from 'src/app/models/user.model'
import { ContactModel } from 'src/app/models/contact.model'

@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

    user!: UserModel;
    userSubscriber!: Subscription;



    constructor(
        private contactService: ContactService,
        private UserService: UserService,
        private UserMsgService: UserMsgService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    contacts!: ContactModel[]
    contacts$!: Observable<ContactModel[]>
    subscription!: Subscription


    @Input() contactId!: string | undefined
    @Output() back = new EventEmitter()
    @Output() onRemove = new EventEmitter<string>()
    contact!: ContactModel
    ans!: string
    // ans$!: Observable<string>


    async ngOnInit() {
        this.route.data.subscribe(data => {
            this.contact = data['contact']
            console.log(this.contact._id);
            this.contactId = this.contact._id

            this.contacts$ = this.contactService.contacts$

        })
        this.userSubscriber = this.UserService.user$.subscribe(user => this.user = user);

        // this.route.params.subscribe(async params => {
        //     const contact = await lastValueFrom(this.contactService.getById(params['id']))
        //     if (contact) this.contact = contact
        // })

        // this.route.params.pipe(switchMap(params => this.contactService.getById(params['id']))).subscribe(contact => {
        //     if (contact) this.contact = contact
        // })


        // NEVER,  NOT GOOD. Never subscribe inside another subscribe
        // this.route.params.subscribe(async params => {
        //     this.contactService.getById(params['id']).subscribe(contact => {
        //         if (contact) this.contact = contact
        //     })
        // })


    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
    }

    onRemoveContact(contactId: any) {
        this.contactId = this.contact._id
        let ans = confirm('Remove contact ' + this.contact.name + '?')
        if(!ans) return
        else{
            this.contactService.deleteContact(contactId)
            this.router.navigate(['/contacts'])
        }
        this.UserMsgService.setUserMsg(`Contact removed (${this.contact.name})`)
    }

    // onBack() {
    //     this.router.navigateByUrl('/contacts')
    //     // this.router.navigate(['/'])
    // }

}
