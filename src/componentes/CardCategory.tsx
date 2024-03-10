import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardCategory({
  name,
  type,
}: {
  name: string;
  type: string;
}) {
  return (
    <Card>
      <CardContent
        component={Link}
        to={"/category/" + { type }}
        sx={{
          width: "250px",
          height: "180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "600", fontSize: "30px" }}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
