import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChamadoService } from '../services/chamado.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonBadge,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-tecnicos',
  templateUrl: 'lista-tecnicos.page.html',
  styleUrls: ['lista-tecnicos.page.scss'],
  imports: [
    CommonModule,
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonButtons,
    IonBackButton,
    IonBadge,
    IonItemSliding,
    IonItemOptions,
    IonItemOption
  ]
})
export class ListaTecnicosPage implements OnInit {

  tecnicos: any[] = [];

  constructor(private chamadoService: ChamadoService) {}

  ngOnInit(): void {
    this.carregarTecnicos();
  }

  ionViewWillEnter(): void {
    this.carregarTecnicos();
  }

  carregarTecnicos(): void {
    this.tecnicos = this.chamadoService.listarTecnicos();
  }

  excluir(id: number): void {
    this.chamadoService.excluirTecnico(id);
    this.carregarTecnicos();
  }

  corSituacao(situacao: string): string {
    return situacao === 'Ativo' ? 'success' : 'medium';
  }
}
