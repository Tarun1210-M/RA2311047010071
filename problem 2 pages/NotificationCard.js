import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function NotificationCard({ notification }) {
  return (
    <Card sx={{ mb: 2, bgcolor: notification.isNew ? "#e3f2fd" : "white" }}>
      <CardContent>
        <Typography variant="h6">{notification.title}</Typography>
        <Typography>{notification.message}</Typography>

        <Chip label={notification.type} sx={{ mt: 1 }} />
        {notification.isNew && (
          <Chip label="NEW" color="primary" sx={{ ml: 1 }} />
        )}
      </CardContent>
    </Card>
  );
}