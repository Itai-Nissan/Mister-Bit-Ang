import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ContactModel } from 'src/app/models/contact.model';
import { UserModel } from 'src/app/models/user.model';

import { UserService } from '../../services/user-service/user.service';
import { UserMsgService } from '../../services/user-msg.service'


@Component({
    selector: 'transferbit',
    templateUrl: './transfer-bit.component.html',
    styleUrls: ['./transfer-bit.component.scss']
})
export class TransferBitComponent implements OnInit {

    amount!: number;
    user!: UserModel;
    userSubscriber!: Subscription;

    @Input() contact!: ContactModel;

    constructor(
        private UserService: UserService,
        private router: Router,
        private UserMsgService: UserMsgService,
    ) { }

    ngOnInit(): void {
        this.userSubscriber = this.UserService.user$.subscribe(user => this.user = user);
    }

    ngOnDestroy() {
        this.userSubscriber.unsubscribe();
    }

    onTransferCoins(): void {
        if (this.amount > this.user.coins || this.amount <= 0 || this.amount === undefined) {
            this.UserMsgService.setUserMsg('Can\'t do that')
            // console.log('you can\'t do it');
            return;
        } else
        this.UserService.addMove(this.contact, this.amount)
        this.router.navigate(['contacts/', this.contact._id])
        this.UserMsgService.setUserMsg(`${this.amount}$ was transfered to (${this.contact.name})`)

    }
}
