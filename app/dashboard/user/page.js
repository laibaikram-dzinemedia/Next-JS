import React from "react";
import Link from "next/link";

const Users = () => {
  return (
    <div>
      <h2> User Page</h2>
      <ul>
        <li>
          <Link href="/dashboard/user/`${id}`">user 1</Link>
        </li>
        <li>
          <Link href="/dashboard/user/2">user 2</Link>
        </li>
        <li>
          <Link href="/dashboard/user/3">user 3</Link>
        </li>
        <li>
          <Link href="/dashboard/user/4">user 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Users;
