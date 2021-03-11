import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy-data';

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) return <p className="center">Loading...</p>;

  const [year, month] = filterData;

  const numYear = parseInt(year);
  const numMonth = parseInt(month);

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <EventList events={filteredEvents} />
    </div>
  );
}
