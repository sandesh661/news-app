import UserItem from './UserItem';
import usersStyles from '../styles/Users.module.css';
import Link from 'next/link';
import { useState } from 'react';

const UsersList = ({ users }: { users: any }) => {
  const [filterKey, setFilterKey] = useState('');

  return (
    <div className={usersStyles.userTable}>
      <div className={usersStyles.dropdownParent}>
        <div className={usersStyles.dropdownContent}>
          <input
            type="text"
            placeholder="Search.."
            className={usersStyles.searchInput}
            onChange={(event) => {
              setFilterKey(event.target.value);
            }}></input>
          {filterKey &&
            users.map((user: any) => {
              if (user.name.toLowerCase().includes(filterKey.toLowerCase())) {
                return <Link href={`${'/user/' + user.id}`}>{user.name}</Link>;
              }
              return null;
            })}
        </div>
      </div>

      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Block/Unblock</th>
          <th>Top user</th>
        </tr>
        {users.map((user: any, ind: any) => (
          <UserItem user={user} key={ind} />
        ))}
      </table>
    </div>
  );
};

export default UsersList;
