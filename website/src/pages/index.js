import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Demo from '@site/src/components/Demo';
import { DatePicker, Divider, Row } from 'antd';
import { Button, Space, Typography } from 'antd';
import styles from './index.module.css';
import { FilePdfOutlined, GithubOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

function Banner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Typography className={styles.banner}>
      <Title level={2} className={styles.title}>{siteConfig.title}</Title>
      <Title level={3} className={styles.title}>
        Xiang Hao<sup>1,2</sup>, Jibin Wu<sup>1,*</sup>, Jianwei Yu<sup>2</sup>, Chenglin Xu<sup>1</sup>, and Kay Chen Tan<sup>1</sup>
      </Title>
      <Title level={5} className={styles.title}>
        <sup>1</sup>The Hong Kong Polytechnic University, <sup>2</sup>Tencent AI Lab
      </Title>
      <Divider />
      <Row justify="center" align="middle" className={styles.links}>
        <Button type="default" icon={<FilePdfOutlined />}><Link to="https://arxiv.org/abs/2310.07284">Paper</Link></Button>
        <Divider type="vertical" />
        <Button type="default" icon={<GithubOutlined />}><Link to="https://github.com/haoxiangsnr/llm-tse/">Github</Link></Button>
      </Row>
    </Typography>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.projectName}`}
      description="Description will go into a meta tag in <head />">
      <Banner />
      <Divider />
      <Demo />
    </Layout>
  );
}
