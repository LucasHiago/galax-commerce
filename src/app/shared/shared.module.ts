import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card-list/card/card.component';
import { CartComponent } from './cart/cart.component';

import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { heroShoppingBagSolid, heroUserCircleSolid, heroXMarkSolid } from '@ng-icons/heroicons/solid';

const components = [ HeaderComponent, UserActionsComponent, CardListComponent, CardComponent, CartComponent ];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({ heroShoppingBagSolid, heroUserCircleSolid, heroXMarkSolid })
  ],
  providers: [
    provideNgIconsConfig({
      size: '1.5em',
      color: 'inherit',
    }),
  ],
})
export class SharedModule { }
