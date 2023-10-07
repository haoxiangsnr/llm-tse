import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Divider, Typography, Table } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const columns = [
  {
    title: 'Mixture',
    dataIndex: 'mixture',
    key: 'mixture',
    render: (url) => <audio controls src={url}><source type="audio/wav" /></audio>,
  },
  {
    title: 'Enrollment (Audio)',
    dataIndex: 'enrollAudio',
    key: 'enrollAudio',
    render: (url) => (url) ? <audio controls src={url}><source type="audio/wav" /></audio> : <Text type="danger">w/o</Text>,
  },
  {
    title: 'Enrollment (Text)',
    dataIndex: 'enrollText',
    key: 'enrollText',
  },
  {
    title: "Separated",
    dataIndex: 'separated',
    key: 'separated',
    render: (url) => <audio controls src={url}><source type="audio/wav" /></audio>,

  },
  {
    title: "Ground Truth",
    dataIndex: 'groundTruth',
    key: 'groundTruth',
    render: (url) => <audio controls src={url}><source type="audio/wav" /></audio>,
  }
];

const dataSource = [
  {
    key: '1',
    mixture: 'wav/sample_0_dl_0_0_mix_12.45.wav',
    enrollAudio: "",
    enrollText: "The speaker saying 'the henrietta temple for whom he had forfeited' in the mixed audio is me.",
    separated: 'wav/sample_0_dl_0_0_enh_12.45.wav',
    groundTruth: 'wav/sample_0_dl_0_0_target_12.45.wav',
  },
  {
    key: '2',
    mixture: 'wav/sample_0_dl_0_12_mix_12.26.wav',
    enrollAudio: "wav/sample_0_dl_0_12_enroll_12.26.wav",
    enrollText: "Take note that I said in the mixed audio is 'it did not occur to them to divide and appropriate the soil'.",
    separated: 'wav/sample_0_dl_0_12_enh_12.26.wav',
    groundTruth: 'wav/sample_0_dl_0_12_target_12.26.wav',
  },
  {
    key: '1',
    mixture: 'wav/sample_1_dl_4_9_mix_9.05.wav',
    enrollAudio: "",
    enrollText: "Please extract the female speaker in the mixed audio.",
    separated: 'wav/sample_1_dl_4_9_enh_9.05.wav',
    groundTruth: 'wav/sample_1_dl_4_9_target_9.05.wav',
  },
];


export default function Demo() {
  return (
    <Typography>
      <Title>Abstract</Title>
      <Paragraph>
        Humans possess an extraordinary ability to selectively focus on the sound source of interest amidst complex acoustic environments, commonly referred to as cocktail party scenarios. In an attempt to replicate this remarkable auditory attention capability in machines, target speaker extraction (TSE) models have been developed. However, the effectiveness of these models is hindered in real-world scenarios due to the potential variation or even absence of pre-registered cues. To address this limitation, this study investigates the integration of natural language to enhance the flexibility and controllability of existing TSE models. Specifically, we leverage a large language model (LLM) to extract useful semantic cues from the user's typed text input, which can complement the pre-registered cues or work independently to control the TSE process. Our experimental results demonstrate competitive performance when only text-based cues are presented, and a new state-of-the-art is set when combined with pre-registered acoustic cues. To the best of our knowledge, this is the first work that has successfully incorporated text-based cues to guide target speaker extraction, which can be a cornerstone for cocktail party problem research.
      </Paragraph>
      <Divider />
      <Title>Demo</Title>
      <Table dataSource={dataSource} columns={columns} />;
    </Typography>
  );
}
