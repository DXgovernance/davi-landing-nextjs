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
  // const [selectedTab, setSelectedTab] = useState(1);
  const [email, setEmail] = useState();
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  console.log({ lang });
  // const tabContent = ["decentralization", "autonomy", "flexible"];

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
                        placeholder={t("cta")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div>
                        <img
                          src="/enterArrow.png"
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
              className="info-box-item col-md-6"
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
              src={lang == "ja" ? "/ja1.png" : "/en1.png"}
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
              className="info-box-item col-md-6"
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
      {/* <div className="learn-more"> */}
      {/*  */}
      <section class="socials">
        <div class="socials-section">
          <a
            href="#"
            class="btn-social button btn btn-primary btn-lg"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            TWITTER
            <img src="assets/arrow.png" alt="arrow" class="arrow" />
          </a>
          <a
            href="https://discord.gg/4QXEJQkvHH"
            class="btn-social button btn btn-primary btn-lg"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            DISCORD
            <img src="assets/arrow.png" alt="arrow" class="arrow" />
          </a>
          <a
            href="https://github.com/DXgovernance"
            class="btn-social button btn btn-primary btn-lg"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <img src="assets/arrow.png" alt="arrow" class="arrow" />
          </a>
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
          <img src="/arrow.png" alt="arrow" className="arrow" />
        </Link>
        <Link
          href="https://project-davi.dev/#/gnosis/"
          className="btn-social button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          DEMO
          <img src="/arrow.png" alt="arrow" className="arrow" />
        </Link>
        <Link
          href="https://discord.gg/4QXEJQkvHH"
          className="btn-social button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          DISCORD
          <img src="/arrow.png" alt="arrow" className="arrow" />
        </Link>
      </div>
      {/* <footer className="footer">
        <div className="link-block">
          <h2>ABOUT</h2>
          <span className="separator"></span>
          <Link
            href="https://github.com/DXgovernance"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
          <Link
            href="https://github.com/DXgovernance/dxdao-contracts/tree/develop/docs"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Audits
          </Link>
          <Link
            href="https://dxgov.info"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Notion
          </Link>
          <Link
            href="https://davi.canny.io"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Suggest a feature
          </Link>
          <span className="separator"></span>
        </div>
        <div className="link-block">
          <h2>SOCIAL</h2>
          <span className="separator"></span>
          <Link
            href="https://twitter.com/ProjectDAVI"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="https://discord.gg/4QXEJQkvHH"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </Link>
          <Link
            href="https://keybase.io/team/dx_dao"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Keybase
          </Link>
          <span className="separator"></span>
        </div>
        <div className="link-block">
          <h2>THE TEAM</h2>
          <span className="separator"></span>
          <Link
            href="https://app.projectdavi.eth.limo/#/gnosis/0x3f842726188FcD932d43bcA291be28138228e6D9/"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            DXgov Guild
          </Link>
          <Link
            href="https://rossneilson.notion.site/e23da14c4b1441bd933c271cfa0b4ddb?v=81759150e3c14779a9e054fd817e85f4"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Roadmap
          </Link>
          <Link
            href="https://discord.com/channels/795724884763738173/1014217927324606464"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Releases
          </Link>
          <Link
            href="https://dxdao.eth.limo"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            DXdao
          </Link>
          <span className="separator"></span>
        </div>
        <script
          src="https://right-secure.project-davi.dev/script.js"
          data-site="RJPMQAGT"
          defer
        ></script>
      </footer> */}

      <LanguageSwitcher lang={lang == "ja" ? "en" : "ja"}>
        Switch language
      </LanguageSwitcher>
      <strong className="madeBy">{t("madeBy")}</strong>
    </>
  );
}
