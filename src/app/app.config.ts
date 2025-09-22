import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import * as deJson from '../assets/i18n/de.json';
import * as enJson from '../assets/i18n/en.json';

type TranslationKeys = 'de' | 'en';

class CustomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    const translations = {
      'de': deJson,
      'en': enJson,
    };
    return of(translations[lang as TranslationKeys]);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'disabled',
        anchorScrolling: 'enabled'
      })
    ),
    provideAnimations(),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
      },
      fallbackLang: 'de'
    })),
  ]
};