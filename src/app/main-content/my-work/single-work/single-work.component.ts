import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-work.component.html',
  styleUrl: './single-work.component.scss'
})
export class SingleWorkComponent {

@Input() projectData = {
      img: './assets/img/my-projects/join.png',
      title: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS',
      descriptionen: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionde: 'Aufgabenmanager inspiriert vom Kanban-System. Aufgaben mit Drag-and-Drop-Funktionen erstellen und organisieren, Benutzer und Kategorien zuweisen.',
      projecturl: 'https://join.maximilian-muehlbauer.de/index.html',
      githuburl: 'https://github.com/maksmuehlbauer/Join_Gruppenarbeit'
  }
@Input() itemIndex: number = 0;

textBoxAlign(itemIndex:number): string {
  return itemIndex % 2 === 0 ? '' : 'odd-text-box'
}

imgBoxAlign(itemIndex:number): string {
  return itemIndex % 2 === 0 ? '' : 'odd-img-box'
}



}
