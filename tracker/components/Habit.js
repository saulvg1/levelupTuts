//component imports
import HabitButton from './HabitButton';
export default function Habit() {
  return (
    <article>
      <h3>Habit Title</h3>
      <div>
        <HabitButton />
        <HabitButton />
        <HabitButton />
        <HabitButton />
        <HabitButton />
      </div>
    </article>
  );
}
