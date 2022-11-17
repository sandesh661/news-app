import Head from 'next/head';
import { server } from '../config';
import UsersList from '../components/Users';

export default function Users({ users }: { users: any }) {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <UsersList users={users} />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch users from external API
  const res = await fetch(`${server}/users`);
  const users = await res.json();

  // Pass users to the page via props
  return { props: { users } };
}
