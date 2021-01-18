import Habit from './Habit.js';

const HabitList = ({ habits }) => {
  return (
    <section>
      <h2>My Habits</h2>
      {habits.map((habit) => (
        <Habit key={habit} habit={habit} />
      ))}
    </section>
  );
};

export default HabitList;
