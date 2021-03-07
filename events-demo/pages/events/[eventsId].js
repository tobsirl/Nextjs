import { useRouter } from 'next/router';
export default function EventsDetailPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Event Detail Page</h1>
      <h3>Show Selected Event {router.query.eventsId}</h3>
    </div>
  );
}
