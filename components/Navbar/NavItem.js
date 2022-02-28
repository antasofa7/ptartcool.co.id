import Link from 'next/link';

export default function NavItem(props) {
  const {
    name, link, active,
  } = props;

  return (
    <Link href={link}>
        <a className={`navLink ${active && 'active'}`}>{name}</a>
    </Link>
  );
}
