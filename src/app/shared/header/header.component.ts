import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  simpleMenu = [
    { name: 'Produtos', link: 'products' },
    { name: 'Serviços', link: 'services' },
    { name: 'Combos', link: 'combo' }
  ];
}
