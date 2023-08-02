import { FC } from 'react';
import {
  Button,
  styled,
  Avatar,
  Tooltip,
  Box,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';

import Label from '@/components/Label';

interface UserInfoTopProps {
  nickname?: string;
  profile?: boolean;
}

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

const getOnOffLabel = (type: boolean) => {
  let text;
  let color;

  if (type) {
    text = 'ON';
    color = 'success';
  } else {
    text = 'OFF';
    color = 'error';
  }

  return (
    <Box>
      <Label color={color}>{text}</Label>
    </Box>
  );
};

const UserInfoTop: FC<UserInfoTopProps> = ({ nickname, profile, ...rest }) => {
  return (
    <Card sx={{ mb: 1 }}>
      <List>
        <ListItem sx={{ p: 3 }}>
          <ListItemAvatar sx={{ pr: 2 }}>
            <AvatarWrapper />
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
            secondaryTypographyProps={{
              variant: 'subtitle2',
              lineHeight: 1
            }}
            primary={nickname}
            secondary={
              <Tooltip
                arrow
                title="프로필 공개상태"
                placement="right"
                followCursor
              >
                {getOnOffLabel(profile)}
              </Tooltip>
            }
          />
          <Box textAlign={'right'}>
            <Box mb={1}>
              <Button color="warning" size="small" variant="contained">
                정보 이관
              </Button>
              <Tooltip
                arrow
                title="보유 아이템, 프렌즈 카드, 퀘스트 진행기록 등이 모두 삭제됩니다."
                placement="left"
                followCursor
              >
                <Button color="error" size="small" variant="contained">
                  유저삭제
                </Button>
              </Tooltip>
            </Box>
            <Box>
              <Button color="inherit" size="small" variant="contained">
                테스트 계정 셋팅
              </Button>
            </Box>
          </Box>
        </ListItem>
      </List>
    </Card>
  );
};

export default UserInfoTop;
