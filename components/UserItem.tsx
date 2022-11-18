import { useEffect, useState } from 'react';
import userItemStyles from '../styles/UserItem.module.css';
import { getWithExpiry, setWithExpiry } from '../utils/index';

const UserItem = ({ user }: { user: any }) => {
  const fiveMin = 5 * 60 * 1000;
  const getBlockedUserData = () => typeof window !== 'undefined' && localStorage.getItem(user.id);
  const [isUserExist, setUserExist] = useState(getBlockedUserData());
  const [isTopUser, setTopUser] = useState(false);

  useEffect(() => {
    // On component loaded remove expired user info from localStorage
    getWithExpiry(user.id);
    setTopUser(checkAddedToTopUser());
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

  const checkAddedToTopUser = () => {
    let topUserStr = localStorage.getItem('TopUsers');
    let topUsers = topUserStr ? JSON.parse(topUserStr) : [];
    return topUsers.includes(user.id);
  };

  const toggleTopUser = (id: any) => {
    let topUserStr = localStorage.getItem('TopUsers');
    let topUsers = topUserStr ? JSON.parse(topUserStr) : [];
    if (!topUsers?.includes(id)) {
      topUsers.push(id);
    } else {
      topUsers.splice(topUsers.indexOf(id), 1);
    }
    localStorage.setItem('TopUsers', JSON.stringify(topUsers));
    setTopUser(topUsers.includes(user.id));
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
      <td>
        <label className={userItemStyles.CustomChecboxContainer}>
          <input type="checkbox" checked={isTopUser} onClick={() => toggleTopUser(user.id)}></input>
          <span className={userItemStyles.checkmark}></span>
        </label>
      </td>
    </tr>
  );
};

export default UserItem;
