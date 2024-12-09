import {Box, Typography, Avatar} from '@mui/material'
import { makeInitial } from '../../../utils/MakeInitial.util'
import { getDateDiff } from '../../../utils/GetDateDiff.util'

/**
 * 
 * @param {{name : string, lastMessageTime : Date, image : string}} param0 
 * @returns 
 */

export const PhoneBookProfile = ({
    name,
    lastMessageTime,
    image
}) => {
    return(
        <Box 
            sx = {{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Box sx = {{
                margin: '4px'
                }}>
                <Avatar>{makeInitial(name)}</Avatar>
            </Box>
            <Box
            sx = {{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
            >
            <Typography>{name}</Typography>
            <Typography>{getDateDiff(new Date(), lastMessageTime)}</Typography>
            </Box>
        </Box>
    )
}