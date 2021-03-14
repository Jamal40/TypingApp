import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomSentence = lorem.sentence();
  inputText = '';
  generateNewSentenece() {
    this.randomSentence = lorem.sentence();
  }
  onTyping(value: string) {
    console.log(value);
    this.inputText = value;
  }
  evaluateConvenientColor(letter: string, index: number) {
    if (!this.inputText[index]) {
      return 'grey';
    }
    return letter == this.inputText[index] ? 'green' : 'red';
  }
}
