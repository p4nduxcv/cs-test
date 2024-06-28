import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard';

  loading: boolean = false;

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
