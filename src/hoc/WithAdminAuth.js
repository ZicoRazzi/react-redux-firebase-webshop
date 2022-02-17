import { useAdminAuth } from './../customHooks/CustomHooks';

const WithAdminAuth = (props) => useAdminAuth(props) && props.children;

export default WithAdminAuth;
