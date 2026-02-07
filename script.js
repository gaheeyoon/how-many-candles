const CURRENT_YEAR = new Date().getFullYear();

// DOM
const birthYearInput = document.getElementById('birthYear');
const resultSection = document.getElementById('result');
const candleCount = document.getElementById('candleCount');

// Calculate and display
function calculate() {
  const birthYear = parseInt(birthYearInput.value);
  
  if (!birthYear || birthYear < 1900 || birthYear > CURRENT_YEAR) {
    resultSection.classList.add('hidden');
    return;
  }
  
  const age = CURRENT_YEAR - birthYear;
  
  resultSection.classList.remove('hidden');
  candleCount.textContent = age;
  
  // Re-trigger animation
  candleCount.style.animation = 'none';
  candleCount.offsetHeight;
  candleCount.style.animation = 'pop 0.4s ease-out';
}

// Events
birthYearInput.addEventListener('input', calculate);
birthYearInput.addEventListener('focus', () => birthYearInput.select());

// Initialize footer year
document.getElementById('footerYear').textContent = CURRENT_YEAR;
