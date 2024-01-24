import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnDestroy {
  isVisible = false;
  private subscription!: Subscription;

  constructor(private cartService: CartService){
    this.subscription = this.cartService.cartVisible$.subscribe(visible => this.isVisible = visible);
  }

  toggleCart() {
    this.cartService.toggleCarVisibility();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
