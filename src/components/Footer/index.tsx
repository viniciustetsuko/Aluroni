import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'Assets/logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
}