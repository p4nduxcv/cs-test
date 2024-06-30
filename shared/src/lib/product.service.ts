import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './type/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private dataSubject = new BehaviorSubject<any[]>([
    {
      id: '112',
      code: '1000',
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

  addProduct(product: IProduct) {
    this.dataSubject.next([
      ...this.dataSubject.getValue(),
      { id: nanoid(), ...product },
    ]);
  }

  deleteProduct(product: IProduct) {
    const filteredProducts = this.dataSubject
      .getValue()
      .filter((p) => p.id !== product.id);
    this.dataSubject.next(filteredProducts);
  }

  editProduct(product: IProduct) {
    const editedProduct = this.dataSubject
      .getValue()
      .map((p) => (p.id === product.id ? product : p));
    this.dataSubject.next(editedProduct);
  }
}
