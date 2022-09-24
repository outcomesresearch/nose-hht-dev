import keys from './keys.js';
import { it } from 'vuetify/lib/locale/';

export default {
  ...it, // existing vuetify translation entries
  [keys.FOOTER_COPYWRIGHT]:
    'NOSE HHT Copyright 2020 Washington University School of Medicine, St. Louis, Missouri',
  [keys.INTERPRETATION_MILD]: 'Lieve',
  [keys.INTERPRETATION_MODERATE]: 'Moderato',
  [keys.INTERPRETATION_SEVERE]: 'Grave',
  [keys.SCORE_ONLY_IN_ENGLISH]:
    "L'interpretazione della punteggio è temporaneamente disponibile solo in inglese",
  [keys.HEADER_TITLE]:
    "Punteggio dell'esito nasale relativo all’epistassi nella teleangectasia emorragica ereditaria (NOSE HHT)",
  [keys.HEADER_BODY_1]:
    'Di seguito troverà un elenco delle conseguenze fisiche, funzionali ed emotive dei Suoi sanguinamenti nasali. Vorremmo approfondire la nostra conoscenza di questi problemi e per questo Le chiediamo di rispondere alle seguenti domande al meglio delle Sue possibilità. Non ci sono risposte giuste o sbagliate poiché le risposte sono personali. Valuti i Suoi problemi in base a come si sono manifestati nelle ',
  [keys.HEADER_BODY_2]: 'ultime due settimane.',
  [keys.HEADER_BODY_3]: '',
  [keys.HEADER_BODY_4]: 'Grazie per la partecipazione.',

  [keys.SECTION1_INSTRUCTIONS_1]: 'Valuti la gravità dei seguenti problemi ',
  [keys.SECTION1_INSTRUCTIONS_2]: 'dovuti ai Suoi sanguinamenti nasali',
  [keys.SECTION1_INSTRUCTIONS_3]: ':',

  [keys.SECTION2_INSTRUCTIONS_1]:
    'Valuti la difficoltà di svolgimento delle seguenti attività ',
  [keys.SECTION2_INSTRUCTIONS_2]: 'a causa dei Suoi sanguinamenti nasali',
  [keys.SECTION2_INSTRUCTIONS_3]: ':',

  [keys.SECTION3_INSTRUCTIONS_1]:
    'Valuti quanto è infastidito/a da quanto segue ',
  [keys.SECTION3_INSTRUCTIONS_2]: 'a causa dei Suoi sanguinamenti nasali',
  [keys.SECTION3_INSTRUCTIONS_3]: ':',

  [keys.SECTION1_OPTION_1]: 'Problema assente',
  [keys.SECTION1_OPTION_2]: 'Problema lieve',
  [keys.SECTION1_OPTION_3]: 'Problema moderato',
  [keys.SECTION1_OPTION_4]: 'Problema grave',
  [keys.SECTION1_OPTION_5]: 'Il peggior problema possibile',

  [keys.SECTION2_OPTION_1]: 'Nessuna difficoltà',
  [keys.SECTION2_OPTION_2]: 'Difficoltà lieve',
  [keys.SECTION2_OPTION_3]: 'Difficoltà moderata',
  [keys.SECTION2_OPTION_4]: 'Difficoltà grave',
  [keys.SECTION2_OPTION_5]: 'Difficoltà totale',

  [keys.SECTION3_OPTION_1]: 'Per niente infastidito/a',
  [keys.SECTION3_OPTION_2]: 'Molto raramente infastidito/a',
  [keys.SECTION3_OPTION_3]: 'Raramente infastidito/a',
  [keys.SECTION3_OPTION_4]: 'Spesso infastidito/a',
  [keys.SECTION3_OPTION_5]: 'Molto spesso infastidito/a',

  [keys.SECTION1_PROMPT_1]: 'Sangue che cola giù per la gola',
  [keys.SECTION1_PROMPT_2]: 'Naso chiuso/tappato',
  [keys.SECTION1_PROMPT_3]: 'Croste nasali',
  [keys.SECTION1_PROMPT_4]: 'Affaticamento',
  [keys.SECTION1_PROMPT_5]: 'Respiro corto',
  [keys.SECTION1_PROMPT_6]: 'Olfatto/Gusto ridotto',

  [keys.SECTION2_PROMPT_1]: 'Soffiarsi il naso',
  [keys.SECTION2_PROMPT_2]: 'Piegarsi/raccogliere qualcosa da terra',
  [keys.SECTION2_PROMPT_3]: 'Respirare dal naso',
  [keys.SECTION2_PROMPT_4]: 'Fare esercizio fisico',
  [keys.SECTION2_PROMPT_5]: 'Svolgere il proprio lavoro (o studiare)',
  [keys.SECTION2_PROMPT_6]: 'Continuare a dormire',
  [keys.SECTION2_PROMPT_7]: 'Divertirsi con gli amici/con la famiglia',
  [keys.SECTION2_PROMPT_8]: 'Mangiare alcuni cibi (ad es. piccanti)',
  [keys.SECTION2_PROMPT_9]:
    'Avere momenti di intimità con il/la proprio/a coniuge/partner',
  [keys.SECTION2_PROMPT_10]: 'Viaggiare (ad es. in aereo)',
  [keys.SECTION2_PROMPT_11]: 'Addormentarsi',
  [keys.SECTION2_PROMPT_12]: 'Pulire la casa/l’appartamento',
  [keys.SECTION2_PROMPT_13]:
    'Uscire all’aperto nonostante le condizioni meteorologiche/la stagione',
  [keys.SECTION2_PROMPT_14]: 'Cucinare/preparare i pasti',

  [keys.SECTION3_PROMPT_1]: 'Timore di sanguinamenti nasali in pubblico ',
  [keys.SECTION3_PROMPT_2]:
    'Paura di non sapere quando sarà la tua prossima sanguinamento nasale',
  [keys.SECTION3_PROMPT_3]: 'Sporcare di sangue i vestiti',
  [keys.SECTION3_PROMPT_4]:
    'Timore di non riuscire a fermare il sanguinamento nasale',
  [keys.SECTION3_PROMPT_5]: 'Imbarazzo',
  [keys.SECTION3_PROMPT_6]: 'Frustrazione/irrequietezza/irritabilità',
  [keys.SECTION3_PROMPT_7]: 'Concentrazione ridotta',
  [keys.SECTION3_PROMPT_8]: 'Tristezza',
  [keys.SECTION3_PROMPT_9]: 'Necessità di comprare vestiti nuovi',

  [keys.AVERAGE]: 'Medio',
  [keys.SUM]: 'Totale',
  [keys.SCORE]: 'Punteggio',
  [keys.SCORE_WHEN_FORM_COMPLETE]:
    'Il punteggio verrà visualizzato qui quando il modulo è completo.',

  [keys.INTERPRETATION_1]:
    'Se presi più volte, i punteggi NOSE HHT possono essere utilizzati per misurare il cambiamento nei problemi fisici e funzionali, le limitazioni funzionali e le conseguenze emotive delle epistassi nel tempo e come risultato del trattamento.',
  [keys.INTERPRETATION_2]:
    'Una variazione di 13 punti nel punteggio della somma, o 0,46 nel punteggio medio tra due casi, dovrebbe essere considerata una differenza clinicamente.',

  [keys.INTERPRETATION_TITLE]: 'Punteggio e interpretazione del NOSE HHT',
  [keys.BASED_ON_AVERAGE]: 'In base al punteggio medio',
  [keys.BASED_ON_SUM]: 'in base al punteggio totale',
};
