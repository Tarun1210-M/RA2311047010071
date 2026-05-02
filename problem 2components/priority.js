import { useState, useEffect } from "react";
import { getNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import { Container, TextField } from "@mui/material";

export default function Priority() {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getNotifications({ type, limit })
      .then(res => setData(res))
      .catch(() => alert("Error"));
  }, [type, limit]);

  return (
    <Container>
      <h2>Priority Notifications</h2>

      <FilterBar type={type} setType={setType} />

      <TextField
        type="number"
        label="Top N"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        sx={{ ml: 2 }}
      />

      {data.map((item) => (
        <NotificationCard key={item.id} notification={item} />
      ))}
    </Container>
  );
}