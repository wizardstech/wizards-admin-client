import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './styles';
import { WithStyles } from '@material-ui/styles/withStyles';

interface Props extends WithStyles<typeof styles> {
  onDrawerToggle(): void;
}

const Header = ({ classes, onDrawerToggle }: Props) => (
  <React.Fragment>
    <AppBar className={classes.appBar} position="sticky" elevation={0}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Hidden smUp>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Grid>
          <Grid item className={classes.endSpacer} />
        </Grid>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default Header;
