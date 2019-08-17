import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import flow from 'lodash/flow';

import Form from './component';
import styles from './styles';
import { loginAsync } from 'src/redux/auth/actions';
import Credentials from 'src/common/interfaces/credentials';
import { Dispatch } from 'redux';
import Store from 'src/common/interfaces/store';
import { selectToken } from 'src/redux/auth/selectors';

const mapStateToProps = (state: Store) => ({
  isLoggedIn: !!selectToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (payload: Credentials) => dispatch(loginAsync.request(payload)),
});

export default flow([
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
])(Form);
