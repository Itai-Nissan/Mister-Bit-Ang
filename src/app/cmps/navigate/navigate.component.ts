import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable, Subscription, switchMap } from 'rxjs';
import { ContactService } from '../../services/contact.service'

import { ContactModel } from 'src/app/models/contact.model'

import { NavigationService } from 'src/app/services/navigation-service/navigation.service';


@Component({
  selector: 'navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {


  constructor(
    private contactService: ContactService,

    private route: ActivatedRoute,
    private router: Router,
    public navigation: NavigationService
  ) { }

  @Input() contacts!: ContactModel[] | null
  @Input() contactId!: string
  @Output() back = new EventEmitter()
  contact!: ContactModel
  ans!: string
  subscription!: Subscription
  // ans$!: Observable<string>


  async ngOnInit() {
    this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
    // console.log(this.route.queryParams)
    
    // this.userSubscriber = this.UserService.user$.subscribe(user => this.user = user);
    
  }

  ngOnChange(){

  }

  onBack() {
    // this.router.navigateByUrl('/contacts')
    // this.router.navigate(['/'])
  }



}
