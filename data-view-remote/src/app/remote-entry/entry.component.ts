import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { ProductService } from '@my-space/shared';
import { IProduct } from '@my-space/shared';

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

  onRowEditInit(product: IProduct) {
    // this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: IProduct) {
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

  onRowEditCancel(product: IProduct, index: number) {
    // this.products[index] = this.clonedProducts[product.id as string];
    // delete this.clonedProducts[product.id as string];
  }

  onRowEditDelete(product: IProduct, index: number) {
    this.productService.deleteProduct(product);
  }
}
