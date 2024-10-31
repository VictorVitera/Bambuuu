import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ButtonPlus',
  templateUrl: './button-plus.component.html',
  styleUrls: ['./button-plus.component.scss'],
})
export class ButtonPlusComponent {
  @Input() routerLink: string | any[] = ''; // Permite string ou array de strings
  @Input() imgSource: string = '';

  constructor(private router: Router) {}

  navigate() {
    if (this.routerLink) {
      this.router.navigate(Array.isArray(this.routerLink) ? this.routerLink : [this.routerLink]);
    }
  }
}
