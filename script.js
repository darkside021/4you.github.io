function aggiungiFrase() {
    var nuovaFrase = document.getElementById('nuovaFrase').value;

    if (nuovaFrase.trim() !== "") {
        // Simuliamo l'aggiunta della frase a una lista (sarà effettivo con un backend e un database)
        var listaFrasi = document.getElementById('listaFrasi');
        var nuovoElemento = document.createElement('li');
        nuovoElemento.innerText = nuovaFrase;
        listaFrasi.appendChild(nuovoElemento);

        // Pulisce l'input dopo l'aggiunta della frase
        document.getElementById('nuovaFrase').value = "";
    }
}
// Funzione per capitalizzare le parole
function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(match, index, fullStr) {
        if (index ===   0 || fullStr.charAt(index -   1) === ' ' || fullStr.charAt(index -   1) === '.' || fullStr.charAt(index -   1) === '!' || fullStr.charAt(index -   1) === '?') {
            return match.toUpperCase();
        } else {
            return match.toLowerCase();
        }
    });
}

// Event listener per l'input che capitalizza le parole mentre si scrivono
document.getElementById('phrase-input').addEventListener('input', function() {
    this.value = capitalizeWords(this.value);
});

// Funzione per gestire l'evento click del pulsante "Emoji"
document.getElementById('emoji-button').addEventListener('click', function() {
    var emojiModal = document.getElementById('emoji-modal');
    emojiModal.style.display = 'block';
});

// Funzione per chiudere la modal degli emoji
document.querySelector('.close-emoji-modal').addEventListener('click', function() {
    var emojiModal = document.getElementById('emoji-modal');
    emojiModal.style.display = 'none';
});

// Funzione per aggiungere un emoji al campo di input
function addEmoji(emoji) {
    var phraseInput = document.getElementById('phrase-input');
    phraseInput.value += emoji;
}

// Aggiungi gestori di eventi per ciascun emoji nella modal
document.querySelectorAll('.emoji-category span').forEach(function(emojiSpan) {
    emojiSpan.addEventListener('click', function() {
        var emoji = this.textContent;
        addEmoji(emoji);
    });
});



// Funzione per gestire l'evento click del pulsante "Enter"
document.getElementById('enter-button').addEventListener('click', function() {
    var phraseInput = document.getElementById('phrase-input');
    var phraseDisplay = document.getElementById('phrase-display');
    var colorSelect = document.getElementById('color-select');
    var sizeSelect = document.getElementById('size-select');
    var phrase = phraseInput.value;

    // Aggiungi la frase all'area di visualizzazione con il colore e la dimensione selezionati
    phraseDisplay.style.color = colorSelect.value;
    phraseDisplay.style.fontSize = sizeSelect.value;
    phraseDisplay.textContent = phrase;

    // Pulisci il campo di input
    phraseInput.value = '';
});
function zoom(element) {
    var overlayImage = document.querySelector('#overlay img');
    var overlay = document.querySelector('#overlay');
    overlayImage.src = element.src;
    overlay.style.display = 'flex';
}

function unzoom() {
    var overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
}


