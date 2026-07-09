import { useState } from 'react'
import Reveal from './Reveal'
import ToggleBtn from './ToggleBtn'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); e.target.reset() }, 3500)
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.grid}>

        <Reveal animation="fadeInUp" className={styles.left}>
          <div>
            <p className={`eyebrow ${styles.label}`}>Contact</p>
            <h2 className={styles.h2} id="contact-title">Parlons de votre projet.</h2>
            <p className={styles.desc}>
              Un mot, une idée, un cahier des charges. On revient vers vous sous 48h ouvrées.
            </p>
            <div className={styles.info}>
              <div>
                <span className={styles.infoLabel}>Email</span>
                <a href="mailto:rachidiabdullahi19950@gmail.com" className={styles.infoValue}>rachidiabdullahi19950@gmail.com</a>
              </div>
              <div>
                <span className={styles.infoLabel}>Téléphone</span>
                <a href="tel:+22996959690" className={styles.infoValue}>+229 96 95 96 90</a>
              </div>
              <div>
                <span className={styles.infoLabel}>Adresse</span>
                <span className={styles.infoValue}>Abomey-Calavi, Bénin</span>
              </div>
              <div>
                <span className={styles.infoLabel}>RCCM</span>
                <span className={styles.infoValue}>RB/ABC/20 A 20765 — Cotonou (13/08/2020)</span>
              </div>
              <div>
                <span className={styles.infoLabel}>Greffe</span>
                <span className={styles.infoValue}>Tribunal de Commerce de Cotonou</span>
              </div>
              <div>
                <span className={styles.infoLabel}>Dirigeant</span>
                <span className={styles.infoValue}>ABOU Aboudou Rachidi</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal animation="slideInRight" delay={0.2} className={styles.formWrap}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input className={styles.input} type="text"  name="name"    placeholder="Votre nom"                    required autoComplete="name" />
            <input className={styles.input} type="email" name="email"   placeholder="Votre email"                  required autoComplete="email" />
            <input className={styles.input} type="text"  name="company" placeholder="Votre entreprise (optionnel)"          autoComplete="organization" />
            <textarea className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Décrivez votre projet…" required />
            <div>
              <ToggleBtn variant="light" onClick={handleSubmit}>
                {sent ? 'Message envoyé ✓' : 'Envoyer le message'}
              </ToggleBtn>
            </div>
          </form>
        </Reveal>

      </div>
    </section>
  )
}
