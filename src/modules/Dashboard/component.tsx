import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import { WithStyles } from '@material-ui/styles/withStyles';

import Navigator from './Navigator';
import Header from './Header';
import styles, { drawerWidth } from './styles';
import routes from './routes';
import { Route } from 'react-router-dom';

type Props = WithStyles<typeof styles>;

const Dashboard = ({ classes }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prevValue => !prevValue);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            routes={routes}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            routes={routes}
          />
        </Hidden>
      </nav>
      <div className={classes.appContent}>
        <Header onDrawerToggle={handleDrawerToggle} />
        <div className={classes.wrapper}>
          <main className={classes.mainContent}>
            {routes.map(({ children }) =>
              children.map(({ slug, ...route }) => (
                <Route key={`route-${slug}`} {...route} />
              ))
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
