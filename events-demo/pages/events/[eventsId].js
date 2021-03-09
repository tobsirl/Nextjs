import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
export default function EventsDetailPage() {
  const { query } = useRouter();
  const event = getEventById(query.eventsId);
  
  if(!event) {
    return <p>No event found!</p>
  }
  return (
    <div>
      <h1>Event Detail Page</h1>
      <h3>Show Selected Event {query.eventsId}</h3>
    </div>
  );
}
