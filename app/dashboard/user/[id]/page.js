import React from "react";

const UserDetail = async ({ params }) => {
  const { id } = await params;
  return <div>Showing detail for user: ${id}</div>;
};

export default UserDetail;
