import usersStyles from '../styles/Users.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TopUsersList = ({ users }: { users: any }) => {
  const [topUsersList, setTopUserList] = useState<Number[]>([]);

  useEffect(() => {
    let topUserStr = localStorage.getItem('TopUsers');
    let topUsers = topUserStr ? JSON.parse(topUserStr) : [];
    setTopUserList(topUsers);
  }, []);

  return (
    <div className={usersStyles.userTable}>
      {topUsersList && topUsersList.length ? (
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>More details</th>
          </tr>
          {users.map((user: any) => {
            if (topUsersList.includes(user.id))
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className={usersStyles.viewLink} href={`${'/user/' + user.id}`}>
                      View
                    </Link>
                  </td>
                </tr>
              );
            return null;
          })}
        </table>
      ) : (
        <p className="textCenter">No data found</p>
      )}
    </div>
  );
};

export default TopUsersList;
