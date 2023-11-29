import React from 'react';
import "./ConfessionCard.css";

const ConfessionCard = ({ confession }) => {
  return (
    <article className='confessions'>
      <h3 className='titlename'>{confession.title}</h3>
      <br></br>
      <h3 className='confessiontext'>{confession.confession}</h3>
      <br></br>
      <p class="dateandtime">{formatDateTime(confession.date)}</p>
    </article>
  );
};

// Helper function to format date and time
const formatDateTime = (dateTime) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
  return new Date(dateTime.toDate()).toLocaleDateString(undefined, options);
};

export default ConfessionCard;
