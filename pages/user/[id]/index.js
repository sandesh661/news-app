import { server } from '../../../config';
import usersStyles from '../../../styles/Users.module.css';
import Link from 'next/link';

const user = ({ user }) => {
  return (
    <div>
      <h2 className="textCenter">User Info</h2>
      <div className={usersStyles.userTable}>
        <table>
          <tr>
            <td>Name: </td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Username: </td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Phone: </td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>website: </td>
            <td>{user.website}</td>
          </tr>
          <tr>
            <td>Company: </td>
            <td>{user.company.name}</td>
          </tr>
          <tr>
            <td>Address: </td>
            <td>
              {user.address.street},<br></br>
              {user.address.suite},<br></br>
              {user.address.city} - {user.address.zipcode}
            </td>
          </tr>
        </table>
      </div>
      <br />
      <div className="textCenter">
        <Link href="/users" className="customLink">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/users/${context.params.id}`);

  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/users`);

  const users = await res.json();

  const ids = users.map((user) => user.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default user;
