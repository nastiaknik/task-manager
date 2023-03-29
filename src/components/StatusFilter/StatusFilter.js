import { Button } from 'components/Button/Button';
import { Wrapper } from 'components/StatusFilter/StatusFilter.styled';

export const StatusFilter = () => {
  return (
    <Wrapper>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </Wrapper>
  );
};
