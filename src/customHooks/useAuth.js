import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAuth = (props) => {
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    if (!currentUser) {
      props.navigate('/account');
    }
  }, [currentUser]);

  return currentUser;
};

export default useAuth;
