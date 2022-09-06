import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { ContactModel } from 'src/app/models/contact.model';

@Component({
    selector: 'moveslist',
    templateUrl: './moves-list.component.html',
    styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {


    constructor() { }

    @Input() user!: UserModel;
    @Input() contact!: ContactModel;
    isMovesToContact!: boolean

    ngOnInit(): void {
        this.isMovesToContact = this.user.moves.some(move => move.to === this.contact?.name)
    }
    ngOnChanges(): void {
        this.isMovesToContact = this.user.moves.some(move => move.to === this.contact?.name)
    }


} 
