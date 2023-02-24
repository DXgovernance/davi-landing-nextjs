import Head from "next/head";
// import img from "next/img";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(1);
  const { t } = useTranslation();
  const router = useRouter();

  const tabContent = ["decentralization", "autonomy", "flexible"];

  return (
    <>
      <Head>
        <title>{t("projectDavi")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charset="utf-8" />
        <meta name="description" content="DAVI Landing" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>
      <header>
        <img
          src="/project_davi_logo_black.svg"
          alt="project-davi"
          class="title-image"
        />
      </header>
      <div
        class="floating-dxdao"
        onClick={() => window.open("https://dxdao.eth.limo", "_blank")}
      ></div>
      <div class="square-container-mobile">
        <img src="/400px.gif" alt="square-davi" class="square-img" />
      </div>
      <div class="container-fluid d-flex h-100 w-80 mx-auto flex-column">
        <main role="main" class="cover">
          <div class="modal-body row">
            <div class="main-text-container col-md-6">
              {/* <p class="heading-main-text">{t("nextGen")}</p> */}
              <p class="main-text-body">{t("title")}</p>
              <p class="main-text-subtitle">{t("subTitle")}</p>
              <Link
                href="https://app.projectdavi.eth.limo/#/"
                class="button btn btn-primary btn-lg"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                {t("cta")}
                <img src="/arrow.png" alt="arrow" class="arrow" />
              </Link>
            </div>
            <div class="square-container-desktop col-md-6">
              <img src="/400px.gif" alt="square-davi" class="square-img" />
            </div>
          </div>
        </main>
        <section class="info-box-section">
          <article class="modal-body row info-box-article">
            <img
              src="/mac1.png"
              alt="mac-screenshot"
              class="info-box-item col-md-6"
            />
            <div class="col-md-6 info-box-item">
              <p class="info-box-title">
                {t("featureHighlights.actionBuilder.title")}
              </p>
              <div
                class="info-box-description"
                dangerouslySetInnerHTML={{
                  __html: t("featureHighlights.actionBuilder.description"),
                }}
              />
            </div>
          </article>
          <article class="modal-body row info-box-article">
            <img
              src="/mac2.png"
              alt="mac-screenshot"
              class="black-90-mobile info-box-item col-md-6"
            />
            <div class="col-md-6 info-box-item">
              <p class="info-box-title">
                {t("featureHighlights.flexible.title")}
              </p>
              <div class="info-box-description">
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
              class="black-90-desktop info-box-item col-md-6"
            />
          </article>
          <div class="modal-body row info-box-article">
            <img
              src="/mac3.png"
              alt="mac-screenshot"
              class="info-box-item col-md-6"
            />
            <div class="col-md-6 info-box-item">
              <p class="info-box-title">
                {t("featureHighlights.social.title")}
              </p>
              <div
                class="info-box-description"
                dangerouslySetInnerHTML={{
                  __html: t("featureHighlights.social.description"),
                }}
              />
            </div>
          </div>
        </section>
      </div>
      <section class="learn-more">
        <div class="bottom-modal-top">
          <TabHeadings
            content={tabContent}
            active={selectedTab}
            changeTab={setSelectedTab}
            t={t}
          />
        </div>
        <div class="bottom-modal-bottom">
          <TabContent content={tabContent[selectedTab]} t={t} />
        </div>
      </section>
      <div class="socials-section">
        <Link
          href="https://twitter.com/ProjectDAVI"
          class="btn-social button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          TWITTER
          <img src="/arrow.png" alt="arrow" class="arrow" />
        </Link>
        <Link
          href="https://discord.gg/4QXEJQkvHH"
          class="btn-social button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          DISCORD
          <img src="/arrow.png" alt="arrow" class="arrow" />
        </Link>
        <Link
          href="https://github.com/DXgovernance"
          class="btn-social button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
          <img src="/arrow.png" alt="arrow" class="arrow" />
        </Link>
      </div>
      <footer class="footer">
        <div class="link-block">
          <h2>ABOUT</h2>
          <span class="separator"></span>
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
          <span class="separator"></span>
        </div>
        <div class="link-block">
          <h2>SOCIAL</h2>
          <span class="separator"></span>
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
          <span class="separator"></span>
        </div>
        <div class="link-block">
          <h2>THE TEAM</h2>
          <span class="separator"></span>
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
          <span class="separator"></span>
        </div>
      </footer>
    </>
  );
}

function TabHeadings({ content, active, changeTab, t }) {
  console.log({ active });
  return content.map((contentObj, index) => (
    <div
      key={index}
      onClick={() => changeTab(index)}
      class={active === index ? "sub-title-primary" : "sub-titles"}
    >
      <img
        src={`/${index}-${active === index ? "black" : "green"}.svg`}
        class="header-icon"
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
    <div class="modal-body row info-box-article">
      <img
        src="/black-90.png"
        alt="black-circles"
        class="black-90-desktop info-box-item col-md-6"
      />
      <img
        src="/black-90.png"
        alt="black-circles"
        class="black-90-mobile info-box-item col-md-6"
      />
      <div class="col-md-6 info-box-item">
        <p class="info-box-title">{t(`tabContent.${content}.subtitle`)}</p>
        <p class="info-box-description">
          {t(`tabContent.${content}.body1`)}
          <br />
          {t(`tabContent.${content}.body2`)}
        </p>
        <Link
          href="https://app.projectdavi.eth.limo/#/"
          class="button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          {t(`tabContent.${content}.button`)}
          <img src="/arrow.png" alt="arrow" class="arrow" />
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}
