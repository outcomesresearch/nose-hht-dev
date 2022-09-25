import keys from './keys.js';
import { es } from 'vuetify/lib/locale/';

export default {
  ...es, // existing vuetify translation entries
  [keys.FOOTER_COPYWRIGHT]:
    'NOSE HHT Copyright 2020 Washington University School of Medicine, St. Louis, Missouri',
  [keys.INTERPRETATION_MILD]: 'Leve',
  [keys.INTERPRETATION_MODERATE]: 'Moderata',
  [keys.INTERPRETATION_SEVERE]: 'Grave',
  [keys.SCORE_ONLY_IN_ENGLISH]:
    'La interpretación de la puntuación solo está disponible temporalmente en inglés',
  [keys.HEADER_TITLE]:
    'Escala de las consecuencias nasales de la epistaxis en la telangiectasia hemorrágica hereditaria (NOSE HHT)',
  [keys.HEADER_BODY_1]:
    'A continuación, encontrará una serie de consecuencias físicas, funcionales y emocionales de sus sangrados de nariz. Nos gustaría saber más detalles sobre estos problemas y le agradeceríamos que nos conteste a las siguientes preguntas lo mejor que pueda. No hay respuestas correctas ni incorrectas porque son exclusivamente suyas. Califique los problemas tal y como se hayan presentado en las ',
  [keys.HEADER_BODY_2]: 'dos últimas semanas.',
  [keys.HEADER_BODY_3]: '',
  [keys.HEADER_BODY_4]: 'Gracias por su participación.',

  [keys.SECTION1_INSTRUCTIONS_1]:
    'Califique la gravedad de los siguientes problemas ',
  [keys.SECTION1_INSTRUCTIONS_2]: 'como consecuencia de sus sangrados de nariz',
  [keys.SECTION1_INSTRUCTIONS_3]: ':',

  [keys.SECTION2_INSTRUCTIONS_1]:
    'Califique la dificultad con la que lleva a cabo las siguientes tareas ',
  [keys.SECTION2_INSTRUCTIONS_2]: 'como consecuencia de sus sangrados de nariz',
  [keys.SECTION2_INSTRUCTIONS_3]: ':',

  [keys.SECTION3_INSTRUCTIONS_1]:
    'Califique hasta qué punto le molesta lo siguiente ',
  [keys.SECTION3_INSTRUCTIONS_2]: 'como consecuencia de sus sangrados de nariz',
  [keys.SECTION3_INSTRUCTIONS_3]: ':',

  [keys.SECTION1_OPTION_1]: 'Ningún problema',
  [keys.SECTION1_OPTION_2]: 'Problema leve',
  [keys.SECTION1_OPTION_3]: 'Problema moderato',
  [keys.SECTION1_OPTION_4]: 'Problema considerable',
  [keys.SECTION1_OPTION_5]: 'No podría ser peor de lo que es',

  [keys.SECTION2_OPTION_1]: 'Ninguna dificultad',
  [keys.SECTION2_OPTION_2]: 'Dificultad leve',
  [keys.SECTION2_OPTION_3]: 'Dificultad moderada',
  [keys.SECTION2_OPTION_4]: 'Dificultad grave',
  [keys.SECTION2_OPTION_5]: 'Dificultad total',

  [keys.SECTION3_OPTION_1]: 'No me molesta',
  [keys.SECTION3_OPTION_2]: 'Me molesta en muy raras ocasiones',
  [keys.SECTION3_OPTION_3]: 'Me molesta en raras ocasiones',
  [keys.SECTION3_OPTION_4]: 'Me molesta a menudo',
  [keys.SECTION3_OPTION_5]: 'Me molesta muy a menudo',

  [keys.SECTION1_PROMPT_1]:
    'Sangre que baja por la parte posterior de la garganta',
  [keys.SECTION1_PROMPT_2]: 'Nariz tapada o congestionada',
  [keys.SECTION1_PROMPT_3]: 'Costras en la nariz',
  [keys.SECTION1_PROMPT_4]: 'Fatiga',
  [keys.SECTION1_PROMPT_5]: 'Dificultad para respirar',
  [keys.SECTION1_PROMPT_6]: 'Disminución del sentido del olfato o del gusto',

  [keys.SECTION2_PROMPT_1]: 'Sonarse la nariz',
  [keys.SECTION2_PROMPT_2]: 'Agacharse o recoger algo del suelo',
  [keys.SECTION2_PROMPT_3]: 'Respirar por la nariz',
  [keys.SECTION2_PROMPT_4]: 'Hacer ejercicio',
  [keys.SECTION2_PROMPT_5]: 'Trabajar en su puesto de trabajo (o ir a clase)',
  [keys.SECTION2_PROMPT_6]: 'Permanecer dormido/a',
  [keys.SECTION2_PROMPT_7]: 'Disfrutar de momentos con sus familiares o amigos',
  [keys.SECTION2_PROMPT_8]: 'Comer ciertos alimentos (p. ej., picantes)',
  [keys.SECTION2_PROMPT_9]: 'Tener relaciones íntimas con su cónyuge o pareja',
  [keys.SECTION2_PROMPT_10]: 'Viajar (p. ej., en avión)',
  [keys.SECTION2_PROMPT_11]: 'Quedarse dormido/a',
  [keys.SECTION2_PROMPT_12]: 'Limpiar la casa o el apartamento',
  [keys.SECTION2_PROMPT_13]: 'Salir afuera sin importar el clima o la estación',
  [keys.SECTION2_PROMPT_14]: 'Cocinar o preparar comidas',

  [keys.SECTION3_PROMPT_1]: 'Miedo a que me sangre la nariz en público',
  [keys.SECTION3_PROMPT_2]:
    'Miedo de no saber cuándo será el próximo sangrado de nariz',
  [keys.SECTION3_PROMPT_3]: 'Mancharse de sangre la ropa',
  [keys.SECTION3_PROMPT_4]: 'Miedo a no poder detener un sangrado de nariz',
  [keys.SECTION3_PROMPT_5]: 'Vergüenza',
  [keys.SECTION3_PROMPT_6]: 'Frustración, desasosiego o irritabilidad',
  [keys.SECTION3_PROMPT_7]: 'Menor concentración',
  [keys.SECTION3_PROMPT_8]: 'Tristeza',
  [keys.SECTION3_PROMPT_9]: 'La necesidad de comprar ropa nueva',

  [keys.LOAD_PAST_SCORES]: 'Ver puntuaciones pasadas',
  [keys.AUTHENTICATE_YOURSELF]: 'Iniciar sesión con dirección de email',
  [keys.CLOSE]: 'Cerrar',
  [keys.BACK]: 'Atrás',
  [keys.SIGN_UP]: 'Registrarse',
  [keys.USE_EXISTING]: 'Iniciar sesión',
  [keys.SUBMIT]: 'Enviar',
  [keys.IMPROPER_EMAIL]: 'Formato de email no válido',

  [keys.RESULTS_TITLE]: 'Puntuaciones Pasadas de HHT de NOSE para ',
  [keys.NO_DATA_AVAILABLE]:
    'No hay datos disponibles para este correo electrónico.',

  [keys.CONTINUE]: 'Continuar',
  [keys.ADD_DATA]: 'Añadir puntuación de hoy',
  [keys.AVERAGE_SCORE_LABEL]: 'Puntuación media',
  [keys.CLINICALLY_MEANINGFUL_BAR]:
    'Se considera una diferencia clínicamente significativa con respecto a la puntuación anterior',

  [keys.AVERAGE]: 'Media',
  [keys.SUM]: 'Total',
  [keys.SCORE]: 'Puntuación',
  [keys.SCORE_WHEN_FORM_COMPLETE]:
    'La puntuación se mostrará aquí cuando el formulario esté completo.',

  [keys.INTERPRETATION_1]:
    'Cuando se toman varias veces, las puntuaciones de HHT de NOSE se pueden usar para medir el cambio en los problemas físicos y funcionales, las limitaciones funcionales y las consecuencias emocionales de las hemorragias nasales a lo largo del tiempo y como resultado del tratamiento.',
  [keys.INTERPRETATION_2]:
    'Un cambio de 13 puntos en la puntuación total o 0,46 en la puntuación media entre dos instancias debe considerarse una diferencia clínicamente significativa.',

  [keys.INTERPRETATION_TITLE]: 'Puntuación e interpretación de HHT de NOSE',
  [keys.BASED_ON_AVERAGE]: 'En base a la puntuación media',
  [keys.BASED_ON_SUM]: 'En base a la puntuación total',
};
