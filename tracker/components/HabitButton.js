import { useState } from 'react';
const HabitButton = ({ date }) => {
  const [complete, setComplete] = useState(false);
  return (
    <span>
      {date.getMonth() + 1} / {date.getDate()}
      <button onClick={() => setComplete(!complete)}>
        {complete ? 'X' : 'O'}
      </button>
      <style jsx>{`
        span {
          display: flex;
          flex-direction: column;
        }
        span + span {
          margin-left: 10px;
        }
        button {
          border: none;
          margin-top: 1rem;
          background: white;
        }
      `}</style>
    </span>
  );
};

export default HabitButton;
