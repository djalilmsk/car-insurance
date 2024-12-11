export default function PurchaseHistory({ history }) {
  return (
    <div className="rounded bg-white p-6 shadow-md sm:w-[800px]">
      <h2 className="mb-4 text-lg font-bold text-primary">Purchase History</h2>
      <ul className="divide-y divide-gray-200">
        {history.map((item, index) => (
          <li key={index} className="py-2">
            <p>
              <strong className="text-primary">Date:</strong> {item.date}
            </p>
            <p>
              <strong className="text-primary">Type:</strong> {item.type}
            </p>
            <p>
              <strong className="text-primary">Details:</strong> {item.details}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
