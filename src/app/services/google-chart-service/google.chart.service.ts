// import { GoogleChartsModule } from 'angular-google-charts';
// import { Injectable } from "@angular/core";
// import { HttpClientModule } from '@angular/common/http';



// @Injectable({
//     providedIn: 'root'
// })
// export class GoogleChartsConfigService {
//   private configSubject = new ReplaySubject<GoogleChartsConfig>(1);
//   readonly config$ = this.configSubject.asObservable();

//   constructor(private http: HttpClientModule) {}

//   loadLazyConfigValues(): void {
//     this.http.post('https://special.config.api.com/getchartsconfig', {})
//       .pipe(take(1))
//       .subscribe(config => this.configSubject.next(config));
//   }
// }

// // Factory function that provides the config$ observable from your GoogleChartsConfigService
// export function googleChartsConfigFactory(configService: GoogleChartsConfigService): Observable<GoogleChartsConfig> {
//   return configService.config$;
// }

// @NgModule({
//   ...
//   providers: [
//     GoogleChartsConfigService,
//     {provide: GOOGLE_CHARTS_LAZY_CONFIG, useFactory: googleChartsConfigFactory, deps: [GoogleChartsConfigService]}
//   ]
// })
// export class AppModule {}
