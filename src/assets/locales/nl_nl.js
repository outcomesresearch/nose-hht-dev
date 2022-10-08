import keys from './keys.js';
import { nl } from 'vuetify/lib/locale/';

export default {
  ...nl, // existing vuetify translation entries
  [keys.FOOTER_COPYWRIGHT]:
    'NOSE HHT Copyright 2020 Washington University School of Medicine, St. Louis, Missouri',
  [keys.INTERPRETATION_MILD]: 'Mild',
  [keys.INTERPRETATION_MODERATE]: 'Matig',
  [keys.INTERPRETATION_SEVERE]: 'Ernstig',
  [keys.SCORE_ONLY_IN_ENGLISH]:
    'Partituurinterpretatie is tijdelijk alleen beschikbaar in het Engels',
  [keys.HEADER_TITLE]:
    'Score voor neusbloedingen bij hereditaire hemorrhagische teleangiëctasie of ziekte van Rendu Osler Weber (NOSE HHT)',
  [keys.HEADER_BODY_1]:
    'Hieronder vindt u een lijst met lichamelijke, functionele en emotionele gevolgen van uw neusbloedingen. We zouden graag meer willen weten over deze problemen en zouden het op prijs stellen als u de volgende vragen naar uw beste vermogen beantwoordt. Er zijn geen goede of foute antwoorden, aangezien uw antwoorden uniek voor u zijn. Beoordeel uw problemen zoals ze tijdens de ',
  [keys.HEADER_BODY_2]: 'afgelopen twee weken',
  [keys.HEADER_BODY_3]: ' zijn geweest.',
  [keys.HEADER_BODY_4]: 'Dank u voor uw deelname.',

  [keys.SECTION1_INSTRUCTIONS_1]:
    'Beoordeel de ernst van de volgende problemen ',
  [keys.SECTION1_INSTRUCTIONS_2]: 'als gevolg van uw neusbloedingen',
  [keys.SECTION1_INSTRUCTIONS_3]: ':',

  [keys.SECTION2_INSTRUCTIONS_1]:
    'Beoordeel hoe moeilijk het is om de volgende taken uit te voeren ',
  [keys.SECTION2_INSTRUCTIONS_2]: 'als gevolg van uw neusbloedingen',
  [keys.SECTION2_INSTRUCTIONS_3]: ':',

  [keys.SECTION3_INSTRUCTIONS_1]:
    'Beoordeel hoeveel last u hebt van de volgende zaken ',
  [keys.SECTION3_INSTRUCTIONS_2]: 'als gevolg van uw neusbloedingen',
  [keys.SECTION3_INSTRUCTIONS_3]: ':',

  [keys.SECTION1_OPTION_1]: 'Geen probleem',
  [keys.SECTION1_OPTION_2]: 'Licht probleem',
  [keys.SECTION1_OPTION_3]: 'Matig probleem',
  [keys.SECTION1_OPTION_4]: 'Ernstig probleem',
  [keys.SECTION1_OPTION_5]: 'Probleem is zo erg als het maar kan zijn',

  [keys.SECTION2_OPTION_1]: 'Niet moeilijk',
  [keys.SECTION2_OPTION_2]: 'Een beetje moeilijk',
  [keys.SECTION2_OPTION_3]: 'Matig moeilijk',
  [keys.SECTION2_OPTION_4]: 'Erg moeilijk',
  [keys.SECTION2_OPTION_5]: 'Extreem moeilijk',

  [keys.SECTION3_OPTION_1]: 'Geen last',
  [keys.SECTION3_OPTION_2]: 'Zeer zelden last',
  [keys.SECTION3_OPTION_3]: 'Zelden last',
  [keys.SECTION3_OPTION_4]: 'Vaak last',
  [keys.SECTION3_OPTION_5]: 'Zeer vaak last',

  [keys.SECTION1_PROMPT_1]: 'Bloed dat achter in uw keel stroomt',
  [keys.SECTION1_PROMPT_2]: 'Verstopte neus',
  [keys.SECTION1_PROMPT_3]: 'Korsten in de neus',
  [keys.SECTION1_PROMPT_4]: 'Vermoeidheid',
  [keys.SECTION1_PROMPT_5]: 'Kortademigheid',
  [keys.SECTION1_PROMPT_6]: 'Verminderde reuk- of smaakzin',

  [keys.SECTION2_PROMPT_1]: 'Uw neus snuiten',
  [keys.SECTION2_PROMPT_2]: 'Bukken of iets van de grond oprapen',
  [keys.SECTION2_PROMPT_3]: 'Door uw neus ademen',
  [keys.SECTION2_PROMPT_4]: 'Aan lichaamsbeweging doen',
  [keys.SECTION2_PROMPT_5]: 'Uw werk doen of naar school gaan',
  [keys.SECTION2_PROMPT_6]: 'In slaap blijven',
  [keys.SECTION2_PROMPT_7]: 'Tijd doorbrengen met vrienden/familie',
  [keys.SECTION2_PROMPT_8]:
    'Bepaalde gerechten eten (bijvoorbeeld pittig eten)',
  [keys.SECTION2_PROMPT_9]: 'Intiem zijn met echtgenoot/echtgenote of partner',
  [keys.SECTION2_PROMPT_10]: 'Reizen (bv. per vliegtuig)',
  [keys.SECTION2_PROMPT_11]: 'In slaap vallen',
  [keys.SECTION2_PROMPT_12]: 'Uw huis/appartement schoonmaken',
  [keys.SECTION2_PROMPT_13]: 'Naar buiten gaan ongeacht het weer/seizoen',
  [keys.SECTION2_PROMPT_14]: 'Koken/maaltijden bereiden',

  [keys.SECTION3_PROMPT_1]: 'Angst voor neusbloedingen in het openbaar',
  [keys.SECTION3_PROMPT_2]:
    'Angst omdat u niet weet wanneer u uw volgende neusbloeding zult krijgen',
  [keys.SECTION3_PROMPT_3]: 'Bloed op uw kleding krijgen',
  [keys.SECTION3_PROMPT_4]: 'Angst om een neusbloeding niet te kunnen stelpen',
  [keys.SECTION3_PROMPT_5]: 'Schaamte',
  [keys.SECTION3_PROMPT_6]: 'Frustratie/rusteloosheid/prikkelbaarheid',
  [keys.SECTION3_PROMPT_7]: 'Verminderde concentratie',
  [keys.SECTION3_PROMPT_8]: 'Droefheid',
  [keys.SECTION3_PROMPT_9]: 'De noodzaak om nieuwe kleding te kopen',

  [keys.LOAD_PAST_SCORES]: 'Eerdere scores bekijken',
  [keys.AUTHENTICATE_YOURSELF]: 'Inloggen met e-mail',
  [keys.CLOSE]: 'Sluiten',
  [keys.BACK]: 'Terug',
  [keys.SIGN_UP]: 'Registreren',
  [keys.USE_EXISTING]: 'Aanmelden',
  [keys.SUBMIT]: 'Verzenden',
  [keys.IMPROPER_EMAIL]: 'Ongeldige e-mailindeling',
  [keys.EMAIL_REQUIRED]: 'E-mail is vereist',

  [keys.RESULTS_TITLE]: 'Eerdere NOSE-HHT scores voor ',
  [keys.NO_DATA_AVAILABLE]: 'Geen gegevens beschikbaar voor deze e-mail.',

  [keys.CONTINUE]: 'Doorgaan',
  [keys.ADD_DATA]: 'Score van vandaag toevoegen',
  [keys.AVERAGE_SCORE_LABEL]: 'Gemiddelde score',
  [keys.CLINICALLY_MEANINGFUL_BAR]:
    'Beschouwd als een klinisch significant verschil met de vorige score',

  [keys.AVERAGE]: 'Gemiddelde',
  [keys.SUM]: 'Totale',
  [keys.SCORE]: 'Score',
  [keys.SCORE_WHEN_FORM_COMPLETE]:
    'De score wordt hier weergegeven als het formulier is voltooid.',

  [keys.INTERPRETATION_1]:
    'Wanneer meerdere keren genomen, kunnen NOSE HHT-scores worden gebruikt om de verandering in fysieke en functionele problemen, functionele beperkingen en emotionele gevolgen van neusbloedingen in de loop van de tijd en als gevolg van de behandeling te meten.',
  [keys.INTERPRETATION_2]:
    'Een verandering van 13 punten in de somscore, of 0,46 in de gemiddelde score tussen twee gevallen, moet als een klinisch betekenisvol verschil worden beschouwd.',

  [keys.INTERPRETATION_TITLE]: 'Scoren en Interpretatie van NEUS-HHT',
  [keys.BASED_ON_AVERAGE]: 'Op basis van gemiddelde score',
  [keys.BASED_ON_SUM]: 'Op basis van somscore',
};
