import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.postHeader}>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="logo" />
          <h2>esperafeliznoticias </h2>
          <img src="/coffe.png" alt="coffe" />
        </a>
      </Link>
    </header>
  );
}
