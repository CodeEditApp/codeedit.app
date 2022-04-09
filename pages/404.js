import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function FourthOFourth() {
  return (
    <>
      <div className="error center-flex flex-row section">
        <div className="center-flex flex-row">
          <Link href="/" passHref={true}>
            <img src="/images/logo-center.png" alt="404" />
          </Link>
          <hr />
        </div>
        <div className="center-flex">
          <p>This page couldn’t be found.</p>
          <h1>404</h1>
        </div>
      </div>
    </>
  );
}