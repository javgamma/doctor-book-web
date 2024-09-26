// utils/translations.js

export const categoryTranslations = {
    "Cardiologist": "Cardiólogos",
    "Dentist": "Dentistas",
    "Orthopedist": "Traumatólogos",
    "Neurologist": "Neurólogos",
    "Otologist": "Otólogos",
    "Surgeon": "Cirujanos",
    "Psychiatrist": "Psiquiatras",
    "Ophthalmologist": "Oftalmólogos"

  };
  
  export function translateCategory(slug) {
    return categoryTranslations[slug] || slug;
  }
  