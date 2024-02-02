import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WordsManager } from '../components/words-manager/words-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, WordsManager],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SortWords';
}
