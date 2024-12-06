import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-page',
  imports: [],
  templateUrl: './perfil-page.component.html',
  styleUrl: './perfil-page.component.css'
})
export class PerfilPageComponent {
  userName: string = '';

  constructor(private router: ActivatedRoute) {}

  OnInit(): void {
    this.userName = this.router.snapshot.paramMap.get('nome') || 'Usuário Desconhecido';
  }
}
