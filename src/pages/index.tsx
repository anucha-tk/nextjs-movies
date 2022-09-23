import * as React from 'react';

import Description from '@/components/Description';
import Explore from '@/components/Explore';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Plan from '@/components/Plan';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT +   s
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='grid grid-flow-row gap-6'>
        <Hero />
        <div className='layout -mt-16 grid grid-flow-row gap-6'>
          <Explore />
        </div>
        <Description />
        <Plan />
        <FAQ />
      </main>
    </Layout>
  );
}
