import {
  Box,
  IconButton,
  Avatar,
  Stack,
  Badge,
  Typography,
} from '@mui/material';
import PartyModeIcon from '@mui/icons-material/PartyMode';
import { VisuallyHiddenInput } from '../Custom/VisuallyHiddenInput';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { updUserAvatar } from 'services/redux/auth/operationsUserProfile';
import { useEffect, useState } from 'react';
import { selectAuthUser } from 'services/redux/auth/selectors';

export const AvatarProfile = () => {
  const {
    user: { name, avatarCloudURL },
  } = useTypeSelector(selectAuthUser);
  const [file, setFile] = useState(null);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    if (!file) {
      return;
    }
    dispatch(updUserAvatar(file));
  }, [dispatch, file]);

  const handleFileChange = (evt: any) => setFile(evt.target.files[0]);

  return (
    <Box
      style={{
        paddingTop: '2px',
        position: 'relative',
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <Stack direction="row" spacing={2}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <IconButton
              component="label"
              size="medium"
              color="primary"
              sx={{
                backgroundColor: 'rgb(38, 38, 38)',
                padding: '3px',
              }}
            >
              <PartyModeIcon fontSize="small" />
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </IconButton>
          }
        >
          <Avatar
            alt={name}
            src={avatarCloudURL}
            sx={{ width: 64, height: 64 }}
          />
        </Badge>
      </Stack>
      {name && (
        <Typography
          variant="body2"
          style={{ lineHeight: '1.0', fontSize: '14px' }}
        >
          {name}
        </Typography>
      )}
      {/* {experience && (
        <Typography
          variant="caption"
          style={{ lineHeight: '1.0', fontSize: '12px' }}
        >
          {experience} years experience
        </Typography>
      )}

      {phone && (
        <Typography
          variant="caption"
          style={{ lineHeight: '1.0', fontSize: '12px' }}
        >
          phone: {phone}
        </Typography>
      )} */}
    </Box>
  );
};
