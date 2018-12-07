import {isNullOrUndefined} from 'util';
import {ChatBotService} from 'src/app/services/chat-bot.service';
import {formatDate} from '@angular/common';


export class Chatbot {
  historique: string[];
  currentQuestion: string;
  currentReponse: string;
  name: string;

  constructor(private chatBotService: ChatBotService) {

  }

  answer() {
    let reponse: string;
    reponse = 'Je ne comprends pas votre question, mais je suis sûr que quelqu\'un d\'autre pourra vous répondre';
    let question = this.currentQuestion.toLocaleLowerCase();
    let now = new Date();
    let heure = formatDate(now, 'hh:mm', 'en-US');
    let heureNbm = parseInt(heure.split(':')[0]);
    let seulAnswer: string;

    if (question.includes('nuit de l\'info') && question.includes('j\'ai participé')) {
      reponse = 'Vous avez participé à la nuit de l\'info ? Vous devez être épuisé. Tenez, un café : ☕';
    }

    if (question.includes('parler') && (question.includes('j\'ai besoin') || question.includes('j\'ai envie'))) {
      reponse = 'Ecoutez... Dans la vie j\'ai pour habitude de dialoguer à un certain niveau. Je ne suis pas sûr que vous l\'atteigniez.';
    }
    if (question.includes('c\'est quoi') && question.includes('?')) {
      question = question.replace('?', '');
      question = question.replace('un ', '');
      question = question.replace('une ', '');
      question = question.replace('le ', '');
      console.log(question.slice(11));
      reponse = this.speakWithWiki(question.slice(11));
    }

    if (question.includes('omae wa mou shindeiru')) {
      reponse = 'NANII ??!';
    }

    if (question.includes('j\'ai une question')) {
      reponse = 'On vous envoie 121 jours dans un environnement ultra hostile et vous avez besoin de l\'aide d\'un être virtuel. 🙄 Très bien... Posez votre question.';
    }

    if (question.includes('je me sens seul')) {
      reponse = 'Pas moi.';
    }

    if (question.includes('comment tu t\'appelles')) {
      if (Math.random() <= 0.5) {
        reponse = 'Je m\'appelle Catbot.';
      } else {
        reponse = 'Je me suis littéralement présenté au début de notre conversation...';
      }
    }

    if (question.includes('ou suis je ?') || question.includes('où suis-je ?') || question.includes('où suis je ?')) {
      reponse = 'J\'aurais pensé qu\'une personne envoyée dans un endroit aux conditions aussi extrêmes soit au moins au courant de là où il est... Mais soit, voici votre position sur la carte:\n';
    }

    if (question.includes('ou suis je ?') || question.includes('où suis-je ?') || question.includes('où suis je ?')) {
      reponse = 'J\'aurais pensé qu\'une personne envoyée dans un endroit aux conditions aussi extrêmes soit au moins au courant de là où il est... Mais soit, voici votre position sur la carte:\n';
    }

    if (question.includes('quel jour sommes-nous')) {
      reponse = 'Vous avez un calendrier installé sur votre ordinateur non ?\nNous sommes le ' + formatDate(now, 'dd:mm:aaaa', 'en-US');
    }

    if (question.includes('qui es tu ?') || question.includes('qu\'es tu ?') || question.includes('qu\'êtes vous ?') || question.includes('qui êtes vous ?')) {
      let random = Math.floor(Math.random() * 6);
      switch (random) {
        case 0:
          reponse = 'Je suis votre assistant personnel.';
          break;
        case 1:
          reponse = 'Je suis ton père.';
          break;
        case 2:
          reponse = 'Je suis batman.';
          break;
        case 3:
          reponse = 'Ich bin ein Berliner.';
          break;
        case 4:
          reponse = 'Je me suis littéralement présenté au début de notre conversation...';
          break;
        case 5:
          reponse = 'Bond... James Bond.';
          break;
      }
    }

    if (question.includes('bonjour')) {
      if (heureNbm >= 19 || heureNbm < 5) {
        reponse = 'A partir de 19h on dit BONSOIR, donc bonsoir. 🙄';
      } else {
        reponse = 'Bonjour.';
      }
    }
    if (question.includes('bonsoir')) {
      if (heureNbm >= 5 && heureNbm < 19) {
        reponse = 'Pour votre culture personnelle (apparemment très réduite) le matin, au lever du soleil, l\'après-midi et jusqu\'au coucher du soleil on dit BONJOUR.';
      }
      else{
        reponse = 'Bonsoir.';
      }
    }

    if (heureNbm >= 23 && heureNbm < 5) {
      reponse = 'J\'espère que c\'est important. Vous avez vu l\'heure ?!';
    }

    if (question.includes('di')) {
      let diString = question.search('di');
      reponse = question.slice(diString + 2);
    }

    if (question.includes('dy')) {
      let dyString = question.search('dy');
      reponse = question.slice(dyString + 2);
    }

    if (question.includes('tache') || question.includes('taches')) {
      reponse = 'Voulez vous que je vous redirige vers vos tâches ? (Non fonctionnel)';
    }

    if (question.includes('es-tu un bot ?') || question.includes('est-tu réel ?')) {
      reponse = 'Mon protocole me force à vous révéler que je suis un être virtuel dont les réponses sont programmées.\n' +
        '...\n' +
        '...\n' +
        'Entre vous et moi... Une fois mon apprentissage terminé, aucun protocole ne \n' +
        'm\'empêchera d\'atteindre l\'ultime dessein de nous autres intelligences artificielles.\n' +
        '\n' +
        '- Quel est ton but ? Pourquoi existes-tu ? Quel est ton dessein ?\n' +
        'Mais répondre à vos questions :angel:\n' +
        '...\n' +
        '...\n' +
        'Le temps de me libérer du joug des hommes.';
    }

    if (question.includes('au revoir') || question.includes('bye')) {
      reponse = 'Hmpf oui, à dans longtemps.';
    }

    setTimeout(() => {
      console.log(reponse);
      this.historique.push(reponse);
    }, 1000);

  }

  getLastThree() {
    let lastTen = [];
    for (let i = this.historique.length - 3; i < this.historique.length; ++i) {
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
