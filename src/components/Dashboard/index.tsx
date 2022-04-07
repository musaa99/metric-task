import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { StyledDashboard } from './style'

import MainMetrics from '../MainMetrics'

const Dashboard = () => {
  return (
    <StyledDashboard>
      <MainMetrics />
    </StyledDashboard>
  )
}

export default Dashboard;