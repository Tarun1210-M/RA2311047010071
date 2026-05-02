import { Select, MenuItem } from "@mui/material";

export default function FilterBar({ type, setType }) {
  return (
    <Select value={type} onChange={(e) => setType(e.target.value)}>
      <MenuItem value="">All</MenuItem>
      <MenuItem value="info">Info</MenuItem>
      <MenuItem value="warning">Warning</MenuItem>
    </Select>
  );
}