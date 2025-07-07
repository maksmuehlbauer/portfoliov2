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
  ];

   projectList = [
    {
      img: './assets/img/my-projects/join.png',
      title: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS',
      descriptionen: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionde: 'Aufgabenmanager inspiriert vom Kanban-System. Aufgaben mit Drag-and-Drop-Funktionen erstellen und organisieren, Benutzer und Kategorien zuweisen.',
      projecturl: 'https://join.maximilian-muehlbauer.de/index.html',
      githuburl: 'https://github.com/maksmuehlbauer/Join_Gruppenarbeit'
    },
    { 
      img: './assets/img/my-projects/elpolloloco.png',
      title: 'Pollo Loco',
      languages: 'JavaScript | HTML | CSS',
      descriptionen: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      descriptionde: 'Spring-, Lauf- und Wurfspiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      projecturl: 'https://el-pollo-loco.maximilian-muehlbauer.de/index.html',
      githuburl: 'https://github.com/maksmuehlbauer/el-pollo-loco'
    },
    // {
    //   img: './assets/img/my-projects/crm.png',
    //   title: 'Simple CRM',
    //   languages: 'Angular | Firebase',
    //   description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
    //   projecturl: 'https://www.google.de',
    //   githuburl: 'https://www.google.de'
    // },
    {
      img: './assets/img/my-projects/pokedex.png',
      title: 'Pokédex',
      languages: 'JavaScript | HTML | CSS | Api ',
      descriptionen: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      descriptionde: 'Basierend auf der PokéAPI, einer einfachen Bibliothek, die Informationen zu Pokémon bereitstellt und katalogisiert.',
      projecturl: 'https://pokedex.maximilian-muehlbauer.de/index.html',
      githuburl: 'https://github.com/maksmuehlbauer/Pokedex-v1'
    },
    // {
    //   img: './assets/img/my-projects/crypto.png',
    //   title: 'Crypto Converter',
    //   languages: 'Angular | TypeScript | RestAPI | HTML | CSS',
    //   description: 'Simple currency converter based on a public API displaying exchange rate charts.',
    //   projecturl: 'https://www.google.de',
    //   githuburl: 'https://www.google.de'
    // }
  ]
}
