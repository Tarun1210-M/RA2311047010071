import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import { Container, CircularProgress, Typography } from "@mui/material";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNotifications()
      .then(res => setData(res))
      .catch(() => alert("Error fetching data"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>
        All Notifications
      </Typography>

      {data.map((item) => (
        <NotificationCard key={item.id} notification={item} />
      ))}
    </Container>
  );
}