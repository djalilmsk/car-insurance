export default function UserInfo({ user }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md sm:w-[800px]">
      <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">
        Your Information :
      </h2>
      <div className="space-y-4">
        <div>
          <span className="font-medium text-primary">Name:</span> {user.name}
        </div>
        <div>
          <span className="font-medium text-primary">Last Name:</span>{' '}
          {user.lastName}
        </div>
        <div>
          <span className="font-medium text-primary">Phone:</span> {user.phone}
        </div>
        <div>
          <span className="font-medium text-primary">Email:</span> {user.email}
        </div>
      </div>
    </div>
  );
}
