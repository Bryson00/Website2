const wordEl = document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-button')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-center')
const finalMessage = document.getElementById('final-message')
const figureParts = document.querySelectorAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard']

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = word[selectedIndex]

const correctLetters = []
const wrongLetters = []

// Show Hidden Word
function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord
        .split('')
        .map(letter => `
        <span class="letters">
            ${correctLetters.includes(letter) ? letter : ''}
        <span>
        `).join('')
        }
    `
    const innerWord = wordEl.innerText.replace(/\n/g, '')

    if (innerWord == selectedWord) {
        finalMessage.innerText = 'Congratulations! You won!'
        popup.style.display = 'flex'
    }
}



// Update the wrong letters
function updateWrongLetters() {
    // Display Wrong Letters
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `
    // Display Parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length

        if (index < errors) {
            part.style.display = 'block'
        }
        else {
            part.style.display = 'none'
        }
    })

    // Check if Lost
    If (wrongLetters.length == figureParts.length)
        finalMessage.innerText = 'Unfortunately you lost!'
        popup.style.display = 'flex'
}

// Show Notification
function showNotification() {
    notification.classList.add('show')

    setTimeout(() => {
        notification.classList.remove('show')
    }, 2000)
}

//Keydown letter press
window.addEventListener('keydown', e => {

    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key
    }
    if (selectedWord.includes(letter)) {
        if( !correctLetters.includes(letter)) {
            correctLetters.push(letter)

            displayWord()
        }
        else {
            showNotification()
        }
        else {
            if (!wrongLetters.includes(Letter)) {
                wrongLetters.push(letter)

                updateWrongLettersEl()
            }
            else {
                showNotification()
            }
        }
    }
})


playAgainBtn.addEventListener('click', () => {
    correctLetters.length = 0
    wrongLetters.length = 0
    selectedIndex = Math.floor(word.length * Math.random())
    selectedWord = word[selectedIndex]

    displayWord()

    updateWrongLettersEl()

    popup.style.display = 'none'


})
