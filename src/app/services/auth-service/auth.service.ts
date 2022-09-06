import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../user-service/user.service';
import { delay, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class AuthService implements CanActivate {

    constructor(public auth: UserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAuth = this.auth.isAuthenticated()
        const isTargetSignup = state.url.endsWith('signup')

        if (!isAuth && !isTargetSignup) {
            this.router.navigateByUrl('/signup');
            return false;
        } else if (isAuth && isTargetSignup) {
            this.router.navigateByUrl('/home');
            return false;
        } else {
            return true;
        }
    }

    isLoggedIn = true

    checkLoggedIn() {
        return of(this.isLoggedIn).pipe(delay(100))
    }

}
