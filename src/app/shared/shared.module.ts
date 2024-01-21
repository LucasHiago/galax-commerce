import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { UserActionsComponent } from './user-actions/user-actions.component';

const components = [ HeaderComponent, UserActionsComponent ];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
