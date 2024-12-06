import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockProductService {

  private nextId = 1;
  private products: Product[] = []

  constructor() {
    this.initIfNeeded();
  }


  private initIfNeeded() {
    let data = localStorage.getItem('mock-product-data');
    if(data !== null){
      this.products = JSON.parse(data);
      return;
    }

    // adicionar alguns dados 
    this.add({
      title: 'banana',
      price: 2.40,
      description: "Uma boa fruta"
    })
    this.add({
      title: 'maça',
      price: 4.10,
      description: "Uma boa fruta"
    })
    this.add({
      title: 'goiaba',
      price: 6.00,
      description: "Uma boa fruta"
    })
  }

  // simular um banco de dados
  private save() {
    localStorage.setItem('mock-product-data', JSON.stringify(this.products))
  }

  add(product:Product): void {
    product.id = this.nextId;
    this.nextId++;
    this.products.push(product);
    this.save();
  }

  getAll(): Product[]{
    return this.products;
  }

  getById(id: number): Product | null {
    for(let prod of this.products){
      if(id === prod.id){
        return prod;
      }
    }
    return null;
  }
}
