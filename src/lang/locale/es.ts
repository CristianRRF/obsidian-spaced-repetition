// Español

export default {
    // flashcard-modal.tsx
    DECKS: "Mazos",
    DUE_CARDS: "Tarjetas Repasadas",
    NEW_CARDS: "Tarjetas Nuevas",
    TOTAL_CARDS: "Tarjetas Totales",
    EDIT_LATER: "Editar más tarde",
    RESET_CARD_PROGRESS: "Reiniciar progreso de las tarjetas",
    HARD: "Difícil",
    GOOD: "Aceptable",
    EASY: "Fácil",
    SHOW_ANSWER: "Mostrar Respuesta",
    CARD_PROGRESS_RESET: "El progreso de las tarjetas ha sido reiniciado.",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Abrir nota para repasarla",
    REVIEW_CARDS: "Repasar flashcards",
    REVIEW_EASY_FILE_MENU: "Valoración: Fácil",
    REVIEW_GOOD_FILE_MENU: "Valoración: Aceptable",
    REVIEW_HARD_FILE_MENU: "Valoración: Difícil",
    REVIEW_NOTE_EASY_CMD: "Evaluar nota como fácil",
    REVIEW_NOTE_GOOD_CMD: "Evaluar nota como aceptable",
    REVIEW_NOTE_HARD_CMD: "Evaluar nota como difícil",
    REVIEW_CARDS_IN_NOTE: "Repasar flashcards de esta nota",
    CRAM_CARDS_IN_NOTE: "Estudiar flashcards de esta nota.",
    REVIEW_ALL_CARDS: "Repasar flashcards de todas las notas",
    VIEW_STATS: "Ver estadísticas",
    STATUS_BAR: "Estado: ${dueNotesCount} nota(s), ${dueFlashcardsCount} tarjeta(s) repasadas",
    SYNC_TIME_TAKEN: "Hora de sincronización ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "La nota está en una carpeta ignorada (revisa los ajustes).",
    PLEASE_TAG_NOTE: "Etiqueta la nota correctamente para repasarla (en ajustes).",
    RESPONSE_RECEIVED: "Respuesta recibida.",
    NO_DECK_EXISTS: "No existe ningún mazo llamado ${deckName}",
    ALL_CAUGHT_UP: "Has repasado todas las tarjetas :D.",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} día(s)",
    MONTHS_STR_IVL: "${interval} mes(es)",
    YEARS_STR_IVL: "${interval} año(s)",
    DAYS_STR_IVL_MOBILE: "${interval}d",
    MONTHS_STR_IVL_MOBILE: "${interval}m",
    YEARS_STR_IVL_MOBILE: "${interval}a",

    // settings.ts
    SETTINGS_HEADER: "Repetición Espaciada Plugin - Ajustes",
    CHECK_WIKI: 'Para más información, accede a <a href="${wiki_url}">wiki</a>.',
    FOLDERS_TO_IGNORE: "Carpetas a ignorar",
    FOLDERS_TO_IGNORE_DESC: "Introduce las rutas de las carpetas separadas por saltos de línea. Ejemplo: Meta/Scripts",
    FLASHCARDS: "Flashcards",
    FLASHCARD_EASY_LABEL: "Texto del botón 'Fácil'",
    FLASHCARD_GOOD_LABEL: "Texto del botón 'Aceptable'",
    FLASHCARD_HARD_LABEL: "Texto del botón 'Difícil'",
    FLASHCARD_EASY_DESC: 'Personaliza la etiqueta del botón "Fácil"',
    FLASHCARD_GOOD_DESC: 'Personaliza la etiqueta del botón "Aceptable"',
    FLASHCARD_HARD_DESC: 'Personaliza la etiqueta del botón "Difícil"',
    FLASHCARD_TAGS: "Etiquetas Flashcard",
    FLASHCARD_TAGS_DESC:
        "Introduce las etiquetas separadas por espacios o saltos de línea, es decir: #flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "Convertir las carpetas en mazos y sub-mazos?",
    CONVERT_FOLDERS_TO_DECKS_DESC: "Esta es una alternativa a la opción de etiquetas Flashcard anterior.",
    INLINE_SCHEDULING_COMMENTS:
        "¿Guardar el comentario de la fecha de repaso en la última línea de la flashcard?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "Activar esto hará que los comentarios HTML no interrumpan el formato de la lista.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "¿Ocultar tarjetas hermanas hasta el siguiente día?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Las tarjetas hermanas son las que se han generado desde el mismo texto de la tarjeta. (cloze deletions)",
    SHOW_CARD_CONTEXT: "¿Mostrar contexto en las tarjetas?",
    SHOW_CARD_CONTEXT_DESC: "Ejemplo: Título > Encabezado 1 > Sub-encabezado 1 > ... > Sub-encabezado 'n'.",
    CARD_MODAL_HEIGHT_PERCENT: "Porcentaje de altura de las flashcards",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Debe configurarse al 100% en dispositivos móviles o si tienes imágenes muy grandes",
    RESET_DEFAULT: "Reiniciar ajustes",
    CARD_MODAL_WIDTH_PERCENT: "Porcentaje de anchura de las Flashcards",
    FILENAME_OR_OPEN_FILE: "¿Mostrar el nombre del archivo en lugar de 'Editar más tarde' durantee el repaso de tarjetas?",
    RANDOMIZE_CARD_ORDER: "¿Aleatorizar el orden de las cartas durante el repaso?",
    DISABLE_CLOZE_CARDS: "¿Desactivar tarjetas cloze?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "¿Convertir ==resaltados== en clozes?",
    CONVERT_BOLD_TEXT_TO_CLOZES: "¿Convertir **texto en negrita** en clozes?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "¿Convertir {{corchetes}} en clozes?",
    INLINE_CARDS_SEPARATOR: "Separador de flashcards en la misma línea",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Ten en cuenta que después de cambiar esto, deberás editar manualmente las tarjetas existentes.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Separador para flashcards reversibles en la misma línea",
    MULTILINE_CARDS_SEPARATOR: "Separador de flashcards multilínea",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Separador de flashcard multilínea reversibles",
    NOTES: "Notas",
    TAGS_TO_REVIEW: "Etiquetas para repasar",
    TAGS_TO_REVIEW_DESC: "Introduce las etiquetas separadas por espacios o saltos de línea. Ejemplo: #repaso #etiqueta2 #etiqueta3.",
    OPEN_RANDOM_NOTE: "Abre una nota al azar para repasarla",
    OPEN_RANDOM_NOTE_DESC: "Cuando desactivas esto, las notas se ordenan por importancia (Ranking de página).",
    AUTO_NEXT_NOTE: "Abre la siguiente nota automáticamente después de un repaso",
    DISABLE_FILE_MENU_REVIEW_OPTIONS:
        "Deshabilite las opciones de valoración en el menú de archivo, es decir, Valoración: Fácil Aceptable Difícil",
    DISABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "Después de deshabilitarlo, puedes valorar la dificultad de las tarjetas usando las teclas de acceso rápido. Recarga Obsidian después de cambiar esto.",
    MAX_N_DAYS_REVIEW_QUEUE: "Número máximo de días visibles en el panel derecho",
    MIN_ONE_DAY: "El número de días debe ser al menos de 1.",
    VALID_NUMBER_WARNING: "Por favor, introduce un número válido.",
    ALGORITHM: "Algoritmo",
    CHECK_ALGORITHM_WIKI:
        'Para más información, accede a <a href="${algo_url}">algorithm implementation</a>.',
    BASE_EASE: "Dificultad base",
    BASE_EASE_DESC: "mínimo = 130, lo preferible es 250 aproximadamente.",
    BASE_EASE_MIN_WARNING: "La dificultad base debe ser al menos de 130.",
    LAPSE_INTERVAL_CHANGE: "Cambio de intervalo cuando valoras una tarjeta/nota como difícil",
    LAPSE_INTERVAL_CHANGE_DESC: "NuevoIntervalo = AnteriorIntervalo * CambioIntervalo / 100.",
    EASY_BONUS: "Bonificación de aprendizaje",
    EASY_BONUS_DESC:
        "La bonificación de aprendizaje te permite establecer la diferencia en los intervalos entre las respuestas Aceptable y Fácil en una tarjeta/nota (minimum = 100%).",
    EASY_BONUS_MIN_WARNING: "La bonificación de aprendizaje debería ser al menos de 100.",
    MAX_INTERVAL: "Intervalo Máximo",
    MAX_INTERVAL_DESC: "Te permite establecer un límite superior en el intervalo. Por defecto son 100 años.",
    MAX_INTERVAL_MIN_WARNING: "El intervalo máximo debería ser de al menos 1 día.",
    MAX_LINK_CONTRIB: "Contribución máxima de los enlaces",
    MAX_LINK_CONTRIB_DESC:
        "Contribución máxima de la dificultad ponderada de las notas vinculadas a la dificultad inicial",
    LOGGING: "Registro",
    DISPLAY_DEBUG_INFO: "¿Mostrar información de depuración en la consola del desarrollador?",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "Cola de repaso de notas",
    CLOSE: "Cerrar",
    NEW: "Abrir",
    YESTERDAY: "Ayer",
    TODAY: "Hoy",
    TOMORROW: "Mañana",

    // stats-modal.tsx
    STATS_TITLE: "Estadísticas",
    MONTH: "Mes",
    QUARTER: "Trimestre",
    YEAR: "Año",
    LIFETIME: "Todo el tiempo",
    FORECAST: "Previsión",
    FORECAST_DESC: "Número de tarjetas que deberían estar repasadas en el futuro",
    SCHEDULED: "Programado",
    DAYS: "Días",
    NUMBER_OF_CARDS: "Número de tarjetas",
    REVIEWS_PER_DAY: "Promedio: ${avg} repasos/día",
    INTERVALS: "Intervalos",
    INTERVALS_DESC: "Tiempo hasta volver a mostrar los repasos",
    COUNT: "Contador",
    INTERVALS_SUMMARY: "Intervalo promedio: ${avg}, Intervalo más largo: ${longest}",
    EASES: "Dificultad",
    EASES_SUMMARY: "Dificultad promedio: ${avgEase}",
    CARD_TYPES: "Tipos de tarjeta",
    CARD_TYPES_DESC: "Esto incluye también las tarjetas enterradas, si las hay",
    CARD_TYPE_NEW: "Nueva",
    CARD_TYPE_YOUNG: "Reciente",
    CARD_TYPE_MATURE: "Antigua",
    CARD_TYPES_SUMMARY: "Tarjetas totales: ${totalCardsCount}",
};
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
