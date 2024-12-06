import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})

export class MockUserService {
  private nextId = 1;
  private users: User[] = []

  constructor(){
    this.initIfNeeded();
  }

  private initIfNeeded() {
    let data = localStorage.getItem('mock-user-data');
    if(data !== null){
      this.users = JSON.parse(data);
      return;
    }

    // adicionar alguns dados
    this.add({
      name: 'maria',
      email: 'maria@gmail.com'
    })
    this.add({
      name: 'marcela',
      email: 'marcela@gmail.com'
    })
    this.add({
      name: 'guilherme',
      email: 'guilherme@gmail.com'
    })
  }

  private save(){
    localStorage.setItem('mock-user-data', JSON.stringify(this.users))
  }

  add(user:User): void{
    user.id = this.nextId;
    this.nextId++;
    this.users.push(user)
    this.save();
  }

}
