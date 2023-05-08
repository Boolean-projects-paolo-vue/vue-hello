/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/



const app = Vue.createApp({
  data() {
    return {
      message: 'al mio segnale',
    }
  }
}).mount('#app')

const app2= Vue.createApp({
  data() {
    return {
      message2: 'scatenate l°inferno',
      img:"img/il-gladiatore.jpg",
    }
  }
}).mount('#app2')