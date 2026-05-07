import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonText
  ]
})
export class MenuPage {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  navegarPara(rota: string): void {
    this.router.navigate([rota]);
  }

  sair(): void {
    this.authService.logout(); // Limpa os dados do usuário logado
    this.router.navigate(['/login']);
  }
}
