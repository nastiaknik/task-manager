import { Btn, SelectedBtn } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <>
      {selected ? (
        <SelectedBtn type={type} {...otherProps}>
          {children}
        </SelectedBtn>
      ) : (
        <Btn type={type} {...otherProps}>
          {children}
        </Btn>
      )}
    </>
  );
};
