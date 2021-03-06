import Link from 'next/link';
export default function ClientsPage() {
  const clients = [
    { id: '001', name: 'Paul' },
    { id: '002', name: 'Keith' },
    { id: '003', name: 'Simon' },
  ];

  const data = clients.map(({ id, name }) => (
    <li key={id}>
      <Link
        href={{
          pathname: '/clients/[id]',
          query: { id: id },
        }}
      >
        {name}
      </Link>
    </li>
  ));
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>{data}</ul>
    </div>
  );
}
