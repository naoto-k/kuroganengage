import { Avatar, AvatarProps } from "@mui/material";

export const UnitAvatar = (props: AvatarProps) => (
  <Avatar
    variant="rounded"
    sx={{ height: 96, width: 64 }}
    slotProps={{
      img: {
        sx: {
          objectFit: "cover",
          objectPosition: "-24px 0",
        },
      },
    }}
    {...props}
  />
);
