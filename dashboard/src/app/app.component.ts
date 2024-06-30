import { Component, OnInit, inject } from '@angular/core';
import {
  Router,
  RouterModule,
  ActivatedRoute,
  NavigationEnd,
} from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  shouldHide: boolean = false;

  constructor() {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.shouldHide = event.url === '/data-entry-remote';
      }
    });
  }
  navigateToDataEntry() {
    this.router.navigate(['data-entry-remote']);
  }
}
