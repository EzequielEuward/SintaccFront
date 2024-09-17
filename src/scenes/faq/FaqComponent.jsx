import { Box, useTheme, Button, Typography } from "@mui/material";
import { Header } from "../components";
import { DashboardLayout } from "../dashboard/layout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

//Icons
import { Mail as MailIcon } from '@mui/icons-material';
export const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <DashboardLayout>
            <Box m="20px">
                <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Manual de usuario
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#f50057',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#c51162',
                                    },
                                }}
                                href="../../assets/docs/manualdeusuario.pdf"
                                download="manualdeusuario.pdf"
                            >
                                Descargar manual de usuario
                            </Button>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Configuración de mi cuenta
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2, // Margen inferior
                                color: '#333',
                            }}
                        >
                            ¿Cómo configuro mi cuenta?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2, // Margen inferior
                                lineHeight: 1.6, // Altura de línea para mejor legibilidad
                                color: '#555',
                            }}
                        >
                            Para configurar tu cuenta, sigue estos pasos:
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                mb: 1, // Margen inferior
                                color: '#444',
                            }}
                        >
                            Configuración de la Imagen de Perfil
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2, // Margen inferior
                                lineHeight: 1.6, // Altura de línea para mejor legibilidad
                                color: '#666',
                            }}
                        >
                            1. Inicia sesión en tu cuenta y dirígete a la sección de perfil.
                            <br />
                            2. Haz clic en el área de la imagen de perfil para cargar una nueva imagen.
                            <br />
                            3. Selecciona la imagen desde tu dispositivo y ajusta el recorte si es necesario.
                            <br />
                            4. Guarda los cambios para actualizar tu imagen de perfil.
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                mb: 1, // Margen inferior
                                color: '#444',
                            }}
                        >
                            Registro de Datos Personales
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                lineHeight: 1.6, // Altura de línea para mejor legibilidad
                                color: '#666',
                            }}
                        >
                            1. Accede a la sección de configuración de tu cuenta.
                            <br />
                            2. Asegúrate de que todos tus datos personales estén correctos, incluyendo nombre completo, dirección y número de teléfono.
                            <br />
                            3. Si necesitas actualizar alguno de los datos, haz clic en el campo correspondiente y edítalo.
                            <br />
                            4. Guarda los cambios para actualizar tus datos personales en el sistema.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            ¿Quieres mejorar el plan?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Para mejorar el plan debes contactarnos con nosotros a traves de nuestro email y en la brevedad te contactaremos
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#f50057',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#c51162',
                                },
                                m: 2,
                            }}
                        >
                            Formulario de contacto
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#f50057',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#c51162',
                                },
                                m: 2,
                                gap: 1,
                            }}
                            component="a"
                            href="https://www.gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MailIcon />
                            Gmail
                        </Button>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            Cambiar mi contraseña
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                mb: 1, // Margen inferior
                                color: '#444',
                            }}
                        >
                            Me olvide la contraseña
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                lineHeight: 1.6, // Altura de línea para mejor legibilidad
                                color: '#666',
                            }}
                        >
                            1. Accede al icono del usuario en la parte superior izquierda de la pantalla.
                            <br />
                            2. Bajar a la sección de donde dice "¿Te olvidaste la contraseña?".
                            <br />
                            3. Se te enviara un mail para confirmar con un codigo.
                            <br />
                            4. Copia el codigo y ingresa la contraseña para luego cambiar.
                            <br />
                            5. Cerrar sesión para validar cambios y ingrese nuevamente con su contraseña nueva.
                            <br />
                            6. Tener en cuenta que todos los datos estaran seguros y no se los proporcionaremos a nadie.
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                mb: 1,
                                mt: 2,
                                color: '#444',
                            }}
                        >
                            Quiero cambiar mi contraseña
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                lineHeight: 1.6, // Altura de línea para mejor legibilidad
                                color: '#666',
                            }}
                        >
                            1. Accede al icono del usuario en la parte superior izquierda de la pantalla.
                            <br />
                            2. Bajar a la sección de donde dice "¿Te olvidaste la contraseña?".
                            <br />
                            3. Se te enviara un mail para confirmar con un codigo.
                            <br />
                            4. Copia el codigo y ingresa la contraseña para luego cambiar.
                            <br />
                            5. Cerrar sesión para validar cambios y ingrese nuevamente con su contraseña nueva.
                            <br />
                            6. Tener en cuenta que todos los datos estaran seguros y no se los proporcionaremos a nadie.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            ¿Necesitas más ayuda?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Si necesitas más ayuda no dudes en contactarnos a nuestro email o a través de este formulario
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#f50057',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#c51162',
                                },
                                m: 2,
                            }}
                        >
                            Formulario de contacto
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </DashboardLayout>
    );
};

export default FAQ;
