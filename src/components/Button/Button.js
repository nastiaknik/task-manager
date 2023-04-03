import { Btn } from './Button.styled';

export const Button = ({ selected = false, children, ...otherProps }) => {
  return (
    <Btn type="button" selected={selected} {...otherProps}>
      {children}
    </Btn>
  );
};
