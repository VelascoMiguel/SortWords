import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-sorter',
  standalone: true,
  templateUrl: './words-manager.component.html',
  imports:[FormsModule, CommonModule],
  styleUrls: ['./words-manager.component.css']
})
export class WordsManager {
  inputText: string = '';
  sortedWords: string[] = [];

  sortWords(): void {
    const words = this.inputText.split(' ').filter(word => word.trim() !== '');
    this.sortedWords = words.sort((a, b) => b.length - a.length);
  }

  toUppercase(): void {
    this.inputText = this.inputText.toUpperCase();
  }

  toLowercase(): void {
    this.inputText = this.inputText.toLowerCase();
  }
}

