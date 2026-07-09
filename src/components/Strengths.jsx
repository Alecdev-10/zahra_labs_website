import Reveal from './Reveal'
import styles from './Strengths.module.css'

const strengths = [
  {
    title: 'Pluridisciplinarité',
    desc: "Une capacité à intervenir simultanément sur les volets conseil, technologique, écologique et sanitaire d'un même projet.",
  },
  {
    title: 'Ancrage local, vision internationale',
    desc: "Une bonne connaissance du contexte béninois et sous-régional, associée à des standards de travail rigoureux.",
  },
  {
    title: 'Veille technologique continue',
    desc: "Une adaptation permanente aux évolutions de l'intelligence artificielle, du numérique et des pratiques durables.",
  },
  {
    title: 'Accompagnement de bout en bout',
    desc: "De l'étude préalable à la mise en œuvre, jusqu'au suivi post-livraison.",
  },
  {
    title: 'Approche sur mesure',
    desc: "Des solutions adaptées à la taille et aux moyens de chaque structure, des porteurs de projets aux organisations internationales.",
  },
  {
    title: 'Transfert de compétences',
    desc: "Une volonté constante de former et de rendre les équipes clientes autonomes.",
  },
]

export default function Strengths() {
  return (
    <section className={styles.section} id="atouts" aria-labelledby="strengths-title">
      <Reveal animation="fadeInUp">
        <div className={styles.header}>
          <p className="eyebrow">Nos points forts</p>
          <h2 className="section-title" id="strengths-title">
            Ce qui fait la différence.
          </h2>
        </div>
      </Reveal>
      <div className={styles.grid}>
        {strengths.map((s, i) => (
          <Reveal key={s.title} animation="popIn" delay={0.08 * i} threshold={0.1}>
            <div className={styles.card}>
              <span className={styles.marker} aria-hidden="true" />
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
