import { Grid2, Stack, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }) => {

  return (
    <Grid2
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", bgcolor: "primary.main", width: "100vw" }}
      // style={styles.paperContainer}
    >
      <Grid2
        className="glassmorphism"
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
          maxWidth: "70vh",
          p: 3,
          borderRadius: 4,
          mr: 2,
          ml: 2,
        }}
      >
        <Grid2 display="flex" justifyContent="center">
          <Stack direction="row">
          
          </Stack>
        </Grid2>

        <Typography
          display="flex"
          justifyContent="center"
          variant="h4"
          sx={{ mb: 2, color: "white" }}
        >
          {title}
        </Typography>

        {children}
      </Grid2>
    </Grid2>
  );
};
