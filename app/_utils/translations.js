// utils/translations.js

export const categoryTranslations = {
    "Cardiologist": "Cardiólogos",
    "Dentist": "Dentistas",
    "Orthopedist": "Traumatólogos",
    "Neurologist": "Neurólogos",
    "Otologist": "Otólogos",
    // "Header" : "Cabecera",
    "Surgeon": "Cirujanos",
    "Psychiatrist": "Psiquiatras",
    "Ophthalmologist": "Oftalmólogos"

    // Añade todas las categorías que tienes
  };
  
  export function translateCategory(slug) {
    return categoryTranslations[slug] || slug; // Devuelve la traducción si existe, o el slug original si no
  }
  