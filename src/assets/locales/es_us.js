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
    'Puntuación de los resultados nasales de la epistaxis provocada por la telangiectasia hemorrágica hereditaria (NOSE HHT)',
  [keys.HEADER_BODY_1]:
    'A continuación le presentamos una lista con las consecuencias físicas, funcionales y emocionales que pueden resultar de los sangrados nasales. Quisiéramos saber más acerca de estos problemas y le agradeceríamos que contestara las siguientes preguntas lo mejor que pueda. No hay respuestas correctas ni incorrectas, ya que sus respuestas son únicas para su situación. Califique cómo han sido sus problemas durante las',
  [keys.HEADER_BODY_2]: 'últimas dos semanas.',
  [keys.HEADER_BODY_3]: '',
  [keys.HEADER_BODY_4]: 'Le agradecemos su participación.',
  [keys.SECTION1_INSTRUCTIONS_1]:
    'Para calificar el grado de gravedad de los siguientes problemas',
  [keys.SECTION1_INSTRUCTIONS_2]: ' provocados por los sangrados nasales',
  [keys.SECTION1_INSTRUCTIONS_3]: ':',

  [keys.SECTION2_INSTRUCTIONS_1]:
    'Califique lo difícil que le ha resultado hacer lo siguiente ',
  [keys.SECTION2_INSTRUCTIONS_2]: 'debido a los sangrados nasales',
  [keys.SECTION2_INSTRUCTIONS_3]: ':',

  [keys.SECTION3_INSTRUCTIONS_1]:
    'Califique cuánto le ha molestado lo siguiente ',
  [keys.SECTION3_INSTRUCTIONS_2]: 'debido a los sangrados nasales',
  [keys.SECTION3_INSTRUCTIONS_3]: ':',

  [keys.SECTION1_OPTION_1]: 'Ningún problema',
  [keys.SECTION1_OPTION_2]: 'Un problema leve',
  [keys.SECTION1_OPTION_3]: 'Un problema moderato',
  [keys.SECTION1_OPTION_4]: 'Un problema considerable',
  [keys.SECTION1_OPTION_5]: 'El problema no podría ser peor',

  [keys.SECTION2_OPTION_1]: 'Ninguna dificultad',
  [keys.SECTION2_OPTION_2]: 'Una dificultad leve',
  [keys.SECTION2_OPTION_3]: 'Una dificultad moderada',
  [keys.SECTION2_OPTION_4]: 'Una dificultad considerable',
  [keys.SECTION2_OPTION_5]: 'Una dificultad extrema',

  [keys.SECTION3_OPTION_1]: 'No me ha molestado',
  [keys.SECTION3_OPTION_2]: 'Muy raras veces me ha molestado',
  [keys.SECTION3_OPTION_3]: 'Raras veces me ha molestado',
  [keys.SECTION3_OPTION_4]: 'Me ha molestado con frecuencia',
  [keys.SECTION3_OPTION_5]: 'Me ha molestado con mucha frecuencia',

  [keys.SECTION1_PROMPT_1]:
    'Sangre de la parte posterior de la nariz que le corre a través de la garganta',
  [keys.SECTION1_PROMPT_2]: 'Congestión nasal/nariz tapada',
  [keys.SECTION1_PROMPT_3]: 'Costras nasales',
  [keys.SECTION1_PROMPT_4]: 'Fatiga',
  [keys.SECTION1_PROMPT_5]: 'Dificultad para respirar',
  [keys.SECTION1_PROMPT_6]: 'Disminución del sentido del olfato/gusto',

  [keys.SECTION2_PROMPT_1]: 'Sonarse la nariz',
  [keys.SECTION2_PROMPT_2]: 'Agacharse/recoger algo del suelo',
  [keys.SECTION2_PROMPT_3]: 'Respirar por la nariz',
  [keys.SECTION2_PROMPT_4]: 'Hacer ejercicios',
  [keys.SECTION2_PROMPT_5]: 'Hacer su trabajo (empleo o estudios)',
  [keys.SECTION2_PROMPT_6]: 'Permanecer dormido',
  [keys.SECTION2_PROMPT_7]: 'Disfrutar el tiempo con sus amigos/su familia',
  [keys.SECTION2_PROMPT_8]:
    'Comer ciertos alimentos (p. ej., comidas picantes)',
  [keys.SECTION2_PROMPT_9]: 'Tener intimidad con su cónyuge o pareja',
  [keys.SECTION2_PROMPT_10]: 'Viajar (i.e., en avión)',
  [keys.SECTION2_PROMPT_11]: 'Dormirse',
  [keys.SECTION2_PROMPT_12]: 'Limpiar su casa/apartamento',
  [keys.SECTION2_PROMPT_13]:
    'Salir al aire libre sin que le importe el estado del tiempo/la temporada',
  [keys.SECTION2_PROMPT_14]: 'Cocinar/preparar comidas',

  [keys.SECTION3_PROMPT_1]: 'Miedo a tener sangrados nasales en público',
  [keys.SECTION3_PROMPT_2]:
    'Miedo de no saber cuándo volverá a tener una hemorragia nasal',
  [keys.SECTION3_PROMPT_3]: 'Mancharse la ropa de sangre',
  [keys.SECTION3_PROMPT_4]: 'Miedo a no poder detener un sangrado nasal',
  [keys.SECTION3_PROMPT_5]: 'Vergüenza',
  [keys.SECTION3_PROMPT_6]: 'Frustración/nerviosismo/irritabilidad',
  [keys.SECTION3_PROMPT_7]: 'Menos capacidad para concentrarse',
  [keys.SECTION3_PROMPT_8]: 'Tristeza',
  [keys.SECTION3_PROMPT_9]: 'Tener que comprar ropa nueva',

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
    'Un cambio de 13 puntos en la puntuación total o 0.46 en la puntuación media entre dos instancias debe considerarse una diferencia clínicamente significativa.',

  [keys.INTERPRETATION_TITLE]: 'Puntuación e interpretación de HHT de NOSE',
  [keys.BASED_ON_AVERAGE]: 'En base a la puntuación media',
  [keys.BASED_ON_SUM]: 'En base a la puntuación total',
};
