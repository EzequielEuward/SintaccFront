import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { mockTransactions } from "../../../data/mockData";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../../theme";

export const TableDiv = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn="span 12" 
      gridRow="span 3"
      backgroundColor={colors.primary[300]} // Fondo de caja
      p="20px"
      sx={{
        boxShadow: `0px 1px 4px ${colors.grey[600]}`,
        borderRadius: "8px",
        maxHeight: '400px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h4" mb="20px" fontWeight="bold" sx={{ color: colors.grey[900] }}>
        Turnos recientes
      </Typography>

      <TableContainer component={Paper} sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: colors.grey[900] }}>Nombre</TableCell>
              <TableCell sx={{ color: colors.grey[900] }}>Apellido</TableCell>
              <TableCell sx={{ color: colors.grey[900] }}>Fecha</TableCell>
              <TableCell sx={{ color: colors.grey[900] }}>Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockTransactions.map((transaction, i) => (
              <TableRow key={`${transaction.txId}-${i}`}>
                <TableCell sx={{ color: colors.grey[900] }}>{transaction.user.split(' ')[0]}</TableCell>
                <TableCell sx={{ color: colors.grey[900] }}>{transaction.user.split(' ')[1]}</TableCell>
                <TableCell sx={{ color: colors.grey[900] }}>{transaction.date}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: colors.blueAccent[500],
                      color: colors.grey[100],
                      '&:hover': {
                        backgroundColor: colors.blueAccent[700],
                      },
                    }}
                  >
                    Ver
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableDiv;
