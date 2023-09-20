const runTypingEffect = () => {
  const text = 'I am Chad Powers.';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
};

const typeText = (text, typingElement, delay) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
};

document.addEventListener('DOMContentLoaded', runTypingEffect);
