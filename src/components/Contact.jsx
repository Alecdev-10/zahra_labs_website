import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal'
import ToggleBtn from './ToggleBtn'
import styles from './Contact.module.css'

// Configurez ces 3 valeurs depuis votre tableau de bord EmailJS (emailjs.com)
// 1. Créez un compte gratuit et ajoutez votre service Gmail / email
// 2. Créez un modèle d'email avec les variables : {{from_name}}, {{from_email}}, {{company}}, {{message}}
// 3. Copiez dans le fichier .env l'ID du service, l'ID du modèle et la clé publique dans les vvariables adéquates.

const EMAILJS_SERVICE_ID  = 'Votre_serviceID'
const EMAILJS_TEMPLATE_ID = 'Votre_template_ID'
const EMAILJS_PUBLIC_KEY  = 'Votre_cle_publique'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('sent')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const btnLabel =
    status === 'sending' ? 'Envoi en cours…'
    : status === 'sent'  ? 'Message envoyé ✓'
    : status === 'error' ? 'Erreur — réessayez'
    : 'Envoyer le message'

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
                <a href="mailto:zahralabs@gmail.com" className={styles.infoValue}>zahralabs@gmail.com</a>
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
          <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
            <input className={styles.input} type="text"  name="from_name"    placeholder="Votre nom"                    required autoComplete="name" />
            <input className={styles.input} type="email" name="from_email"   placeholder="Votre email"                  required autoComplete="email" />
            <input className={styles.input} type="text"  name="company"      placeholder="Votre entreprise (optionnel)"          autoComplete="organization" />
            <textarea className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Décrivez votre projet…" required />
            <div>
              <ToggleBtn variant="light" type = "submit" href=''>
                {btnLabel}
              </ToggleBtn>
            </div>
          </form>
        </Reveal>

      </div>
    </section>
  )
}
