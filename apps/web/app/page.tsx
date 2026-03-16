import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className="gradient-text">STAR SEVEN</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#cursos" className={styles.navLink}>Cursos</a>
          <a href="#" className={styles.navLink}>Empresas</a>
          <a href="#" className={styles.navLink}>Nosotros</a>
        </div>
        <div className={styles.navActions}>
          <a href="https://app.starseven.com.co/login" className={styles.btnSecondary} style={{ padding: '8px 24px' }}>
            Ingresar
          </a>
        </div>
      </nav>

      <section className={styles.hero}>
        {/* Decoración CSS pura — sin imágenes externas para máxima velocidad */}
        <div className={styles.heroBg}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.orb3} />
          <div className={styles.grid} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>🚀 Apertura de Inscripciones 2026</span>
          <h1 className={`${styles.title} gradient-text`}>
            Domina el Futuro Tecnológico.
          </h1>
          <p className={styles.description}>
            Formación técnica certificada con expertos de la industria. Aprende desarrollo,
            arquitectura de software y gestión de proyectos con una metodología 100% práctica.
          </p>
          <div className={styles.ctas}>
            <a href="https://app.starseven.com.co/signup" className={styles.btnPrimary}>
              Comenzar ahora →
            </a>
            <a href="#cursos" className={styles.btnSecondary}>
              Ver catálogo
            </a>
          </div>
        </div>
      </section>

      <section className={styles.features} id="cursos">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestros Programas</h2>
          <p className={styles.sectionSubtitle}>Formación práctica orientada al mercado laboral tecnológico</p>
        </div>
        <div className={styles.featureGrid}>
          <div className={`${styles.featureCard} glass`}>
            <div className={styles.featureIcon}>☁️</div>
            <h3 className={styles.featureTitle}>Arquitectura Cloud</h3>
            <p className={styles.featureText}>
              Aprende a diseñar sistemas escalables y resilientes en las nubes más importantes.
            </p>
          </div>
          <div className={`${styles.featureCard} glass`}>
            <div className={styles.featureIcon}>🛡️</div>
            <h3 className={styles.featureTitle}>Ciberseguridad</h3>
            <p className={styles.featureText}>
              Protege infraestructuras críticas y conviértete en un experto en seguridad digital.
            </p>
          </div>
          <div className={`${styles.featureCard} glass`}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>FullStack JS</h3>
            <p className={styles.featureText}>
              Domina el ecosistema de JavaScript moderno desde el frontend hasta el backend.
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 Star Seven</span>
        <span className={styles.footerSep}>—</span>
        <span>Elevando el estándar educativo regional.</span>
      </footer>
    </div>
  );
}
