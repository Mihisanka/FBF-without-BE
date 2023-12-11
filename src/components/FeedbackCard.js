import React, { useEffect, useState } from 'react';
import Card from './Card';
import './FeedbackCard.css'
const FeedbackCard = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('feedbackData')) || [];
    setFeedbackData(storedData);
  }, []);

  return (
    <div className="grid">
      {feedbackData.map((feedback, index) => (
        <Card key={index} name={feedback.name} message={feedback.message} />
      ))}
    </div>
  );
};

export default FeedbackCard;
