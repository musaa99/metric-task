import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CardCon } from './style';
import Oval from '../../assets/Oval.svg';

import StatsCard from './StatsCard';

const StatsBlock = (props:any) => {
  const {errors, average, zeros } = props;

  return (
    <CardCon container flexDirection="row">
        <StatsCard
          textOne= {`Errors: ${errors.code}%`}
          textTwo= {`Average: ${errors.count}%`}
        />
        <StatsCard
          textOne= { `Zeroes: ${ zeros ? zeros.toFixed(2) : 0}%`}
          textTwo= {`Average: ${errors.count}%`}
        />
        <StatsCard
          textOne="Timeouts: 0.12%"
          textTwo="Average: 0.15%"
        />
    </CardCon>
    // <StatsBlockCon container>
    //   <ImgCon item>
    //       <img src={Oval} alt='Oval icon' />
    //   </ImgCon>
    //   <StatsTextCon item>
    //     <StatsText>Errors: 0.12%</StatsText>
    //     <StatsText>Average: 0.15%</StatsText>
    //   </StatsTextCon>
    // </StatsBlockCon>
  )
}

export default StatsBlock;
