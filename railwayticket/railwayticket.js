const form = document.getElementById('booking-form');
const ticketInfo = document.getElementById('ticket-info');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const trainNumber = form.elements['train-number'].value;
  const passengerName = form.elements['passenger-name'].value;
  const seatType = form.elements['seat-type'].value;

  // Simulate booking a ticket
  const ticket = {
    trainNumber,
    passengerName,
    seatType,
    price: 0
  };

  // Display the ticket information
  ticketInfo.innerHTML = `
    <h2>Ticket Booked</h2>
    <p>Train Number: ${ticket.trainNumber}</p>
    <p>Passenger Name: ${ticket.passengerName}</p>
    <p>Seat Type: ${ticket.seatType}</p>
    <p>Price: $${ticket.price}</p>
  `;
  ticketInfo.style.display = 'block';
});