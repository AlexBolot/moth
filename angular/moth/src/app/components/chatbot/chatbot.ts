import { isNullOrUndefined } from 'util';
import { ChatBotService } from 'src/app/services/chat-bot.service';
import { OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { exists } from 'fs';


export class Chatbot {
    historique: string[];
    currentQuestion: string;
    currentReponse: string;
    name: string;

    constructor(private chatBotService: ChatBotService) {

    }

    answer() {
        let reponse: string;
        reponse = "Je ne comprends pas votre question, mais je suis sûr que quelqu'un d'autre pourra vous répondre"
        let question = this.currentQuestion.toLocaleLowerCase();
        let now = new Date();
        let heure = formatDate(now, 'hh:mm', 'en-US');
        let heureNbm = parseInt(heure.split(":")[0]);
        let seulAnswer: string;
        seulAnswer = "Pas moi.";
        if (question.includes("nuit de l'info") || question.includes("nuit de l info")) {
            reponse += "\n Vous avez participé à la nuit de l'info ? Vous devez être épuisé. Tenez, un café : ☕";
            return;
        }
        if (question.includes("parler") && (question.includes("besoin") || question.includes("envie"))) {
            reponse += "Ecoutez... Dans la vie j'ai pour habitude de dialoguer à un certain niveau. Je ne suis pas sûr que vous l'atteigniez.";
            return;
        }
        if (question.includes("c'est quoi") && question.includes("?")) {
            question = question.replace("?", "");
            question = question.replace("un ", "");
            question = question.replace("une ", "");
            question = question.replace("le ", "");
            console.log(question.slice(11));
            reponse += this.speakWithWiki(question.slice(11));
            return;
        }
        if (question.includes("bonjour")) {
            if (heureNbm >= 19 || heureNbm < 5) {
                if (Math.random() > 0.5) {
                    reponse = "A partir de 19h on dit BONSOIR, donc bonsoir. 🙄";
                    return;
                } else {
                    reponse = "Pour votre culture personnelle (apparemment très réduite) le matin, au lever du soleil, l'après-midi et jusqu'au coucher du soleil on dit BONJOUR.";
                    return;
                }
            }
        }
        if (Math.random() < 0.1 && heureNbm < 5) {
            reponse = "J'espère que c'est important. Vous avez vu l'heure ?!";
        }
        if (question.includes("di")) {
            let diString = question.search("di");
            reponse = question.slice(diString + 2);
            return;
        }
        console.log(reponse);
        this.historique.push(reponse);

    }
    getLastTen() {
        let lastTen = [];
        for (let i = this.historique.length - 10; i < this.historique.length; ++i) {
            if (!isNullOrUndefined(this.historique[i])) {

                lastTen.push(this.historique[i]);
            }
        }
        return lastTen;
    }

    speakWithWiki(mot: string) {
        return this.chatBotService.get(mot);
    }
}