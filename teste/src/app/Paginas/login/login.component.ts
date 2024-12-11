import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  _fb = inject(FormBuilder) // injetar as dependencias 
  router = inject(Router)

  login = this._fb.group({
    username: ["", Validators.required], // valor inicial, campo obrigatorio
    password: ["", Validators.required] // valor inicial, campo obrigatorio
  })

  // navigate(){
  //   this.router.navigate(['home'])
  // }
  navigate(){
    if(this.login.valid){
      this.router.navigate(['home'])
    }
  }
}
