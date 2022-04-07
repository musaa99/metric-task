import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { StyledMainMetrics, Header } from './style'

import ResolutionTabs from '../ResolutionTabs';
import StatsBlock from '../StatsBlock';
import StackedBars from '../StackedBars';
import { useSelector } from 'react-redux';

const Tabs = () => {
  const [value, setValue] = React.useState(0);
  const [stats, setStats] = React.useState('');
  const [errors, setErrors] = React.useState('');
  const [average, setAverage] = React.useState('');
  const [zeros, setZeros] = React.useState('');
  // const [errors, setErrors] = React.useState('');

  const { data } = useSelector((state: any) => state.data);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log(value);
  useEffect(() => {
      if(value === 0) {

       setErrors(data.errors_last_3days[0]);
       setAverage(data.data.avg_price_last_3days);
       setZeros(data.data[0].zeroes_last_hour);
      }
      if(value === 1) {
       // setStats()
       setAverage(data.data.avg_price_last_3days);
       setZeros(data.data[0].zeroes_last_3days);
      }
      if(value === 2) {
       // setStats()
       setErrors(data.errors_yesterday[0]);
       setAverage(data.data.avg_price_yesterday);
       setZeros(data.data[0].zeroes_yesterday);
      }
      if(value === 3) {
       // setStats();
       setErrors(data.errors_last_3days[0]);
       setAverage(data.data.avg_price_last_3days);
       setZeros(data.data[0].zeroes_last_3days);
      }
  }, [value, data])



  return (
    <StyledMainMetrics>
      <Header> Main metrics </Header>
      <ResolutionTabs value={value} onChange={handleTabChange} />
      <StatsBlock errors={errors} average={average} zeros={zeros} />
      <StackedBars />
    </StyledMainMetrics>
  )
}

export default Tabs;