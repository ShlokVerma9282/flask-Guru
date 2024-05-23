import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occasion, setOccasion] = useState('');
  const [recipientType, setRecipientType] = useState('');
  const [giftIdeas, setGiftIdeas] = useState([]);
  const [error, setError] = useState('');

  const generateGiftIdeas = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate_gift_idea', {
        age,
        gender,
        occasion,
        recipient_type: recipientType,
        
      });
      setGiftIdeas(response.data.gift_ideas);
    } catch (error) {
      setError('Error generating gift ideas');
    }
  };

  return (
    <div>
      <h1>Gift Guru</h1>
      <select value={age} onChange={(e) => setAge(e.target.value)}>
        <option value="">Select Age</option>
        <option value="child">Child</option>
        <option value="teen">Teen</option>
        <option value="adult">Adult</option>
        <option value="elderly">Elderly</option>
      </select>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="">Select Occasion</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="wedding">Wedding</option>
        <option value="holiday">Holiday</option>
        <option value="graduation">Graduation</option>
        <option value="other">Other</option>
      </select>
      <select value={recipientType} onChange={(e) => setRecipientType(e.target.value)}>
        <option value="">Select Recipient Type</option>
        <option value="friend">Friend</option>
        <option value="family">Family</option>
        <option value="partner">Partner</option>
        <option value="colleague">Colleague</option>
        <option value="other">Other</option>
      </select>
      <button onClick={generateGiftIdeas}>Generate Gift Idea</button>
      {error && <p>{error}</p>}
      <ul>
        {giftIdeas.map((idea, index) => (
          <li key={index}>{idea}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
