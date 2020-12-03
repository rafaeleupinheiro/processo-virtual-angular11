import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'previdencia-virtual';

  constructor(private router: Router) {
  }

  beneficiarioPage(): void {
    this.router.navigate(['./beneficiario-listagem']);
  }

  processoPage(): void {
    this.router.navigate(['./processo-listagem']);
  }
}
