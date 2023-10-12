import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = ({ spinnerToggle }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={spinnerToggle}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Spinner;
