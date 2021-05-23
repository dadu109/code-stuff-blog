import s from './index.module.scss'

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.greeting}>
        <div className={s.greetingHeading}>
          Cześć, jestem Dawid
        </div>
        <div className={s.greetingSubHeading}>
          a to mój blog o <span className={s.gradientPrimary}>programowaniu</span>.<br />
          Mam nadzieje że znajdziesz coś dla siebie<br />
          i zostaniesz na <span className={s.gradientSecondary}>dłużej</span>.
        </div>
      </div>


    </div>
  )
}

export default Home;
