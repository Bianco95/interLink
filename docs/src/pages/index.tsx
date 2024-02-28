import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageVideo from '@site/src/components/HomepageVideo';
import HomepageSchema from '@site/src/components/HomepageSchema';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
              <ThemedImage
        alt="Docusaurus themed image"
        sources={{
          light: useBaseUrl('/img/interlink_logo.png'),
          dark: useBaseUrl('/img/interlink_logo-dark.png'),
        }}
      />
          {siteConfig.tagline}
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Try it out! 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`interLink`}
      description="Virtual Kubelets for everyone">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageVideo />

      </main>
    </Layout>
  )
}
