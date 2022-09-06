import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

import { UserService } from '../../services/user-service/user.service';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    user!: UserModel

    constructor( private UserService: UserService, private router: Router) { }

    ngOnInit() {
        console.log(this.user);
        
        this.user = new UserModel()
    }

    async signUp() {
        await this.UserService.signup(this.user.name).toPromise();
        this.router.navigate(['home']);
    }

}
