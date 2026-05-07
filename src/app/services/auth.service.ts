import { Injectable } from '@angular/core';
import { Usuario } from '../models/chamado.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioLogado: Usuario | null = null;

  private usuarios: Usuario[] = [
    { id: 1, nome: 'Admin Sistema', email: 'admin@empresa.com', perfil: 'admin' },
    { id: 2, nome: 'João Santos', email: 'joao@empresa.com', perfil: 'tecnico' },
    { id: 3, nome: 'Ana Costa', email: 'ana@empresa.com', perfil: 'tecnico' },
    { id: 4, nome: 'Maria Silva', email: 'maria@empresa.com', perfil: 'solicitante' }
  ];

  constructor() {}

  login(email: string, senha: string): boolean {
    // Simulação simples — aceita qualquer senha com e-mail válido
    const usuario = this.usuarios.find(u => u.email === email);
    if (usuario) {
      this.usuarioLogado = usuario;
      return true;
    }
    return false;
  }

  logout(): void {
    this.usuarioLogado = null;
  }

  getUsuarioLogado(): Usuario | null {
    return this.usuarioLogado;
  }

  isLoggedIn(): boolean {
    return this.usuarioLogado !== null;
  }

  getTecnicos(): Usuario[] {
    return this.usuarios.filter(u => u.perfil === 'tecnico');
  }
}
