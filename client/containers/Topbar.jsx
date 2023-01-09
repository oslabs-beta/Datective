import React, { useState, useEffect, useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material"
import { ColorModeContext, tokens } from "./theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Back from "../components/Back.jsx";
import Forward from "../components/Forward.jsx";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display="flex" justifyContent="space-between">
            <Box>
            <Back />
            <Forward />
            </Box>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'light' ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
            </IconButton>
        </Box>
    )

};

export default Topbar;