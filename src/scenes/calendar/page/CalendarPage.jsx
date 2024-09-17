import { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Header from "../../global/Header";
import { tokens } from "../../../theme";
import { DashboardLayout } from "../../dashboard/layout";
import esLocale from "@fullcalendar/core/locales/es";
import { formatDate } from "@fullcalendar/core";
import "../../../index.css";

export const CalendarPage = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDataClick = (selected) => {
    const title = prompt("Ingresa un nuevo turno a tu calendario");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dataStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      });
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar este evento '${selected.event.title}'?`)) {
      selected.event.remove();
    }
  };

  const handleDatesSet = ({ view }) => {
    const toolbarTitle = document.querySelector('.fc-toolbar-title');
    if (toolbarTitle) {
      toolbarTitle.style.color = theme.palette.mode === 'dark' ? colors.grey[200] : colors.grey[800];
    }
  };

  return (
    <DashboardLayout>
      <Box m="20px">
        <Header title="CALENDARIO" subtitle="Calendario interactivo" />
        <Box display="flex" justifyContent="space-between" sx={{ ml: 3 }}>
          {/* Calendar sidebar */}
          <Box flex="1 1 20%" backgroundColor={colors.primary[200]} p="15px" borderRadius="4px" textAlign="center">
            <Typography variant="h5">Eventos</Typography>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{ backgroundColor: colors.blueAccent[600], margin: "10px 0", borderRadius: "2px" }}
                >
                  <ListItemText sx={{ color: colors.grey[200] }}
                    primary={event.title}
                    secondary={<Typography>{formatDate(event.start, { year: "numeric", month: "short", day: "numeric" })}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Calendar */}
          <Box flex="1 1 75%" ml="15px">
            <FullCalendar
              height="75vh"
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              locales={[esLocale]}
              locale="es"
              headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth" }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDataClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              datesSet={handleDatesSet}
              // No hay soporte directo para el estilo en FullCalendar 6.x, se hace mediante CSS
            />
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default CalendarPage;
