import styled, { css } from 'styled-components';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export const CardCon = styled(Grid)`
   flex-wrap: nowrap !important;
`;

export const StyledMainMetrics = styled(Grid)`
    background: #FFF;
    padding: 40px;
    Width: 748px;
    Height: 100%; // 775px
`;

export const StatsBlockCon = styled(Grid)`
   flex-direction: row;
   margin-top: 40px;
`;

export const ImgCon = styled(Grid)`
    margin-right: 8px !important;
`;

export const StatsTextCon = styled(Grid)`
    color: #4A4A4A;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
`;
export const StatsText = styled(Typography)`
    color: #4A4A4A;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
`;

