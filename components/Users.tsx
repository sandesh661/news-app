import UserItem from './UserItem';
import usersStyles from '../styles/Users.module.css';

const UsersList = ({ users }: { users: any }) => {
  return (
    <div className={usersStyles.userTable}>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Block/Unblock</th>
        </tr>
        {users.map((user: any, ind: any) => (
          <UserItem user={user} key={ind} />
        ))}
      </table>
    </div>
  );
};

export default UsersList;
