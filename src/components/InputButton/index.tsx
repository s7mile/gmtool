import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button
} from '@mui/material';

interface InputButtonProps {
  className?: string;
  color?:
    | 'primary'
    | 'black'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'success'
    | 'inherit'
    | 'info';
  children?: ReactNode;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: 'text' | 'number';
}

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

const ButtonNotify = styled(Button)(
  ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`
);

const InputButton: FC<InputButtonProps> = ({
  className,
  color = 'inherit',
  children,
  value,
  onChange,
  placeholder,
  type,
  ...rest
}) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <OutlinedInputWrapper
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <ButtonNotify variant="contained" size="small" color={color}>
              변경
            </ButtonNotify>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

InputButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'black',
    'secondary',
    'error',
    'warning',
    'success',
    'info',
    'inherit'
  ]),
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number'])
};

export default InputButton;
