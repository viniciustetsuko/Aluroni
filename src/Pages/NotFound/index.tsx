import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'Assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'Styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate('/')}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
  );
}
