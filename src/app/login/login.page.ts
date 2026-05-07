import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonIcon,
  ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
    IonIcon
  ]
})
export class LoginPage {

  usuario: string = '';
  senha: string = '';
  tentouEnviar: boolean = false;

  mensagemErro: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastController: ToastController
  ) {}

  async entrar(): Promise<void> {
    this.tentouEnviar = true;
    this.mensagemErro = '';

    if (!this.usuario || !this.senha) {
      const toast = await this.toastController.create({
        message: 'Por favor, preencha o usuário e a senha.',
        duration: 3000,
        color: 'danger',
        position: 'bottom'
      });
      await toast.present();
      
      this.mensagemErro = 'Os campos usuário e senha são obrigatórios.';
      return;
    }

    // Se ambos estão preenchidos, acessa o sistema diretamente
    this.router.navigate(['/menu']);
  }
}
