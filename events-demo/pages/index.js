import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Starting Page</h1>
      <h3>Show featured Events</h3>
      <EventList events={featuredEvents} />
    </div>
  );
}
