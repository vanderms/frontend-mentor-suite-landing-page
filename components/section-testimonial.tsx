/* eslint-disable @next/next/no-img-element */
import path from '../lib/path';
import SVGWhiteCurvedLine from './svg-white-curved-line';

export default function SectionTestimonial() {
  return (
    <section className="section-testimonial-root">
      <div className="image">
        <img className='desktop'
          src={path('/assets/image-jeremy-large.png')}
          alt="Jeremy Robinson"
        />
         <img className='mobile'
          src={path('/assets/image-jeremy-small.png')}
          alt="Jeremy Robinson"
        />
      </div>
      <div className="pattern-wrapper">
        <SVGWhiteCurvedLine />
      </div>
      <div className="text">
        <h2 className='title'>
          It just <strong>works.</strong>
        </h2>
        <p className="quote">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </p>
        <div className="author">
          <div className="name">JEREMY ROBINSON</div>
          <div className="role">CMO, FYLO</div>
        </div>
      </div>
    </section>
  );
}
