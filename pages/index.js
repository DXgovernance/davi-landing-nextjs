/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
// import img from "next/img";
import Link from "next/link";
import { useState } from "react";
import { useTranslation, LanguageSwitcher } from "next-export-i18n";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [email, setEmail] = useState();
  const { t } = useTranslation();

  const tabContent = ["decentralization", "autonomy", "flexible"];

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
      <div
        className="floating-dxdao"
        onClick={() => window.open("https://dxdao.eth.limo", "_blank")}
      ></div>
      <div className="square-container-mobile">
        <video width="320" height="240" loop autoPlay>
          <source src="./movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container-fluid d-flex h-100 w-80 mx-auto flex-column">
        <main role="main" className="cover">
          <div className="modal-body row">
            <div className="main-text-container col-md-6">
              {/* <p className="heading-main-text">{t("nextGen")}</p> */}
              <p className="main-text-body">{t("title")}</p>
              <p className="main-text-subtitle">{t("subTitle")}</p>
              <Link
                href="https://app.projectdavi.eth.limo/#/"
                className="button btn btn-primary btn-lg"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                {t("cta")}
                <img src="/arrow.png" alt="arrow" className="arrow" />
              </Link>
            </div>
            <div className="square-container-desktop col-md-6">
              <video loop autoPlay muted>
                <source src="./movie.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </main>
        <section className="info-box-section">
          <article className="modal-body row info-box-article">
            <img
              src="/mac1.png"
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
              src="/mac2.png"
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
              src="/mac2.png"
              alt="mac-screenshot"
              className="black-90-desktop info-box-item col-md-6"
            />
          </article>
          <div className="modal-body row info-box-article">
            <img
              src="/mac3.png"
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
      <section className="learn-more">
        <div className="bottom-modal-top">
          <TabHeadings
            content={tabContent}
            active={selectedTab}
            changeTab={setSelectedTab}
            t={t}
          />
        </div>
        <div className="bottom-modal-bottom">
          <TabContent content={tabContent[selectedTab]} t={t} />
        </div>
      </section>
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
          href="https://discord.gg/4QXEJQkvHH"
          className="btn-social button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          DISCORD
          <img src="/arrow.png" alt="arrow" className="arrow" />
        </Link>
        <Link
          href="https://github.com/DXgovernance"
          className="btn-social button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
          <img src="/arrow.png" alt="arrow" className="arrow" />
        </Link>
      </div>
      <footer className="footer">
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
        <MailchimpSubscribe
          url={`https://limo.us14.list-manage.com/subscribe/post?u=7bb4af61551e82700ced40ce0&id=ddad2a9beb`}
          render={({ subscribe, status, message }) => (
            <div>
              <form>
                <div className="form-input">
                  <input
                    required
                    id="email-input"
                    name="email"
                    type="email"
                    placeholder="Sign up to learn more"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="sub-form-btn">
                  <button
                    disabled={status == "sending"}
                    type="submit"
                    className="form-btn"
                    onClick={() => subscribe({ EMAIL: email })}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              {message}
            </div>
          )}
        />
      </footer>
    </>
  );
}

function TabHeadings({ content, active, changeTab, t }) {
  return content.map((contentObj, index) => (
    <div
      key={index}
      onClick={() => changeTab(index)}
      className={active === index ? "sub-title-primary" : "sub-titles"}
    >
      <img
        src={`/${index}-${active === index ? "black" : "green"}.svg`}
        className="header-icon"
        alt="header-icon"
      />
      <p key={index} style={{ margin: "auto" }}>
        {t(`tabContent.${contentObj}.title`)}
      </p>
    </div>
  ));
}

function TabContent({ content, t }) {
  return (
    <div className="modal-body row info-box-article">
      <img
        src="/black-90.png"
        alt="black-circles"
        className="black-90-desktop info-box-item col-md-6"
      />
      <img
        src="/black-90.png"
        alt="black-circles"
        className="black-90-mobile info-box-item col-md-6"
      />
      <div className="col-md-6 info-box-item">
        <p className="info-box-title">{t(`tabContent.${content}.subtitle`)}</p>
        <p className="info-box-description">
          {t(`tabContent.${content}.body1`)}
          <br />
          {t(`tabContent.${content}.body2`)}
        </p>
        <Link
          href="https://app.projectdavi.eth.limo/#/"
          className="button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          {t(`tabContent.${content}.button`)}
          <img src="/arrow.png" alt="arrow" className="arrow" />
        </Link>
      </div>
    </div>
  );
}
