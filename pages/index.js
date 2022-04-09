/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { IoIosArrowDown } from "react-icons/io";
import { BsPlayCircle, BsCheckCircleFill } from "react-icons/bs";
import { Header } from "./_components";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="home-first-section section center-flex">
          <div className="conic-circles">
            <div className="conic-circle-center"></div>
            <div className="conic-circle-1"></div>
          </div>
          <div className="home-first-section-presentation center-flex">
            <img src="/images/logo-center.png" alt="logo" />
            <h1>Elevate your editing experience.</h1>
            <p>Open source, free forever</p>
          </div>
          <div className="home-second-section-presentation center-flex">
            <button className="center-flex flex-row">
              Download <IoIosArrowDown className="margin-left-15" />
            </button>
            <p>v1.31.0 | macOS 12.0+ | Install via Homebrew</p>
            <h2 className="center-flex flex-row">
              Watch the film <BsPlayCircle className="margin-left-15" />
            </h2>
            <img src="/images/codeedit-screen-dark.png" alt="image" />
          </div>
        </div>

        <div className="home-second-section section">
          <div className="home-second-section-presentation center-flex">
            <h1>
              It's as easy as{" "}
              <span
                style={{
                  color: "#34D399",
                }}
              >
                installed{" "}
                <BsCheckCircleFill
                  style={{
                    display: "inherit",
                    marginLeft: "5px",
                  }}
                />
              </span>
            </h1>
            <p>
              Say hello to the fastest code editor on macOS. Nothing is better
              than having the feeling of working with CodeEdit in your hands.
            </p>
            <div className="home-second-oblong"></div>
          </div>
        </div>
      </div>
    </>
  );
}