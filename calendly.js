// calendly.js
function initializeCalendly(container) {
  const calendlyLink = document.createElement('a');
  calendlyLink.href = '';
  calendlyLink.textContent = 'Schedule time with me';
  calendlyLink.onclick = function() {
    Calendly.initPopupWidget({ url: 'https://calendly.com/upwork-developer-clintonwilliams' });
    // Calendly.initPopupWidget({ url: 'https://calendly.com/upwork-developer-leighannwithrow' });
    return false;
  };

  container.appendChild(calendlyLink);
}
