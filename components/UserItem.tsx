import { useEffect, useState } from 'react';
import userItemStyles from '../styles/UserItem.module.css';
import { getWithExpiry, setWithExpiry } from '../utils/index';

const UserItem = ({ user }: { user: any }) => {
  const fiveMin = 5 * 60 * 1000;
  const getBlockedUserData = () => typeof window !== 'undefined' && localStorage.getItem(user.id);
  const [isUserExist, setUserExist] = useState(getBlockedUserData());

  useEffect(() => {
    // On component loaded remove expired user info from localStorage
    getWithExpiry(user.id);
  }, []);

  // Used to block unblock user toggle
  const blockUnblockUser = () => {
    if (!isUserExist) {
      setWithExpiry(user.id, user, fiveMin);
    } else {
      localStorage.removeItem(user.id);
    }
    setUserExist(getBlockedUserData());
  };

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      {/* <td onClick={() => blockUnblockUser()}>{isUserExist ? 'UnBlock' : 'Block'}</td> */}
      <td className="textCenter">
        <label className={userItemStyles.switch}>
          <input type="checkbox" checked={isUserExist !== null} onChange={() => blockUnblockUser()}></input>
          <span className={userItemStyles.slider + ' ' + userItemStyles.round}></span>
        </label>
      </td>
    </tr>
  );
};

export default UserItem;
