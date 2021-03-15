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
  startTime = Date.now();
  interval = 0;
  typingVelocity = 0;
  generateNewSentenece() {
    this.startTime = Date.now();
    this.randomSentence = lorem.sentence();
  }
  onTyping(value: string) {
    this.inputText = value;
    if (this.inputText === this.randomSentence) {
      this.interval = Date.now() - this.startTime;
      this.typingVelocity = this.randomSentence.length / (this.interval / 1000);
    }
  }
  evaluateConvenientColor(letter: string, index: number) {
    if (!this.inputText[index]) {
      return 'grey';
    }
    return letter == this.inputText[index] ? 'green' : 'red';
  }
}
