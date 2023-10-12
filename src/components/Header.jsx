import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#001952", padding: "15px" }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="https://petcomplete.petco.com.mx/petco.png" alt="" />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "28px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Aperturas Chile
            </Typography>
            <Button
              onClick={handleMenuClick}
              aria-controls="menu"
              aria-haspopup="true"
              sx={{ color: "white" }}
            >
              <MoreVertIcon />
            </Button>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => navigate("/")}>Cerrar Sesión</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
