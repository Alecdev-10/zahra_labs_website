import styles from './Team.module.css'

const members = [
  { name: 'Membre équipe',       role: 'CTO · Tech & Innovation', av: 'av1', tilt: 'tiltLeft' },
  { name: 'ABOU Aboudou Rachidi', role: 'Fondateur · CEO',         av: 'av2', tilt: '', founder: true },
  { name: 'Membre équipe',       role: 'COO · Opérations',        av: 'av3', tilt: 'tiltRight' },
]

export default function Team() {
  return (
    <section className={styles.section} id="equipe" aria-labelledby="team-title">
      <div className={styles.layout}>
        <div className={styles.left}>
          <h2 className={styles.hl} id="team-title">
            Équipe dynamique, nous sommes attentifs sur le terrain avec la main dans le code pour satisfaire les clients.
          </h2>
          <p className={styles.desc}>
            Zara Labs est née d'une conviction simple : l'innovation technologique en
            Afrique de l'Ouest ne doit pas être un catalogue de buzzwords importés.
            Trois personnes, une seule méthode : écouter le terrain avant de coder.
          </p>
        </div>

        <div className={styles.cards}>
          {members.map((m) => (
            <div
              key={m.name + m.role}
              className={`
                ${styles.card}
                ${m.tilt ? styles[m.tilt] : ''}
                ${m.founder ? styles.founder : ''}
              `}
            >
              <div className={`${styles.avatar} ${styles[m.av]}`} role="img" aria-label={m.name} />
              <h5>{m.name}</h5>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
