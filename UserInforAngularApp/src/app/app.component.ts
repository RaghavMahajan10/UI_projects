import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  users = [
    { id: 1, name: 'Raghav', email: 'raghav@example.com' },
    { id: 2, name: 'Amit', email: 'amit@example.com' },
    { id: 3, name: 'John', email: 'john@example.com' }
  ];
  country: string[] = ['India', 'USA', 'UK', 'Canada'];
  selectedCity: string = '';

  formData = {
    name: '',
    email: '',
    gender: '',
    country: ''
  };

  rows: any[] = [];

  submitForm() {
    this.rows.push({ ...this.formData });
    this.formData = { name: '', email: '', gender: '', country: '' };
  }


}
