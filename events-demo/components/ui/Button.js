import Link from 'next/link';

import classes from './Button.module.css';
export default function Button(props) {
  console.log(props);
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
}
