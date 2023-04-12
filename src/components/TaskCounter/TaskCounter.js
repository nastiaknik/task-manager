import { useSelector } from 'react-redux';
import { selectTaskCount } from 'redux/selectors';
import { Text } from './TaskCounter.styled';

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <>
      {/* <Text>All: {count.active + count.completed}</Text> */}
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
    </>
  );
};
