import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private dataSubject = new BehaviorSubject<any[]>([
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      price: 65,
      inventoryStatus: 'INSTOCK',
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      price: 72,
      inventoryStatus: 'OUTOFSTOCK',
    },
  ]);
  public data$ = this.dataSubject.asObservable();

  constructor() {}

  addProduct(product: object) {
    this.dataSubject.next([...this.dataSubject.getValue(), product]);
    console.log('k ', this.dataSubject.getValue());
  }
}
