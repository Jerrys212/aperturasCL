import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ marginTop: "50px" }}>
      <Box
        component="form"
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
          padding: "50px", // Espacio interior para el Box
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          sx={{
            fontSize: "28px",
            marginBottom: "16px",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Inicia Sesión
        </Typography>
        <TextField
          id="outlined-basic-1"
          label="Usuario"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "12px",
          }}
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: "12px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => navigate("/admin")}
            variant="contained"
            sx={{
              backgroundColor: "#001952",
              "&:hover": { backgroundColor: "#001952" },
            }}
          >
            Iniciar Sesión
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default Login;
