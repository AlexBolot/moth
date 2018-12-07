import { isNullOrUndefined } from 'util';

export class Chatbot {
  historique: string[];
  currentQuestion: string;
  currentReponse: string;
  name: string;

  constructor() {
  }

  answer() {

  }

  getLastTen() {
    const lastTen = [];
    for (let i = this.historique.length - 10; i < this.historique.length; ++i) {
      if (!isNullOrUndefined(this.historique[i])) {

        lastTen.push(this.historique[i]);
      }
    }
    return lastTen;
  }
}
