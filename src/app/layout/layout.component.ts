import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { JumbotronComponent } from './section/jumbotron/jumbotron.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, SharedModule, JumbotronComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
