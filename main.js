const computerPlay = () => {
    const value = Math.floor(Math.random() * 3)
    switch(value) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
        default:
            break
    }
}

const humanPlay = () => {
    const input = prompt('Enter your choice (Rock - Paper - Scissors)')
    return input
}

const game = (computerPlay,humanPlay) => {
    computerPlay = computerPlay.toLowerCase()
    humanPlay = humanPlay.toLowerCase()

    alert(`Computer choice: ${computerPlay}
    \nHuman choice: ${humanPlay}`)

    if (computerPlay === 'paper' && humanPlay === 'rock') {
        alert(`Computer wins: ${computerPlay} beat ${humanPlay}`)
    } else if (computerPlay === 'rock' && humanPlay === 'scissors') {
        alert(`Computer wins: ${computerPlay} beat ${humanPlay}`)
    } else if (computerPlay === 'scissors' && humanPlay === 'paper') {
        alert(`Computer wins: ${computerPlay} beat ${humanPlay}`)
    } else if (humanPlay === computerPlay) {
        alert('Tie')
    } else {
        alert(`Human wins: ${humanPlay} beat ${computerPlay}`)
    }
}

game(computerPlay(),humanPlay())