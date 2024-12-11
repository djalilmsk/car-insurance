export default function UserInfo({ user }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md sm:w-[800px]">
      <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">
        Your Information :
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className=" font-medium uppercase text-primary">
            Name :
          </span>{' '}
          {user.fullName}
        </div>
        <div className="flex justify-between">
          <span className="font-medium uppercase text-primary">
            Phone :
          </span>{' '}
          {user.phone}
        </div>
        <div className="flex justify-between">
          <span className="font-medium uppercase text-primary">
            Email :{' '}
          </span>{' '}
          {user.email}
        </div>
        <div className="flex justify-between">
          <span className="font-medium uppercase text-primary">
            Address :
          </span>{' '}
          {user.address}
        </div>
      </div>
    </div>
  );
}
