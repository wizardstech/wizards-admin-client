import { Theme, createStyles } from '@material-ui/core';

export const drawerWidth = 256;

export default (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    mainContent: {
      flex: 1,
      padding: '48px 36px 0',
      background: '#212121',
      color: 'white',
    },
    wrapper: {
      flex: 1,
      display: 'flex',
      flexFlow: 'row',
    },
    infoNav: {
      background: '#1f1f1f',
      // color: theme.palette.primary.lightGrey,
      height: '100%',
    },
  });
