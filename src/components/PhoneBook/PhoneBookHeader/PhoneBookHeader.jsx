import { useState } from "react";

import { Box, Button, IconButton, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { NAVIGATION_ROUTES } from "../../../configs/Navigation.config";

export const PhoneBookHeader = () => {
    return (
        <Box
        component = "header"
        sx ={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            backgroundColor: 'background.paper',
            flexDirection: 'column',
            pt: 7,
            px: 13,
            position: 'sticky',
            top: 0,
            zIndex: 999,
        }}
        >
            <Box
            sx ={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}
            >
                <Typography variant="h6" color ='text.primary'>
                    WhatsApp
                </Typography>
                <Box display ='flex' alignItems="center">
                    <IconButton aria-label="Search" type = "button">
                        <SearchIcon/>
                    </IconButton>
                    <IconButton aria-label="Menu" type = "button">
                        <MoreVertIcon/>
                    </IconButton>
                </Box>
            </Box>
            <Box
            sx ={{
                width:'100%',
                display: 'flex',
                justifyContent:'space-between',
                flexDirection: 'row'
            }}
            >
                <IconButton aria-label = "Camera" type = "button">
                        <CameraAltIcon/>
                </IconButton>
                <Box
                sx ={{
                    display: 'flex',
                    flex: 'auto'
                }}
                >
                  {NAVIGATION_ROUTES.map(item => (
                    <Button
                    key = {item.id}
                    type = 'button'
                    variant="text"
                    sx = {{
                        py: 7,
                        px: 13,
                        flex: 1,
                    }}
                  >
                    <Typography color ='primary'>
                        {item.name}
                    </Typography>
                  </Button>
                  ))}
                </Box>
            </Box>
        </Box>
    )
}