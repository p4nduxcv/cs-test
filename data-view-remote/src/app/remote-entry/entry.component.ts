import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ProductService } from '../../../../shared/lib/services/product.service';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

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
export class RemoteEntryComponent implements OnInit {
  // products!: Product[];

  // clonedProducts: { [s: string]: Product } = {};

  public productService = inject(ProductService);
  productsSig = toSignal(this.productService.data$);
  constructor(
    // public productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  onRowEditInit(product: Product) {
    // this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: Product) {
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
}
