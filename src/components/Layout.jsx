import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
// import Header from "./Header";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}

      <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
