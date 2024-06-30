import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '@my-space/shared';

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  standalone: true,
  imports: [
    TableModule,
    ToastModule,
    CommonModule,
    TagModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [MessageService],
  selector: 'app-data-view-remote-entry',
  templateUrl: './entry.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RemoteEntryComponent {
  public readonly productService = inject(ProductService);
  public readonly messageService = inject(MessageService);

  onRowEditInit(product: Product) {
    // this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: Product) {
    console.log('first, ', product);
    this.productService.editProduct(product);
    // if (product.price! > 0) {
    //   delete this.clonedProducts[product.id as string];
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Product is updated',
    //   });
    // } else {
    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Error',
    //     detail: 'Invalid Price',
    //   });
    // }
  }

  onRowEditCancel(product: Product, index: number) {
    // this.products[index] = this.clonedProducts[product.id as string];
    // delete this.clonedProducts[product.id as string];
  }

  onRowEditDelete(product: Product, index: number) {
    this.productService.deleteProduct(product);
  }
}
