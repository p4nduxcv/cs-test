import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    InputGroupModule,
    FormsModule,
    InputTextModule,
    InputGroupAddonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
  ],
  selector: 'app-data-entry-remote-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {
  productForm!: FormGroup;
  statusOptions!: any[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      status: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: [''],
    });

    this.statusOptions = [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Out of Stock', value: 'out_of_stock' },
    ];
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    }
  }
}
