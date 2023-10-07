import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Demo from '@site/src/components/Demo';
import { DatePicker, Divider } from 'antd';
import { Button, Space } from 'antd';
import styles from './index.module.css';
import { FilePdfOutlined, GithubOutlined } from '@ant-design/icons';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Divider></Divider>
        <Button type="default" icon={<FilePdfOutlined />}>Paper</Button>
        <Divider type="vertical" />
        <Button type="default" icon={<GithubOutlined />}>Github</Button>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.projectName}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Demo />
      </main>
    </Layout>
  );
}
