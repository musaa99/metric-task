import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



interface StyledTabProps {
  label: string;
}

export const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#fff',
  },
});

export const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    border:' 1px solid #D9D9D9',
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    marginRight: theme.spacing(1),
    color: '#4A4A4A',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#fff',
      background: '#2196F3',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);