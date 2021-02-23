const age = 15
let button = 0
document.getElementById('results').addEventListener('click', report)
function report () {
  do {
    button = prompt('what-is-my-age')
    button = parseInt(button)
    if (age === button) {
      alert('your right you have gussed my age')
    } else if (age < button) {
      alert('Your guess was to high my friend')
    } else if (age > button) {
      alert('your guess was too low try again')
    }
  } while (age !== button)
}
