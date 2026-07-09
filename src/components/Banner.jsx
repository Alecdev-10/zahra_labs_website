import Reveal from './Reveal'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Reveal animation="fadeInUp">
        <p>La tech béninoise qui accélère les terrains,<br />du diagnostic à l'impact mesuré.</p>
      </Reveal>
    </div>
  )
}
