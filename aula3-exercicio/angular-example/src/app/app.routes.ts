import { Routes } from '@angular/router';
import { PerfilPageComponent } from './page/perfil-page/perfil-page.component';
import { FriendPageComponent } from './page/friend-page/friend-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: RegisterPageComponent },
  { path: 'usuario/:nome', component: PerfilPageComponent },
  { path: 'amigos/:nome', component: FriendPageComponent },
  { path: '**', component: NotFoundComponent }, 
];
