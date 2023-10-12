import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Snack from "../components/Snack";
import Checkbox from "@mui/material/Checkbox";

const Formulario = () => {
  const [datosGenerales, setDatosGenerales] = useState({
    nombre: "",
    apellidoM: "",
    apellidoP: "",
    correo: "",
    telefono: "",
    tienda: "",
  });

  const [direccion, setDireccion] = useState({
    rut: "",
    region: "",
    comina: "",
    avca: "",
  });

  const [snack, setSnack] = useState(false);
  const [usarRutGenerico, setUsarRutGenerico] = useState(false);

  const handleUsarRutGenerico = () => {
    if (usarRutGenerico) {
      setDireccion({ ...direccion, rut: "99.999.999-K" });
    } else {
      setDireccion({ ...direccion, rut: "" });
    }
    setUsarRutGenerico(!usarRutGenerico);
  };

  const handleChangeDatosGenerales = (event) => {
    setDatosGenerales({
      ...datosGenerales,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeDireccion = (event) => {
    setDireccion({
      ...direccion,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(datosGenerales, direccion);
  };

  const inputSX = {
    color: "#001952",
    "& label.Mui-focused": {
      color: "#001952",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#001952",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#001952",
      },
      "&:hover fieldset": {
        borderColor: "#001952",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#001952",
      },
    },
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">Datos Generales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Nombre"
                name="nombre"
                value={datosGenerales.nombre}
                onChange={handleChangeDatosGenerales}
                fullWidth
                sx={inputSX}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Apellido Materno"
                name="apellidoM"
                value={datosGenerales.apellidoM}
                onChange={handleChangeDatosGenerales}
                fullWidth
                sx={inputSX}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Apellido Paterno"
                name="apellidoP"
                value={datosGenerales.apellidoP}
                onChange={handleChangeDatosGenerales}
                fullWidth
                sx={inputSX}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Correo"
                name="correo"
                value={datosGenerales.correo}
                onChange={handleChangeDatosGenerales}
                fullWidth
                sx={inputSX}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Teléfono"
                name="telefono"
                value={datosGenerales.telefono}
                onChange={handleChangeDatosGenerales}
                fullWidth
                sx={inputSX}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth sx={inputSX}>
                <InputLabel>Tienda</InputLabel>
                <Select
                  name="tienda"
                  value={datosGenerales.tienda}
                  onChange={handleChangeDatosGenerales}
                >
                  <MenuItem value="tienda1">Tienda 1</MenuItem>
                  <MenuItem value="tienda2">Tienda 2</MenuItem>
                  <MenuItem value="tienda3">Tienda 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6">Dirección</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="RUT *"
                name="rut"
                value={usarRutGenerico ? "99.999.999-K" : direccion.rut}
                sx={inputSX}
                onChange={handleChangeDireccion}
                fullWidth
              />
              <div>
                <Checkbox
                  checked={usarRutGenerico}
                  onChange={handleUsarRutGenerico}
                />
                Usar RUT Genérico
              </div>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Region"
                name="region"
                value={direccion.region}
                sx={inputSX}
                onChange={handleChangeDireccion}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Comuna"
                name="comuna"
                value={direccion.comuna}
                sx={inputSX}
                onChange={handleChangeDireccion}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Avenida y Calle"
                name="avca"
                value={direccion.avca}
                sx={inputSX}
                onChange={handleChangeDireccion}
                fullWidth
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Box
        sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#001952",
            "&:hover": { backgroundColor: "#001952" },
          }}
          onClick={() => {
            setSnack(true);
            setTimeout(() => {
              setSnack(false);
            }, 2000);
          }}
        >
          Guardar
        </Button>
      </Box>
      <Snack snack={snack} />
    </Box>
  );
};

export default Formulario;
