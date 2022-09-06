import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './guards/auth.guard'
import { AuthService } from "../app/services/auth-service/auth.service";

import { BitAppComponent } from './pages/bit-app/bit-app.component'
import { HomepageComponent } from './pages/homepage/homepage.component'
import { ContactsComponent } from './pages/contacts/contacts.component'
import { SignupComponent } from "./pages/signup/signup.component"
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component'
import { AboutComponent } from './pages/about/about.component'
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component'
import { StatisticsComponent } from './pages/statistics/statistics.component'
import { ContactResolver } from './services/contact.resolver'




const routes: Routes = [
  {
    path: "contacts",
    component: ContactsComponent,
    canActivate: [AuthService],
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
    canActivate: [AuthGuard]
  },
  {
    path: "statistics",
    component: StatisticsComponent,
    canActivate: [AuthService],
  },
  // { path: '', component: BitAppComponent },
  { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolver } },
  { path: 'edit', component: ContactEditComponent },
  { path: "signup", component: SignupComponent, canActivate: [AuthService] },
  {
    path: "home",
    component: HomepageComponent,
    canActivate: [AuthService]
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
