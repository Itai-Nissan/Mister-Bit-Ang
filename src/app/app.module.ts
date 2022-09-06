import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { BitAppComponent } from './pages/bit-app/bit-app.component';
import { UserMsgComponent } from './cmps/user-msg/user-msg.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { TransferBitComponent } from './cmps/transfer-bit/transfer-bit.component';
import { NavigateComponent } from './cmps/navigate/navigate.component';
import { DetailsDropdownComponent } from './cmps/details-dropdown/details-dropdown.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    BitAppComponent,
    UserMsgComponent,
    AboutComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactEditComponent,
    ContactDetailsComponent,
    SignupComponent,
    HomepageComponent,
    ContactsComponent,
    MovesListComponent,
    StatisticsComponent,
    ChartComponent,
    TransferBitComponent,
    NavigateComponent,
    DetailsDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    GoogleChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    
    // {provide: GOOGLE_CHARTS_LAZY_CONFIG, useValue: googleChartsConfigSubject.asObservable()}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
