import EventItem from './EventItem';

export default function EventList(props) {
  const { events } = props;
  // console.log(events);
  return (
    <ul>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}
