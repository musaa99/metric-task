import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export const ProgressBar = styled(Box)`
    display: flex;
    backgroundColor: #EAEAEA;
    height: 16px;
    width: 100%;
    maxWidth: 100%;
    margin: 15px 0px 20px;
    color: #4A4A4A;
`;

export const Progress = styled(Box)`
    height: 16px;
    transition: width 0.5s ease-in;
`;
export const ProgressDetailsCon = styled(Grid)`
    display: flex;
`;
export const ProgressDetails = styled(Typography)`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #4A4A4A;
    margin-right: 30px;
`;
export const ProgressBox = styled(Box)`
    height: 10px;
    width: 10px;
    margin: 3px;
`;



