import * as React from 'react';
import Box from '@mui/material/Box';

import {AntTabs, AntTab } from './style';

export default function ResolutionTabs(props:any) {
  const {value, onChange } = props;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={onChange} aria-label="resolution tabs">
          <AntTab label="Last Hour" />
          <AntTab label="Today" />
          <AntTab label="Yesterday" />
          <AntTab label="Last 3 Days" />
        </AntTabs>
      </Box>
    </Box>
  );
}
