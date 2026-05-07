import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonChip,
  IonList
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sobre',
  templateUrl: 'sobre.page.html',
  styleUrls: ['sobre.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonIcon,
    IonButtons,
    IonBackButton,
    IonChip,
    IonList
  ]
})
export class SobrePage {
  constructor() {}
}
