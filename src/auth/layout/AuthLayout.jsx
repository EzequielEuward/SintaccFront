import { Grid2 as Grid, Typography } from '@mui/material'; // Usa Grid2 aquí

export const AuthLayout = ({children, title = ''}) => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid item xs={12} md={6} lg={4} className='box-shadow'
                sx={{ width: '100%', maxWidth: 450, backgroundColor: 'white', padding: 3, borderRadius: 2 }} >

                <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>

                {children}

            </Grid>
        </Grid>
    )
} 
export default AuthLayout;
