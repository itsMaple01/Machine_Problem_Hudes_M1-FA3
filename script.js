const inputText = document.getElementById('inputText');
const countBtn = document.getElementById('countBtn');
const output = document.getElementById('output');

const emailInput = document.getElementById('emailInput');
const checkBtn = document.getElementById('checkBtn');
const emailOutput = document.getElementById('emailOutput');

function countCharacters() {
    const text = inputText.value.trim();
    const charCount = text.length;
    output.textContent = charCount;
}

function checkEmail() {
    const email = emailInput.value.trim();
    

    if (email === '') {
        emailOutput.textContent = '-';
        emailOutput.style.color = '#2c3e50';
        return;
    }
    
    
    if (email.includes('@')) {
        emailOutput.textContent = 'Valid';
        emailOutput.style.color = '#27ae60';
    } else {
        emailOutput.textContent = 'Invalid';
        emailOutput.style.color = '#e74c3c';
    }
}

countBtn.addEventListener('click', countCharacters);
checkBtn.addEventListener('click', checkEmail);

inputText.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        countCharacters();
    }
});

emailInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkEmail();
    }
});
