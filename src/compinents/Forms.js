import React, { useState } from 'react';
import Calendar from 'react-calendar';

import '../App.css'; // Import the CSS file

const Forms = ({ movie }) => {
  const [username, usersetName] = useState('');
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [tickets, setTickets] =  useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user details to local/session storage
    localStorage.setItem('Name', Name);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    localStorage.setItem('tickets', tickets);
    localStorage.setItem('selectedDate', selectedDate); // Save selected date

    // Perform the ticket booking API call or any other necessary action
  };
  const Username = localStorage.getItem('selectedDate');
  console.log(Username)

  

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Ticket Booking</h2>
      <label className="form-label">
        User Name:
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => usersetName(e.target.value)}
        />
      </label>
      <label className="form-label">
        Email:
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="form-label">
        Movie Name:
        <input
          className="form-input"
          type="text"
         
          value={movie[0].show.name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="form-label">
        Tickets:
        <input
          className="form-input"
          type="number" step="1"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
        />
      </label>
      <label className="form-label">
      Date:
      <input
        className="form-input"
        type="text"
        value={selectedDate.toLocaleDateString()} // Display the selected date
        readOnly
      />
      <Calendar
        className="calendar"
        onChange={setSelectedDate}
        value={selectedDate}
      />
    </label>
      <button className="form-submit-btn" type="submit">
        Book Ticket
      </button>
    </form>
  );
};

export default Forms;
