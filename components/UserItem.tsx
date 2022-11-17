const UserItem = ({ user }: { user: any }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
    </tr>
  );
};

export default UserItem;
