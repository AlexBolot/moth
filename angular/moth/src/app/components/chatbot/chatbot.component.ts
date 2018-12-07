import { Component, OnInit } from '@angular/core';
import { Chatbot } from './chatbot';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})

export class ChatbotComponent implements OnInit {
  chatbot: Chatbot;
  //  = {
  //   name: 'Kitler',
  //   currentQuestion: 'Bonjour',
  //   historique: [],
  //   currentReponse: ''
  // };
  initConv = false;

  constructor() {
    this.chatbot = new Chatbot();
    this.chatbot.name = 'Hrmmf';
    this.chatbot.historique = [];
  }

  ngOnInit() {
  }

  sendMessage(question: string) {
    this.chatbot.historique.push(question);
    this.chatbot.answer();
    this.chatbot.currentQuestion = '';
  }





}
