import ReactDOMServer from "react-dom/server";
import { BsFillMoonFill, BsFillSunFill, BsGithub } from "react-icons/bs";
import { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const nav = document.getElementsByClassName("navbar")[0];
      const last_pos = window.pageYOffset;
      if (last_pos > 50) {
        nav.style.borderBottom = "2px solid #232727";
        nav.style.backgroundColor = "var(--black-color)";
        nav.style.boxShadow = "0px 0px 5px #232727";
      } else {
        nav.style.borderBottom = "none";
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none";
      }
    });

    let s = document.getElementById("svg-toggle-theme");
    let invert = document.getElementById("invert");
    function setTheme(themeName) {
      localStorage.setItem("theme", themeName);
      document.documentElement.className = themeName;
    }

    (function () {
      if (!s) return;
      if (!localStorage.getItem("theme")) return setTheme("theme-dark");
      if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-dark");
        s.innerHTML = ReactDOMServer.renderToString(<BsFillSunFill />);
        invert.style.filter = "invert(0%)";
      } else {
        setTheme("theme-light");
        s.innerHTML = ReactDOMServer.renderToString(<BsFillMoonFill />);
        invert.style.filter = "invert(100%)";
      }
    })();

    function toggleTheme() {
      if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
        s.innerHTML = ReactDOMServer.renderToString(<BsFillMoonFill />);
        invert.style.filter = "invert(100%)";
      } else {
        setTheme("theme-dark");
        s.innerHTML = ReactDOMServer.renderToString(<BsFillSunFill />);
        invert.style.filter = "invert(0%)";
      }
    }
    document
      .querySelector(".toggle-theme")
      .addEventListener("click", toggleTheme);
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-left center-flex flex-row">
        <object data="/logo.svg" type="image/svg+xml" id="invert" />
        <p className="navbar-title">CodeEdit</p>
      </div>
      <div className="navbar-center">
        <Link href="/">Extensions</Link>
        <Link href="/">Documentation</Link>
        <Link href="/">Changelog</Link>
        <Link href="/">Blog</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">About</Link>
      </div>
      <div className="navbar-right">
        <a
          href="https://github.com/CodeEditApp/CodeEdit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <button className="toggle-theme center-flex">
          <span id="svg-toggle-theme">
            <BsFillSunFill />
          </span>
        </button>
      </div>
    </div>
  );
}
