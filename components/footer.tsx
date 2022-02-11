/* eslint-disable @next/next/no-img-element */
import path from '../lib/path';
import SVGIconFacebook from './svg-icon-facebook';
import SVGIconIstagram from './svg-icon-instagram';
import SVGIconTwitter from './svg-icon-twitter';

export default function Footer() {
  return (
    <footer className="footer-root">
      <img src={path('/assets/logo.svg')} alt="logo" className="logo" />
      <div className="copyright">Copyright - Suite</div>
      <ul className="social-links">
        <li>
          <a
            href="https://pt-br.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIconFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIconTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIconIstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
}
