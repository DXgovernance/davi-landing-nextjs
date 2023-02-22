import Head from "next/head";
// import img from "next/img";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(1);

  const tabContent = [
    {
      title: "Fully Decentralized",
      subtitle: "Decentralized but for real",
      body1: "On chain governance as a first class citizen.",
      body2:
        "With RPC backups ontop decentralized subgraph and even our discussions using orbis and ceramic",
      button: "Try real decentralization",
    },
    {
      title: "Autonomy for all Communities",
      subtitle: "Want to see what a DAO can really do?",
      body1:
        "If you are intrigued by accessible autonomy, flexibility to choose your DAO platform or integrated community tools then give it a go.",
      body2:
        "DXdao's vision to enable community freedom is being lead by DAVI and we want you to be one of those communities",
      button: "Enable your community",
    },
    {
      title: "Your DAO your Way",
      subtitle: "Have specific needs?",
      body1: "There are a lot of DAO solutions out there, DAVI aims to .",
      body2:
        "From liquid ERC20 governance, to soulbound reputation, hybrid systems and even more coming soon.",
      button: "Choose your DAO",
    },
  ];

  return (
    <>
      <Head>
        <title>Project DAVI</title>
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
      <div class="floating-dxdao"></div>
      <div class="square-container-mobile">
        <img src="/squares.png" alt="square-davi" class="square-img" />
      </div>
      <div class="container-fluid d-flex h-100 w-80 mx-auto flex-column">
        <main role="main" class="cover">
          <div class="modal-body row">
            <div class="main-text-container col-md-6">
              <p class="heading-main-text">
                THE NEXT GENERATION OF DAO GOVERNANCE
              </p>
              <p class="main-text-body">
                A decentralized on-chain governance interface for DAOs.
              </p>
              <p class="main-text-subtitle">
                Bringing accessible autonomy to the masses
              </p>
              <Link
                href="https://app.projectdavi.eth.limo/#/"
                class="button btn btn-primary btn-lg"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                TRY THE DAPP
                <img src="/arrow.png" alt="arrow" class="arrow" />
              </Link>
            </div>
            <div class="square-container-desktop col-md-6">
              <img src="/squares.png" alt="square-davi" class="square-img" />
            </div>
          </div>
        </main>
        <section class="info-box-section">
          <article class="modal-body row info-box-article">
            <img
              src="/black-62.png"
              alt="black-hat"
              class="info-box-item col-md-6"
              onClick={() => console.log("go to dxdao limo")}
            />
            <div class="col-md-6 info-box-item">
              <p class="info-box-title">Create action packed proposals</p>
              <p class="info-box-description">
                DAVI makes on-chain governance <strong> accessible</strong>,
                whether building proposals or voting on them,
                <strong>everybody</strong> can partake in governance.
              </p>
            </div>
          </article>
          <article class="modal-body row info-box-article">
            <img
              src="/black-90.png"
              alt="black-circles"
              class="black-90-mobile info-box-item col-md-6"
            />
            <div class="col-md-6 info-box-item">
              <p class="info-box-title">YOUR DAO YOUR WAY</p>
              <p class="info-box-description">
                DAVI supports multiple type of DAOs. From normal ERC20, to
                soulbound, even a hybrid system.
                <strong>Handle it your way</strong> with DAVI.
                <br />
                <strong> Want your DAO on DAVI?</strong>{" "}
                <Link
                  href="https://davi.canny.io"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  let us know
                </Link>
              </p>
            </div>
            <img
              src="/black-90.png"
              alt="black-circles"
              class="black-90-desktop info-box-item col-md-6"
            />
          </article>
          <div class="modal-body row info-box-article">
            <img
              src="/black-7.png"
              alt="black-7"
              class="info-box-item col-md-6"
            />
            <div class="col-md-6 info-box-item">
              <p class="info-box-title">Social</p>
              <p class="info-box-description">
                DAVI recognizes that not everything can be on chain. So we also
                include a built in forum closely integrated with governance.
                <br />
                Built on orbis and ceramic, decentralization is at the core of
                what we do.
              </p>
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
          />
        </div>
        <div class="bottom-modal-bottom">
          <TabContent content={tabContent[selectedTab]} />
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

function TabHeadings({ content, active, changeTab }) {
  return content.map((contentObj, index) => (
    <p
      onClick={() => changeTab(index)}
      key={index}
      class={active === index ? "sub-title-primary" : "sub-titles"}
    >
      {contentObj.title}
    </p>
  ));
}

function TabContent({ content }) {
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
        <p class="info-box-title">{content.subtitle}</p>
        <p class="info-box-description">
          {content.body1}
          <br />
          {content.body2}
        </p>
        <Link
          href="https://app.projectdavi.eth.limo/#/"
          class="button btn btn-primary btn-lg"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          {content.button}
          <img src="/arrow.png" alt="arrow" class="arrow" />
        </Link>
      </div>
    </div>
  );
}
