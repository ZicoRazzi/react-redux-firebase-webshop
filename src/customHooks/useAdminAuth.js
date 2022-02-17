import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkUserIsAdmin } from '../utils/utils';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAdminAuth = (props) => {
  const { currentUser } = useSelector(mapState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkUserIsAdmin(currentUser)) {
      navigate('/account');
    }
  }, [currentUser]);

  return currentUser;
};

export default useAdminAuth;
