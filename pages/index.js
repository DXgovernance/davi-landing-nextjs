import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "../styles/global.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <link rel="icon" href="public/favicon.ico" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>
      <header>
        <img
          src="../public/project_davi_logo_black.svg"
          alt="project-davi"
          class="title-image"
        />
      </header>
      <body>
        <div class="floating-dxdao"></div>
        <div class="square-container-mobile">
          <img
            src="../public/squares.png"
            alt="square-davi"
            class="square-img"
          />
        </div>
        <div class="container-fluid d-flex h-100 w-80 mx-auto flex-column">
          <main role="main" class="cover">
            <div class="modal-body row">
              <div class="main-text-container col-md-6">
                <div class="heading-main-text">
                  THE NEXT GENERATION OF DAO GOVERNANCE
                </div>
                <div class="main-text-body">
                  A decentralized on-chain governance interface for DAOs.
                </div>
                <div class="main-text-subtitle">
                  Bringing accessible autonomy to the masses
                </div>
                <a
                  href="https://app.projectdavi.eth.limo/#/"
                  class="button btn btn-primary btn-lg"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  TRY THE DAPP
                  <img src="public/arrow.png" alt="arrow" class="arrow" />
                </a>
              </div>
              <div class="square-container-desktop col-md-6">
                <img
                  src="public/squares.png"
                  alt="square-davi"
                  class="square-img"
                />
              </div>
            </div>
          </main>
          <section class="info-box-section">
            <article class="modal-body row info-box-article">
              <img
                src="../public/black-62.png"
                alt="black-hat"
                class="info-box-item col-md-6"
              />
              <div class="col-md-6 info-box-item">
                <div class="info-box-title">Create action packed proposals</div>
                <div class="info-box-description">
                  DAVI makes on-chain governance <strong> accessible</strong>,
                  whether building proposals or voting on them,
                  <strong>everybody</strong> can partake in governance.
                </div>
              </div>
            </article>
            <article class="modal-body row info-box-article">
              <img
                src="public/black-90.png"
                alt="black-circles"
                class="black-90-mobile info-box-item col-md-6"
              />
              <div class="col-md-6 info-box-item">
                <div class="info-box-title">YOUR DAO YOUR WAY</div>
                <div class="info-box-description">
                  DAVI supports multiple type of DAOs. From normal ERC20, to
                  soulbound, even a hybrid system.
                  <strong>handle it your way</strong> with DAVI.
                  <br />
                  <strong> Want your DAO on DAVI?</strong>{" "}
                  <a
                    href="https://davi.canny.io"
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    let us know
                  </a>
                </div>
              </div>
              <img
                src="public/black-90.png"
                alt="black-circles"
                class="black-90-desktop info-box-item col-md-6"
              />
            </article>
            <article class="modal-body row info-box-article">
              <img
                src="public/black-7.png"
                alt="black-7"
                class="info-box-item col-md-6"
              />
              <div class="col-md-6 info-box-item">
                <div class="info-box-title">Social</div>
                <div class="info-box-description">
                  DAVI recognizes that not everything can be on chain. So we
                  also include a built in forum closely integrated with
                  governance.
                  <br />
                  Built on orbis and ceramic, decentralization is at the core of
                  what we do.
                </div>
              </div>
            </article>
          </section>
        </div>
        <section class="socials">
          <div class="bottom-modal-top">
            <div class="sub-titles">Fully Decentralized</div>
            <div class="sub-title-primary">Autonomy for all communities</div>
            <div class="sub-titles">Your DAO your way</div>
          </div>
          <div class="bottom-modal-bottom">
            <article class="modal-body row info-box-article">
              <img
                src="public/black-90.png"
                alt="black-circles"
                class="black-90-desktop info-box-item col-md-6"
              />
              <div class="col-md-6 info-box-item">
                <div class="info-box-title">
                  Want to see what a DAO can really do?
                </div>
                <div class="info-box-description">
                  If you are intrigued by accessible autonomy, flexibility to
                  choose your DAO platform or integrated community tools then
                  give it a go.
                  <br />
                  {/* DXdao's vision to enable community freedom is being lead by
                  DAVI and we want you to be one of those communities */}
                </div>
                <a
                  href="https://app.projectdavi.eth.limo/#/"
                  class="button btn btn-primary btn-lg"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Enable sovereignty for your community
                  <img src="public/arrow.png" alt="arrow" class="arrow" />
                </a>
              </div>
            </article>
          </div>
        </section>
        <div class="socials-section">
          <a
            href="https://twitter.com/ProjectDAVI"
            class="btn-social button btn btn-primary btn-lg"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            TWITTER
            <img src="public/arrow.png" alt="arrow" class="arrow" />
          </a>
          <a
            href="https://discord.gg/4QXEJQkvHH"
            class="btn-social button btn btn-primary btn-lg"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            DISCORD
            <img src="public/arrow.png" alt="arrow" class="arrow" />
          </a>
          <a
            href="https://github.com/DXgovernance"
            class="btn-social button btn btn-primary btn-lg"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <img src="public/arrow.png" alt="arrow" class="arrow" />
          </a>
        </div>
      </body>
    </>
  );
}
