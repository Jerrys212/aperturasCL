import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Snack = ({ snack }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={snack}
      onClose={snack}
    >
      <Alert severity="success" sx={{ width: "100%" }}>
        Cliente Guardado Correctamente
      </Alert>
    </Snackbar>
  );
};

export default Snack;
