import useAuth from '../customHooks/useAuth';
import { WithRouter } from '../components/withRouter/WithRouter';

const WithAuth = (props) => useAuth(props) && props.children;

export default WithRouter(WithAuth);
