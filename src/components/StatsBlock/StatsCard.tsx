import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { StatsTextCon, StatsText, ImgCon, StatsBlockCon } from './style';
import Oval from '../../assets/Oval.svg';

const StatsCard = (props: any) => {
  const { textOne, textTwo } = props;
  return (
    <StatsBlockCon container>
      <ImgCon item>
          <img src={Oval} alt='Oval icon' />
      </ImgCon>
      <StatsTextCon item>
        <StatsText> { textOne } </StatsText>
        <StatsText> { textTwo } </StatsText>
      </StatsTextCon>
    </StatsBlockCon>
  )
}

export default StatsCard;
