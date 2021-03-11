import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) return <p className="center">Loading...</p>;

  const [year, month] = filterData;

  const numYear = parseInt(year);
  const numMonth = parseInt(month);
  
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  console.log(filteredEvents);

  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
}
