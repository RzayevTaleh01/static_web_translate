document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    fetchTranslation(selectedLanguage);
  });
  
  function fetchTranslation(language) {
    fetch(`/${language}.json`)
      .then(response => response.json())
      .then(data => applyTranslation(data))
      .catch(error => console.error('Tərcümə alınamadı:', error));
  }
  
  function applyTranslation(translations) {
    const translateElements = document.querySelectorAll('[data-translate]');
    translateElements.forEach(element => {
      const key = element.dataset.translate;
      if (translations.hasOwnProperty(key)) {
        element.textContent = translations[key];
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchTranslation('az'); //default olaraq az 
  });
  