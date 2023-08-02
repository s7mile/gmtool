import { useState, useContext } from 'react';
import {
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Button,
  Typography
} from '@mui/material';
import { Apple, Google } from '@mui/icons-material';

import InputButton from '@/components/InputButton';
import { UserInfoContext } from '@/contexts/UserInfoContext';

const getMarket = (type) => {
  switch (type) {
    case 'apple':
      return <Apple />;
    case 'google':
      return <Google />;
    default:
      return '-';
  }
};

const UserInfo = () => {
  const [playerId, setPlayerId] = useState();
  const { userData } = useContext(UserInfoContext);

  const inputChange = (event) => {
    setPlayerId(event.target.value);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell align="center" variant="head" component="th">
              DB 번호
            </TableCell>
            <TableCell align="center" variant="head" component="th">
              클라이언트 버전
            </TableCell>
            <TableCell align="center" variant="head" component="th">
              마켓
            </TableCell>
            <TableCell align="center" variant="head" component="th">
              친구 수(카톡/게임)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">{userData?.db_shard_id}</TableCell>
            <TableCell align="center">{userData?.version}</TableCell>
            <TableCell align="center">{getMarket(userData?.market)}</TableCell>
            <TableCell align="center">
              {userData?.friends_count} ({' '}
              {userData?.friends_count - userData?.game_friends_count} /{' '}
              {userData?.game_friends_count})
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" variant="head" component="th">
              데코 포인트(DB)
            </TableCell>
            <TableCell align="center" variant="head" component="th">
              데코 포인트(리더보드)
            </TableCell>
            <TableCell align="center" variant="head" component="th">
              오늘 방문자 수
            </TableCell>
            <TableCell align="center" variant="head" component="th">
              누적 방문자 수
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <InputButton
                value={userData?.deco_points}
                placeholder="데코 포인트(DB)"
                onChange={inputChange}
              />
            </TableCell>
            <TableCell align="center">{userData?.deco_ranking.score}</TableCell>
            <TableCell align="center">
              <Typography>{userData?.today_visit_count}</Typography>
              <Button variant="contained" size="small" color="inherit">
                방문 기록
              </Button>
            </TableCell>
            <TableCell align="center">
              <Typography>{userData?.total_visit_count}</Typography>
              <Button variant="contained" size="small" color="inherit">
                보상 기록
              </Button>
              <Button variant="contained" size="small" color="inherit">
                보상 기록 삭제
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" variant="head" component="th">
              누적 별 개수
            </TableCell>
            <TableCell align="center" variant="head" component="th">
              가입 일자
            </TableCell>
            <TableCell align="center" variant="head" component="th">
              최종 접속시간
            </TableCell>
            <TableCell align="center" variant="head" component="th">
              최종 버전 변경 일시
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <Typography>0</Typography>
              <Button variant="contained" size="small" color="inherit">
                별 개수 변경
              </Button>
              <Button variant="contained" size="small" color="inherit">
                보상 기록
              </Button>
              <Button variant="contained" size="small" color="inherit">
                보상기록 삭제
              </Button>
            </TableCell>
            <TableCell align="center">
              <InputButton
                value={'2023-11-11 11:11:00'}
                placeholder="가입일자"
                onChange={inputChange}
              />
            </TableCell>
            <TableCell align="center">
              <InputButton
                value={'2023-11-11 11:11:00'}
                placeholder="최종 접속시간"
                onChange={inputChange}
              />
            </TableCell>
            <TableCell align="center">2023-07-28 15:49:00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserInfo;
