import { MdClose } from 'react-icons/md';
import { Wrapper, Checkbox, Text, Btn } from './Task.styled';

export const Task = ({ task }) => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" checked={task.completed} />
      <Text>{task.text}</Text>
      <Btn>
        <MdClose size={24} />
      </Btn>
    </Wrapper>
  );
};
