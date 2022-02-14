import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { WithRouter } from './../components/withRouter';
import { useNavigate } from 'react-router';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAuth = (props) => {
  const { currentUser } = useSelector(mapState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/account');
    }
  }, [currentUser]);

  return currentUser;
};

export default useAuth;
