import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { UserService } from '../../services/user-service/user.service';
import { UserModel } from '../../models/user.model';
import { ContactModel } from 'src/app/models/contact.model';
import { GoogleChartModel } from '../../models/googleChart.model';

import { ContactService } from '../../services/contact.service';
import { BitcoinService } from '../../services/bitcoin-service/bitcoin.service';



@Component({
    selector: 'homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    user!: UserModel
    user$!: Observable<UserModel>
    userSubscription!: Subscription
    rate!: number
    contacts!: ContactModel[]
    contacts$!: Observable<ContactModel[]>

    marketChart = new GoogleChartModel();
    transactionsChart = new GoogleChartModel();
    @Input() marketData: any = [];
    @Input() marketTableTitle!: string
    @Input() transactionsData: any = [];
    @Input() transactionsTableTitle!: string;


    constructor(private contactService: ContactService, private userService: UserService, private bitcoinService: BitcoinService) { }

    ngOnInit(): void {
        this.user$ = this.userService.user$
        this.userSubscription = this.userService.user$.subscribe(user => this.user = user)

        this.contactService.query()
        this.contacts$ = this.contactService.contacts$

        this.bitcoinService.getBitCoinRate().subscribe((rate) => {
            this.rate = +(1 / rate).toFixed(2)
        });

        this.marketChart.data = this.marketData;
        this.marketChart.title = this.marketTableTitle;
        this.transactionsChart.data = this.transactionsData;
        this.transactionsChart.title = this.transactionsTableTitle;
    }

    ngOnChanges(): void {
        this.marketChart.data = this.marketData;
        this.marketChart.title = this.marketTableTitle;
        this.transactionsChart.data = this.transactionsData;
        this.transactionsChart.title = this.transactionsTableTitle;
    }


    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

}