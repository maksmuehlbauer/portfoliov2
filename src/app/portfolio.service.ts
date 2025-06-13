import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

    skillList = [
    { icon: 'ang.png', name: 'Angular' },
    { icon: 'typescript.png', name: 'TypeScript' },
    { icon: 'js.png', name: 'JavaScript' },
    { icon: 'html.png', name: 'HTML' },
    { icon: 'fire.png', name: 'Firebase' },
    { icon: 'git.png', name: 'GIT' },
    { icon: 'css.png', name: 'CSS' },
    { icon: 'auto.png', name: 'Material Design' },
    { icon: 'api.png', name: 'Rest-Api' },     
    { icon: 'scrum.png', name: 'Scrum' }
    // { icon: 'wordpress.png', name: 'WordPress' }
  ];
}
