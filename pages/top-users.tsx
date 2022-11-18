import Head from 'next/head';
import TopUsersList from '../components/TopUsers';
import { server } from '../config';

export default function TopUsers({ users }: { users: any }) {
  return (
    <div>
      <Head>
        <title>Top Users</title>
      </Head>
      <h1>Top Users</h1>
      <TopUsersList users={users} />
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
