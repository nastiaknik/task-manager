import { Button } from 'components/Button/Button';
import { Form, Field } from './TaskForm.styled';

export const TaskForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </Form>
  );
};
