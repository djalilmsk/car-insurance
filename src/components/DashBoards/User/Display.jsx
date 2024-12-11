export default function UserInfo({ user }) {
  return (
    <div className="rounded bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-bold">User Information</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Last Name:</strong> {user.lastName}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}
