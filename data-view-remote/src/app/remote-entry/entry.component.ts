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

  onRowEditSave(product: IProduct) {
    if (product) {
      this.productService.editProduct(product);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Product Has Been Updated',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Something Went Wrong',
      });
    }
  }

  onRowEditDelete(product: IProduct, index: number) {
    if (product) {
      this.productService.deleteProduct(product);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Product Has Been Deleted',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Something Went Wrong',
      });
    }
  }

  onRowEditCancel(product: IProduct, index: number) {}
  onRowEditInit(product: IProduct) {}
}
