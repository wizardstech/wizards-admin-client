import { connect } from 'react-redux';
import Initializer from './component';
import Store from 'src/common/interfaces/store';
import { selectToken } from 'src/redux/auth/selectors';
import { Dispatch } from 'redux';
import { fetchMe } from 'src/redux/user/actions';

const mapStateToProps = (state: Store) => ({ token: selectToken(state) });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchMe: () => dispatch(fetchMe.request()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Initializer);
