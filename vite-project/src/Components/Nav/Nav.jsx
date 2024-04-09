import styles from './nav.module.scss'
export const Nav = () => {
  return (
    <>
    <nav className={styles.navwrapper}>
    <h1>TShop</h1>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    </nav>
    </>
  )
}
