document.addEventListener("DOMContentLoaded", function () {
  const secilenFilm = localStorage.getItem("secilenFilm");
  const movieSelect = document.getElementById("movie");

  if (secilenFilm && movieSelect) {
    for (let i = 0; i < movieSelect.options.length; i++) {
      const optionText = movieSelect.options[i].textContent.trim();
      if (optionText === secilenFilm.trim()) {
        movieSelect.selectedIndex = i;
        break;
      }
    }
  }
});

const koltukalani = document.querySelector('.koltukalani');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const ticket = document.getElementById('ticket');

koltukalani.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal();
    }
});

ticket.addEventListener('change', function() {
    calculateTotal();
    const poster = document.getElementById('poster');
    poster.src = ticket.value + '.jpg';
    poster.style.display = 'block';
});

function calculateTotal() {
    const selectedSeats = koltukalani.querySelectorAll('.seat.selected');
    const selectedSeatCount = selectedSeats.length;

    const selectedOption = ticket.options[ticket.selectedIndex];
    const price = Number(selectedOption.getAttribute('data-price'));

    const tumKoltuklarArr = Array.from(koltukalani.querySelectorAll('.seat:not(.reserved)'));
    const selectedSeatsArr = Array.from(selectedSeats);

    const selectedIndexes = selectedSeatsArr.map(seat => tumKoltuklarArr.indexOf(seat));

    document.getElementById('selected-seats-text').innerText = selectedIndexes.join(', ');

    if (!isNaN(price)) {
        count.innerText = selectedSeatCount;
        amount.innerText = selectedSeatCount * price;
        document.getElementById('buyTicket').disabled = selectedSeatCount === 0;
    } else {
        count.innerText = 0;
        amount.innerText = 0;
        document.getElementById('buyTicket').disabled = true;
    }
}

document.getElementById('clear').addEventListener('click', function() {
    document.querySelectorAll('.seat.selected').forEach(seat => seat.classList.remove('selected'));
    ticket.selectedIndex = 0;
    document.getElementById('selected-seats-text').innerText = '';
    calculateTotal();
});
document.getElementById('buyTicket').addEventListener('click', function () {
  const secilenBiletTuru = document.getElementById('ticket').value;
  localStorage.setItem('biletTuru', secilenBiletTuru);
});
