import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './AddConfession.css';



const AddConfession = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [confession, setConfession] = useState('');
  const [titleError, setTitleError] = useState('');
  const [confessionError, setConfessionError] = useState('');
  const db = getFirestore(app);

  const validateForm = () => {
    let isValid = true;

    if (!title.trim()) {
      setTitleError('*Title is required');
      isValid = false;
    } else {
      setTitleError('');
    }

    if (!confession.trim()) {
      setConfessionError('*Confession is required');
      isValid = false;
    } else {
      setConfessionError('');
    }

    return isValid;
  };

  const addConfession = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'confessions'), {
        title: `"${title}"`,
        confession,
        date: new Date(),
      });

      console.log('Document written with ID:', docRef.id);

      setTitle('');
      setConfession('');

      // Navigate to the home page using navigate
      navigate('/');
    } catch (e) {
      console.error('Error adding document:', e);
    }
  };

  return (
    <div className="form-container">
      <p className="textinfo">Add your confessions</p>
      <form onSubmit={addConfession}>
        <input
          maxLength={30}
          className="title"
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Write a Title for your Confession"
        />
        <p className="error" style={{ color: 'red' }}>
          {titleError}
        </p>
        <br />
        <br />
        <br />

        <input
          className="confess"
          type="text"
          name="confession"
          id="confession"
          onChange={(e) => setConfession(e.target.value)}
          value={confession}
          placeholder="Write your confession"
        />
        <p className="error" style={{ color: 'red' }}>
          {confessionError}
        </p>
        <br />
        <br />
        <br />
        <input type="submit" className="submitting" value="Submit" />
      </form>
    </div>
  );

};

export default AddConfession;
