import { useDispatch } from 'react-redux';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { deleteCompleted } from 'redux/tasksSlice';
import { Button } from '../Button/Button';
import { Header, Section, Title } from './AppBar.styled';

export const AppBar = () => {
  const dispatch = useDispatch();
  return (
    <Header>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Delete</Title>
        <Button onClick={() => dispatch(deleteCompleted())}>
          Delete completed
        </Button>
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Header>
  );
};
