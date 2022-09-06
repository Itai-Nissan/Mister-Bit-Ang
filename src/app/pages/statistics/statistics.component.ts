import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin-service/bitcoin.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

    newMarketData!: Array<Array<string>>
    marketTableTitle!: string
    newTransactionsData!: Array<string[]>
    transactionsTableTitle!: string

    constructor(private BitcoinService: BitcoinService) { }

    ngOnInit(): void {
        this.BitcoinService.getMarketPrice()
            .subscribe(result => this.filterMarketData(result));
        this.BitcoinService.getConfirmedTransactions()
            .subscribe(result => this.filterTransactionsData(result));
    }

    filterMarketData(result: any): void {
        this.newMarketData = this._filterData(result)
        this.marketTableTitle = result.name + ' - ' + result.description;
    }

    filterTransactionsData(result: any): void {
        this.newTransactionsData = this._filterData(result);
        this.transactionsTableTitle = result.name + ' - ' + result.description;
    }

    _filterData(result: any) {
        type MyDateFormatOptions = Pick<Intl.DateTimeFormatOptions, 'year' | 'month' | 'day'>
        return result.values.map((value: any) => {
            const options: MyDateFormatOptions = { year: '2-digit', month: '2-digit', day: '2-digit' };
            let date = new Date(value.x * 1000).toLocaleDateString(undefined, options);
            let bitCoinRate = value.y as string;
            return [date, bitCoinRate];
        })
    }
}
