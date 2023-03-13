import styles from './Item.module.scss'; 
import { Prato } from 'types/Pratos';
import TagsPratos from 'components/TagsPratos';


export default function Item(props: Prato ) {
  const { title, description, photo } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p>  {description} </p>
        </div>
        <TagsPratos {...props} />
      </div>
    </div>
  );
}