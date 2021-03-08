import EventItem from './EventItem';

import classes from './EventList.module.css'
export default function EventList(props) {
  const { events } = props;
  // console.log(events);
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}
