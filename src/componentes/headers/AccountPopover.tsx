import {
  Box,
  Button,
  Divider,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/endpoints";

interface AccountPopoverProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  open: boolean;
}

export const AccountPopover = ({
  anchorEl,
  onClose,
  open,
}: AccountPopoverProps): JSX.Element => {
  const { user, mutate } = useAuth();

  return (
    <Popover
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      elevation={3}
      anchorEl={anchorEl}
      onClose={onClose}
      open={open}
    >
      <Box sx={{ p: 2 }}>
        <Typography>Cuenta</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {user.username}
        </Typography>
      </Box>
      <Divider />
      <Stack sx={{ p: 1 }}>
        <Button
          variant="text"
          onClick={() => {
            api.signOut();
            mutate();
          }}
        >
          Cerrar sesión
        </Button>
      </Stack>
    </Popover>
  );
};
