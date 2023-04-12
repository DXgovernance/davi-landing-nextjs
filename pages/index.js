/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
// import img from "next/img";
import Link from "next/link";
import { useState } from "react";
import {
  useTranslation,
  useSelectedLanguage,
  LanguageSwitcher,
} from "next-export-i18n";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function Home() {
  const [email, setEmail] = useState();
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();

  return (
    <>
      <Head>
        <title>{t("projectDavi")}</title>
      </Head>
      <header>
        <img
          src="/project_davi_logo_black.svg"
          alt="project-davi"
          className="title-image"
        />
      </header>
      <div className="square-container-mobile">
        <video
          loop
          autoPlay
          muted
          style={{ width: "300px", marginLeft: "1rem" }}
        >
          <source src="./movie.mov" type="video/quicktime" />
          <source src="./movie.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container-fluid d-flex h-100 w-80 mx-auto flex-column">
        <main role="main" className="cover">
          <div className="modal-body row">
            <div className="main-text-container col-md-6">
              <p className="main-text-body">{t("title")}</p>
              <p className="main-text-subtitle">{t("subTitle")}</p>

              <MailchimpSubscribe
                url={`https://limo.us14.list-manage.com/subscribe/post?u=7bb4af61551e82700ced40ce0&id=ddad2a9beb`}
                render={({ subscribe, status, message }) => (
                  <div>
                    <form className="inputWrapper">
                      <input
                        className="input"
                        required
                        id="email-input"
                        name="email"
                        type="email"
                        placeholder={t("signup.cta")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div>
                        <img
                          src="/arrowblack.svg"
                          alt="arrow"
                          className="arrow"
                          disabled={status == "sending"}
                          type="submit"
                          onClick={() => subscribe({ EMAIL: email })}
                        />
                      </div>
                    </form>
                    {message}
                  </div>
                )}
              />
            </div>
            <div className="square-container-desktop col-md-6">
              <video loop autoPlay muted>
                <source src="./movie.mov" type="video/quicktime" />
                <source src="./movie.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </main>
        <section className="info-box-section">
          <article className="modal-body row info-box-article">
            <img
              src={lang == "ja" ? "/ja1.png" : "/en1.png"}
              alt="mac-screenshot"
              className="black-90-desktop info-box-item col-md-6"
            />
            <img
              src={lang == "ja" ? "/ja1.png" : "/en1.png"}
              alt="mac-screenshot"
              className="black-90-mobile info-box-item col-md-6"
            />
            <div className="col-md-6 info-box-item">
              <p className="info-box-title">
                {t("featureHighlights.actionBuilder.title")}
              </p>
              <div
                className="info-box-description"
                dangerouslySetInnerHTML={{
                  __html: t("featureHighlights.actionBuilder.description"),
                }}
              />
            </div>
          </article>
          <article className="modal-body row info-box-article">
            <img
              src={lang == "ja" ? "/ja2.png" : "/en2.png"}
              alt="mac-screenshot"
              className="black-90-mobile info-box-item col-md-6"
            />
            <div className="col-md-6 info-box-item">
              <p className="info-box-title">
                {t("featureHighlights.flexible.title")}
              </p>
              <div className="info-box-description">
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("featureHighlights.flexible.description"),
                  }}
                />
                <Link
                  href="https://davi.canny.io"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("featureHighlights.flexible.extra")}
                </Link>
              </div>
            </div>
            <img
              src={lang == "ja" ? "/ja2.png" : "/en2.png"}
              alt="mac-screenshot"
              className="black-90-desktop info-box-item col-md-6"
            />
          </article>
          <div className="modal-body row info-box-article">
            <img
              src={lang == "ja" ? "/ja3.png" : "/en3.png"}
              alt="mac-screenshot"
              className="black-90-desktop info-box-item col-md-6"
            />
            <img
              src={lang == "ja" ? "/ja3.png" : "/en3.png"}
              alt="mac-screenshot"
              className="black-90-mobile info-box-item col-md-6"
            />
            <div className="col-md-6 info-box-item">
              <p className="info-box-title">
                {t("featureHighlights.social.title")}
              </p>
              <div
                className="info-box-description"
                dangerouslySetInnerHTML={{
                  __html: t("featureHighlights.social.description"),
                }}
              />
            </div>
          </div>
        </section>
      </div>
      {/*  */}
      <section className="socials">
        <div className="sign-up-modal">
          <div className="modal-body row info-box-article">
            <img
              src="/signup.png"
              alt="bubble-logo"
              className="black-90-desktop info-box-item col-md-6"
            />
            <div className="col-md-6 info-box-item">
              <p className="info-box-title">{t("signup.cta")}</p>
              <p className="info-box-description">{t("signup.why")}</p>
              <MailchimpSubscribe
                url={`https://limo.us14.list-manage.com/subscribe/post?u=7bb4af61551e82700ced40ce0&id=ddad2a9beb`}
                render={({ subscribe, status, message }) => (
                  <div>
                    <form className="inputWrapper">
                      <input
                        className="input"
                        required
                        id="email-input"
                        name="email"
                        type="email"
                        placeholder={t("signup.cta")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div>
                        <img
                          src="/arrowblack.svg"
                          alt="arrow"
                          className="arrow"
                          disabled={status == "sending"}
                          type="submit"
                          onClick={() => subscribe({ EMAIL: email })}
                        />
                      </div>
                    </form>
                    {message}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <div className="socials-section">
        <Link
          href="https://twitter.com/ProjectDAVI"
          className="btn-social button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          TWITTER
          <img src="/arrow.svg" alt="arrow" className="arrow" />
        </Link>
        <Link
          href="https://project-davi.dev/#/gnosis/"
          className="btn-social button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          DEMO
          <img src="/arrow.svg" alt="arrow" className="arrow" />
        </Link>
        <Link
          href="https://discord.gg/4QXEJQkvHH"
          className="btn-social button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          DISCORD
          <img src="/arrow.svg" alt="arrow" className="arrow" />
        </Link>
      </div>

      <div className="language-section">
        <div className={lang == "en" ? "language" : "language"}>
          <LanguageSwitcher lang={"en"}>ENG</LanguageSwitcher>
        </div>
        <div className={lang == "ja" ? "language" : "language"}>
          <LanguageSwitcher lang={"ja"}>日本語</LanguageSwitcher>
        </div>
      </div>
      <strong className="madeBy">{t("madeBy")}</strong>
    </>
  );
}
