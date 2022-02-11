import SVGCurvedLine from './svg-curved-line';
import Link from 'next/link';
import Indicator from './component-indicator';

export default function SectionCover() {
  return (
    <section className="section-cover-root">
      <div className="header-and-cta">
        <div className="pattern-wrapper">
          <SVGCurvedLine />
        </div>
        <header>
          <h1 className="title">
            A <strong>super solution</strong> for your{' '}
            <strong>business.</strong>
          </h1>
          <p className="description">
            Our marketing and sales automations help you scale your outreach to
            get more leads for your company.
          </p>
        </header>
        <Link href="/">
          <a className="cta">Request Beta Access</a>
        </Link>
      </div>
      <div className="bg-image"></div>
      <ul className="indicator-list">
        <li>
          <Indicator quantity="2K+" name="COMPANIES" />
        </li>
        <li>
          <Indicator quantity="8" name="LANGUAGES" />
        </li>
        <li>
          <Indicator quantity="1.2M" name="LEADS" />
        </li>
      </ul>
    </section>
  );
}
