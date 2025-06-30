// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';


const extendedAppConfig = {
  appConfig,
  providers: [
    appConfig.providers,
    provideHttpClient(),
  ]
};

bootstrapApplication(AppComponent, extendedAppConfig)
  .catch(err => console.error(err));
