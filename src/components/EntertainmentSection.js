import React, { useState, useEffect, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const EntertainmentSection = () => {
  // Define your set of cards (pairs) for the memory game
  const cardPairs = useMemo(
    () => [
      { id: 1, content: 'A' },
      { id: 2, content: 'B' },
      { id: 3, content: 'C' },
      { id: 4, content: 'D' },
    ],
    []
  );

  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  // Initialize the cards and shuffle them
  useEffect(() => {
    const initialCards = [...cardPairs, ...cardPairs].sort(() => Math.random() - 0.5);
    setCards(initialCards);
  }, [cardPairs]);

  // Handle card click
  const handleCardClick = (index) => {
    // Allow flipping only unmatched cards
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };

  // Check for matched pairs and reset flipped indices
  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex].content === cards[secondIndex].content) {
        setMatchedPairs([...matchedPairs, cards[firstIndex].content]);
      }
      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  }, [flippedIndices, cards, matchedPairs]);

  // Render the cards
  const renderCards = () => {
    return cards.map((card, index) => (
      <div
        key={index}
        onClick={() => handleCardClick(index)}
        className="card" // Apply Bootstrap card class
        style={{
          width: '50px',
          height: '50px',
          margin: '5px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: flippedIndices.includes(index) || matchedPairs.includes(card.content)
            ? '#ddd'
            : '#fff',
        }}
      >
        <div className="card-body">{flippedIndices.includes(index) || matchedPairs.includes(card.content) ? card.content : ''}</div>
      </div>
    ));
  };

  return (
    <div className="container mt-5"> {/* Apply Bootstrap container class */}
      <h2 className="mb-4">Entertainment Section</h2>
      <div className="d-flex justify-content-center">{renderCards()}</div>
    </div>
  );
};

export default EntertainmentSection;
