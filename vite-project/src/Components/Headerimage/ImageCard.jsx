import styles from './headerimg.module.scss'

export const ImageCard = ({ url, alt, caption }) => {
    return (
      <figure>
        <img className={styles.headerimg} src={url} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    );
  };