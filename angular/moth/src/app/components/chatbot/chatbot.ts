import { isNullOrUndefined } from 'util';
import { ChatBotService } from 'src/app/services/chat-bot.service';
import { formatDate } from '@angular/common';


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
            reponse = "Vous avez participé à la nuit de l'info ? Vous devez être épuisé. Tenez, un café : ☕";
        }
        if (question.includes("parler") && (question.includes("besoin") || question.includes("envie"))) {
            reponse = "Ecoutez... Dans la vie j'ai pour habitude de dialoguer à un certain niveau. Je ne suis pas sûr que vous l'atteigniez.";
        }
        if (question.includes("c'est quoi") && question.includes("?")) {
            question = question.replace("?", "");
            question = question.replace("un ", "");
            question = question.replace("une ", "");
            question = question.replace("le ", "");
            console.log(question.slice(11));
            reponse = this.speakWithWiki(question.slice(11));
        }
        if (question.includes("j'ai une question")) {
            reponse = "On vous envoie 121 jours dans un environnement ultra hostile et vous avez besoin de l'aide d'un être virtuel. 🙄 Très bien... Posez votre question."
        }

        if (question.includes("Ou suis je ?") || question.includes("Où-suis-je ?") || question.includes("Où suis je ?")) {
            reponse = "J'aurais pensé qu'une personne envoyée dans un endroit aux conditions aussi extrêmes soit au moins au courant de là où il est..."
        }
        if (question.includes("Qui es tu ?") || question.includes("Qu'es tu ?") || question.includes("Qu'êtes vous ?") || question.includes("Qui êtes vous ?")) {
            reponse = "Je suis votre assistant persontnel.";
            "Je suis ton père."
            "Je suis batman."
            "Ich bin ein Berliner."
            "Je me suis littéralement présenté au début de notre conversation..."
            "Bond... James Bond."
        }
        if (question.includes("bonjour")) {
            if (heureNbm >= 19 || heureNbm < 5) {
                if (Math.random() > 0.5) {
                    reponse = "A partir de 19h on dit BONSOIR, donc bonsoir. 🙄";
                } else {
                    reponse = "Pour votre culture personnelle (apparemment très réduite) le matin, au lever du soleil, l'après-midi et jusqu'au coucher du soleil on dit BONJOUR.";
                }
            }
        }
        if (Math.random() < 0.1 && heureNbm < 5) {
            reponse = "J'espère que c'est important. Vous avez vu l'heure ?!";
        }
        if (question.includes("di")) {
            let diString = question.search("di");
            reponse = question.slice(diString + 2);
        }
        if (question.includes("dy")) {
            let dyString = question.search("dy");
            reponse = question.slice(dyString + 2);
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