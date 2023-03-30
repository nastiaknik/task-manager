import { useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';
import { Text } from './TaskCounter.styled';

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <>
      {/* <Text>All: {count.active + count.completed}</Text> */}
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
    </>
  );
};
