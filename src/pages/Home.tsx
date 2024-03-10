import { Grid } from "@mui/material";
import { useCategories } from "../hooks/useCatergories";
import CardCategory from "../componentes/CardCategory";

export default function Home() {
  const { data } = useCategories();
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center" // Alineación horizontal en el centro
    >
      {data?.map((category, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
          <CardCategory name={category.name} type={category.type} />
        </Grid>
      ))}
    </Grid>
  );
}
