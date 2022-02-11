/* eslint-disable @next/next/no-img-element */
import path from '../lib/path';
import Link from 'next/link';

export default function SectionHeader() {
  return (
    <div className="section-header-root">
      <img src={path('/assets/logo.svg')} alt="logo" className="logo" />
      <Link href="/">
        <a className='cta'>Request Beta Access</a>
      </Link>
    </div>
  );
}
