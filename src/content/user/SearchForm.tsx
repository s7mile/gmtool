import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  FormControl,
  OutlinedInput,
  styled
} from '@mui/material';
import { SearchTwoTone } from '@mui/icons-material';

import { useState } from 'react';

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

const SearchForm = () => {
  const [playerId, setPlayerId] = useState();

  const selectChange = (event) => {
    setPlayerId(event.target.value);
  };

  const inputChange = (event) => {
    setPlayerId(event.target.value);
  };

  const currencies = [
    { name: '권현미', id: '678921949266' },
    { name: '김수지', id: '990751221944126' },
    { name: '남성현', id: '990827221961946' },
    { name: '박수향', id: '990529721998256' },
    { name: '박준형', id: '628921927166' },
    { name: '심우준', id: '788921972376' },
    { name: '유승연', id: '990177421965296' },
    { name: '이정빈', id: '990239721912576' },
    { name: '전들', id: '218921988766' },
    { name: '정희운', id: '990252821924446' },
    { name: '하진희', id: '990874221921316' },
    { name: '홍성일', id: '990773521999836' },
    { name: '테스트폰', id: '990177221977636' },
    { name: '이민정', id: '990378929156885' },
    { name: '이민정유니티', id: '990531221988226' },
    { name: '갤럭시S8', id: '598921972566' },
    { name: '윤기애', id: '990145829137214' },
    { name: '조규현', id: '990491221947226' },
    { name: '양시현', id: '990281429162785' }
  ];

  return (
    <>
      <Box component="form" mb={1}>
        <Box flexGrow={1} display="flex" alignItems="center">
          <TextField
            id="outlined-select-currency"
            select
            sx={{ width: 350 }}
            label="유저 선택"
            value={playerId}
            onChange={selectChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name} ({option.id})
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <FormControl variant="outlined" fullWidth>
        <OutlinedInputWrapper
          type="text"
          placeholder="카카오 회원번호"
          onChange={inputChange}
          value={playerId}
          endAdornment={
            <InputAdornment position="end">
              <ButtonNotify variant="contained" size="small">
                조회
              </ButtonNotify>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <SearchTwoTone />
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};

export default SearchForm;
