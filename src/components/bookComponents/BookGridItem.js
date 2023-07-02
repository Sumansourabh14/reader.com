import { colors } from "@/theme/colors";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const BookGridItem = ({ question, answer }) => {
  return (
    <Grid
      sx={{
        backgroundColor:
          question === "Author"
            ? colors.background.authorGridItem
            : colors.background.bookGridItem,
        borderRadius: "4px",
      }}
      xs={12}
      sm={4}
      lg={question === "Page Count" ? 2 : 3}
    >
      <Stack spacing={2}>
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "300",
          }}
        >
          {question}
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: question === "Author" ? "700" : "500",
          }}
        >
          {answer}
        </p>
      </Stack>
    </Grid>
  );
};

export default BookGridItem;
