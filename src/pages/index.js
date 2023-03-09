import Head from "next/head"
import styles from "../styles/Homepage.module.scss"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>UBC | Utah Baseball Club</title>
        <meta
          name="description"
          content="We are UBC. | Utah Baseball Club | South Jordan, West Jordan, Sandy, West Valley"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main className={styles.homepage}>
        <section className={styles["hero-container"]}>
          <div className={styles["hero-content"]}>
            <div className={styles.wordmark}>
              <Image src="/ubc_wordmark.png" alt="UBC" fill />
            </div>
            <p>
              <span class="uppercase">Utah Baseball Club | </span>
              <span class="thin-text">
                South Jordan &#x2022; West Jordan &#x2022; Sandy &#x2022; West
                Valley
              </span>
            </p>
          </div>
        </section>
        <section className={styles.introduction}>
          <div className={styles.container}>
            <h2>We are UBC.</h2>
            <p>
              The UBC program was built to help progress youth baseball in Utah.
            </p>
            <p>
              Coach Q started the program from scratch at the end of 2022 with
              an idea&mdash;teaching the new way of baseball to local youth. Our
              goal is to advance kids with baseball knowledge and prepare them
              for a future in baseball and life. We expect not only for our
              athletes to perform on the field but also off.
            </p>
            <p>Welcome to our website!</p>
          </div>
        </section>
        <section className={styles.news}>
          <div className={styles.container}>
            <h2>News & Events</h2>
            <p>Visit our blog for news, events, and all the latest updates.</p>
            <div className={styles["subscribe-box"]}>
              <iframe
                src="https://utahbaseballclub.substack.com/embed"
                width="480"
                height="320"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </section>
        {/* <section>
          <div className={styles.container}>
            <h2>Events</h2>
          </div>
        </section> */}
        <section className={styles.links}>
          <div className={styles.container}>
            <h2>Support UBC</h2>
            <p>
              As an independent nonprofit baseball team, UBC players and parents
              are responsible for fundraising to pay for all baseball activities
              and equipment. We rely on the generosity of our families, friends,
              and fans. We are grateful to each and every person who helps us to
              succeed.
            </p>
            <div className={styles["donate-box"]}>
              <p>
                Use the button below to make a donation to UBC. <br />
                <span
                  className={`${styles["small-text"]} italicized thin-text`}
                >
                  Payments are processed via Stripe.
                </span>
              </p>
              <form
                action="https://donate.stripe.com/bIYeYu0mO5lg5aw5kk"
                method="get"
                target="_blank"
              >
                <button type="submit">Donate to UBC</button>
              </form>
            </div>
            <p>Thank you very much for your support!</p>
          </div>
        </section>
        <section className={styles.peek}></section>
        <section className={styles.sponsors}>
          <div className={styles.container}>
            <h2>2023 Sponsors</h2>
            <div className={styles["sponsor-grid"]}>
              <div>
                <div className={styles["sponsor-logo"]}>
                  <Image
                    src="/sponsors/Built-Rite-Logo.png"
                    alt="Built-Rite"
                    fill
                  />
                </div>
              </div>
              <div>
                <div className={styles["sponsor-logo"]}>
                  <Image
                    src="/sponsors/Guthrie-Chiropractic-Logo.png"
                    alt="Guthrie Chiropractic"
                    fill
                  />
                </div>
              </div>
              <div>
                <div className={styles["sponsor-logo"]}>
                  <Image
                    src="/sponsors/Larsen-Rico-Logo.png"
                    alt="Larsen & Rico"
                    fill
                  />
                </div>
              </div>
              <div>
                <div className={styles["sponsor-logo"]}>
                  <Image
                    src="/sponsors/Poise-Dance-Logo.png"
                    alt="Poise Dance"
                    fill
                  />
                </div>
              </div>
              <div>
                <div className={styles["sponsor-logo"]}>
                  <Image
                    src="/sponsors/Reading-Pediatric-Logo.png"
                    alt="Reading Pediatric Dentistry"
                    fill
                  />
                </div>
              </div>
              <div>
                <div className={styles["sponsor-logo"]}>
                  <Image src="/sponsors/Servpro-Logo.png" alt="Servpro" fill />
                </div>
              </div>
              <div>
                <div className={styles["sponsor-logo"]}>
                  <Image
                    src="/sponsors/Strang-Maintenance-Logo.png"
                    alt="Strang Maintenance"
                    fill
                  />
                </div>
              </div>
              <div>
                <div className={styles["sponsor-logo"]}>
                  <Image
                    src="/sponsors/Structured-Plus-Logo.png"
                    alt="Structured Plus Communications Inc."
                    fill
                  />
                </div>
              </div>
              <div>
                <div className={styles["sponsor-logo"]}>
                  <Image
                    src="/sponsors/SWCA-Logo.png"
                    alt="Surgical Wound Care Associates"
                    fill
                  />
                </div>
              </div>
              <div>
                <span className={styles["no-logo"]}>Al & Johie Rico</span>
              </div>
              <div>
                <span className={styles["no-logo"]}>Ann & Francis Pryor</span>
              </div>
              <div>
                <span className={styles["no-logo"]}>Celine MacDonald</span>
              </div>
              <div>
                <span className={styles["no-logo"]}>Dom Building</span>
              </div>
              <div>
                <span className={styles["no-logo"]}>Dom Construction</span>
              </div>
              <div>
                <span className={styles["no-logo"]}>Tom & Libbie Hamann</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <span>&copy;{new Date().getFullYear()} Utah Baseball Club</span>
          <span className="italicized thin-text">
            UBC is a registered 501(c)(3) nonprofit.
          </span>
        </div>
      </footer>
    </>
  )
}
