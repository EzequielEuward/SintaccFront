import React, { useState } from 'react'
import { DashboardLayout } from '../../dashboard/layout'
import { ResponsiveLine } from '@nivo/line'
import { ResponsiveBar } from '@nivo/bar'
import { useTable } from 'react-table'
import { Button, TextField, Card, CardContent, CardHeader, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { Search, Download } from "@mui/icons-material"

const patientData = {
    "123": {
        nombre: "Juan Pérez",
        weightData: [
            { fecha: '1 Mayo', peso: 75 },
            { fecha: '8 Mayo', peso: 74.5 },
            { fecha: '15 Mayo', peso: 74 },
            { fecha: '22 Mayo', peso: 73.5 },
            { fecha: '29 Mayo', peso: 73 },
            { fecha: '5 Junio', peso: 72.8 },
        ],
        macroData: [
            { dia: 'Lun', proteinas: 120, carbohidratos: 200, grasas: 65 },
            { dia: 'Mar', proteinas: 100, carbohidratos: 180, grasas: 70 },
            { dia: 'Mie', proteinas: 110, carbohidratos: 220, grasas: 60 },
            { dia: 'Jue', proteinas: 130, carbohidratos: 190, grasas: 55 },
            { dia: 'Vie', proteinas: 115, carbohidratos: 210, grasas: 65 },
            { dia: 'Sab', proteinas: 90, carbohidratos: 160, grasas: 75 },
            { dia: 'Dom', proteinas: 105, carbohidratos: 230, grasas: 80 },
        ],
        mealData: [
            { id: 1, fecha: '5 Junio', comida: 'Desayuno', calorias: 450, proteinas: 30, carbohidratos: 45, grasas: 20 },
            { id: 2, fecha: '5 Junio', comida: 'Almuerzo', calorias: 650, proteinas: 40, carbohidratos: 70, grasas: 25 },
            { id: 3, fecha: '5 Junio', comida: 'Cena', calorias: 550, proteinas: 35, carbohidratos: 60, grasas: 22 },
        ],
    },
}

export const PatientMetricsPage = () => {
    const [patientId, setPatientId] = useState("")
    const [currentPatient, setCurrentPatient] = useState(null)

    const columns = React.useMemo(() => [
        { Header: 'Fecha', accessor: 'fecha' },
        { Header: 'Comida', accessor: 'comida' },
        { Header: 'Calorías', accessor: 'calorias' },
        { Header: 'Proteínas (g)', accessor: 'proteinas' },
        { Header: 'Carbohidratos (g)', accessor: 'carbohidratos' },
        { Header: 'Grasas (g)', accessor: 'grasas' },
    ], [])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data: currentPatient ? currentPatient.mealData : []
    })

    const handleSearch = () => {
        const patient = patientData[patientId]
        if (patient) {
            setCurrentPatient(patient)
        } else {
            alert("Paciente no encontrado")
            setCurrentPatient(null)
        }
    }

    const handleDownload = () => {
        if (currentPatient) {
            alert(`Descargando datos nutricionales de ${currentPatient.nombre} en formato XLSX...`)
        } else {
            alert("Por favor, busque un paciente primero")
        }
    }

    return (
        <DashboardLayout>
            <div style={{ padding: '20px' }}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Estadisticas del paciente
                </Typography>

                <Card style={{ marginBottom: '20px' }}>
                    <CardHeader title="Buscar Paciente" />
                    <CardContent>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <TextField
                                label="ID del Paciente"
                                variant="outlined"
                                value={patientId}
                                onChange={(e) => setPatientId(e.target.value)}
                                fullWidth
                            />
                            <Button variant="contained" color="primary" onClick={handleSearch} startIcon={<Search />}>
                                Buscar
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {currentPatient && (
                    <>
                        <Typography variant="h4" gutterBottom>
                            Datos de {currentPatient.nombre}
                        </Typography>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                            <Card>
                                <CardHeader title="Progreso de Peso" />
                                <CardContent>
                                    <div style={{ height: 300 }}>
                                        <ResponsiveLine
                                            data={[
                                                {
                                                    id: 'Peso',
                                                    data: currentPatient.weightData.map((item) => ({ x: item.fecha, y: item.peso })),
                                                },
                                            ]}
                                            margin={{ top: 20, right: 50, bottom: 50, left: 50 }}
                                            xScale={{ type: 'point' }}
                                            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                                            axisBottom={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: 'Fecha', legendOffset: 36 }}
                                            axisLeft={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: 'Peso (kg)', legendOffset: -40 }}
                                            useMesh={true}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader title="Consumo de Macronutrientes (últimos 7 días)" />
                                <CardContent>
                                    <div style={{ height: 300 }}>
                                        <ResponsiveBar
                                            data={currentPatient.macroData}
                                            keys={['proteinas', 'carbohidratos', 'grasas']}
                                            indexBy="dia"
                                            margin={{ top: 20, right: 50, bottom: 50, left: 50 }}
                                            padding={0.3}
                                            axisBottom={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: 'Día', legendPosition: 'middle', legendOffset: 32 }}
                                            axisLeft={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: 'Cantidad (g)', legendPosition: 'middle', legendOffset: -40 }}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <Card style={{ marginBottom: '20px' }}>
                            <CardHeader title="Registro de Comidas Recientes" />
                            <CardContent>
                                <Table {...getTableProps()}>
                                    <TableHead>
                                        {headerGroups.map(headerGroup => (
                                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                                {headerGroup.headers.map(column => (
                                                    <TableCell {...column.getHeaderProps()}>
                                                        {column.render('Header')}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableHead>
                                    <TableBody {...getTableBodyProps()}>
                                        {rows.map(row => {
                                            prepareRow(row)
                                            return (
                                                <TableRow {...row.getRowProps()}>
                                                    {row.cells.map(cell => (
                                                        <TableCell {...cell.getCellProps()}>
                                                            {cell.render('Cell')}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>

                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" color="secondary" onClick={handleDownload} startIcon={<Download />}>
                                Descargar Informe Nutricional
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </DashboardLayout>
    )
}

export default PatientMetricsPage
