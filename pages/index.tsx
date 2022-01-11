import type { NextPage } from "next";
import Link from "next/link";
import { FC } from "react";

const NavLink: FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a className="btn btn-outline-secondary rounded-pill border-0 mx-2 text-body">
      {children}
    </a>
  </Link>
);

const Nav: FC = () => (
  <nav className="container-fluid rounded-pill d-flex justify-content-between mt-4 mx-3 p-3 bg-white">
    <span>
      <NavLink href="/">Home</NavLink>
      {/* TODO */}
      <span style={{ visibility: "hidden" }}>
        <NavLink href="/faq">FAQ</NavLink>
      </span>
    </span>
    <span>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/signup">Sign Up</NavLink>
    </span>
  </nav>
);

const Footer: FC = () => (
  <footer>
    <nav className="container-fluid d-flex justify-content-between mx-3 p-3">
      {/* TODO */}
      <span style={{ visibility: "hidden" }}>
        <Link href="/privacy">
          <a className="btn btn-outline mx-2 text-body">Privacy</a>
        </Link>
        <Link href="/terms">
          <a className="btn btn-outline mx-2 text-body">Terms</a>
        </Link>
      </span>
      <span className="btn btn-outline mx-2 text-body">© OffsetMe</span>
    </nav>
  </footer>
);

const Page: FC = ({ children }) => (
  <div className="px-5">
    <Nav />
    <main>{children}</main>
    <Footer />
  </div>
);

const Home: NextPage = () => (
  <Page>
    <div className="container d-flex flex-column align-items-center mt-5 py-5">
      <h1 className="display-4 fw-bold text-center">
        Use your network to build something climate{" "}
        <span className="text-primary">positive</span>.
      </h1>
      <p className="fs-4 mt-3">
        Accept donations. Reduce carbon. Help the planet.
      </p>
      <div className="d-inline-block border rounded-pill bg-white mt-4 mb-3">
        <div className="d-flex justify-content-center align-items-center p-2">
          <span className="m-2">
            <span className="fs-4 fw-bold">offsetme.app/</span>
            <input
              className="border-0 fs-4"
              style={{ outline: "none" }}
              placeholder="you"
            ></input>
          </span>
          <Link href="/signup">
            <a className="btn btn-primary rounded-pill fw-bold">
              Start reducing carbon
            </a>
          </Link>
        </div>
      </div>
      <p>It's free and takes less than 5 minutes.</p>

      <h3>Donations</h3>
      <h1>
        Give your network an easy way to say thanks by contributing towards your
        carbon offset.
      </h1>
      <h2>
        With just a few clicks or taps anyone from your network can donate to a
        carbon offset project of your choosing.
      </h2>
      <img src="//via.placeholder.com/350x150" />

      <h3>Recurring Donations</h3>
      <h1>Monthly donations for your biggest supporters.</h1>
      <h2>
        Setup recurring carbon offsets by accepting monthly or yearly donations.
      </h2>
      <img src="//via.placeholder.com/350x150" />

      <Link href="/signup">
        <a>Start supporting the planet</a>
      </Link>
      <span>It's free and takes less than 5 minutes.</span>
    </div>
  </Page>
);

export default Home;
