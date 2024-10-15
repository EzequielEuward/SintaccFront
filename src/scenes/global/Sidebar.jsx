import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";

const fixedColors = {
  sidebarBackground: "#121621",
  textColor: "#ffffff",
  hoverColor: "#6870fa",
  activeColor: "#3f51b5",
  primaryColor: "#ff4081",
};

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: fixedColors.textColor,
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export const Sidebar = () => {
  const { username, rol } = useSelector((state) => state.auth);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        position: "sticky", 
        top: 0,
        height: "100vh",
        overflowY: "auto",
        "& .pro-sidebar-inner": {
          background: fixedColors.sidebarBackground,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: fixedColors.hoverColor + " !important",
        },
        "& .pro-menu-item.active": {
          color: fixedColors.activeColor + " !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <MenuOutlinedIcon style={{ color: fixedColors.textColor }} /> 
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: fixedColors.textColor,
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={fixedColors.textColor}>
                  Panel de admin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon style={{ color: fixedColors.textColor }} /> 
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={fixedColors.textColor}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {username} {/* Muestra el nombre del usuario */}
                </Typography>
                <Typography variant="h5" color={fixedColors.primaryColor}>
                  {rol} {/* Muestra el rol del usuario */}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Inicio"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Pacientes SubMenu */}
            <SubMenu
              title="Pacientes"
              icon={<PeopleOutlinedIcon />}
              style={{ color: fixedColors.textColor }}
            >
              <Item
                title="Pacientes"
                to="/patients/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Diagnosticos"
                to="/patients/diagnosis"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Métricas"
                to="/patients/metrics"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            {/* Alimentos SubMenu */}
            <SubMenu
              title="Alimentos"
              icon={<ReceiptOutlinedIcon />}
              style={{ color: fixedColors.textColor }}
            >
              <Item
                title="Tabla de alimentos"
                to="/foods/list"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Grupos de alimentos"
                to="/foods/group-food"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Recetas"
                to="/foods/recipe"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Planes alimenticios"
                to="/foods/plans"
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <Item
              title="Turnos"
              to="/calendar/view"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title={`${username}`} // Muestra el nombre del usuario en un Item
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manual de usuario"
              to="/version"
              icon={<HistoryIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
