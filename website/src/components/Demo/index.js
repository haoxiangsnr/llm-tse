import React from 'react';
import styles from './styles.module.css';
import { Divider, Typography, Table, Card } from 'antd';
import { Col, Row } from 'antd';
import scenariosFigure from '../../../static/img/scenarios.png';
import diffFigure from '../../../static/img/diff.png';
import modelArchFigure from '../../../static/img/model_arch.png';
import { Image } from 'antd';
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;


const columns = [
  {
    title: 'Mixture',
    dataIndex: 'mixture',
    key: 'mixture',
    render: (url) => <audio controls src={url}><source type="audio/wav" /></audio>,
    width: 200,
  },
  {
    title: 'Enrollment (Audio)',
    dataIndex: 'enrollAudio',
    key: 'enrollAudio',
    render: (url) => (url) ? <audio controls src={url}><source type="audio/wav" /></audio> : <Text type="danger">w/o</Text>,
    width: 200,
  },
  {
    title: 'Enrollment (Text)',
    dataIndex: 'enrollText',
    key: 'enrollText',
    render: (text) => (text) ? <Text>{text}</Text> : <Text type="danger">w/o</Text>,
    width: 200,
  },
  {
    title: "Separated",
    dataIndex: 'separated',
    key: 'separated',
    render: (url) => <audio controls src={url}><source type="audio/wav" /></audio>,
    width: 200,
  },
  // {
  //   title: "Ground Truth",
  //   dataIndex: 'groundTruth',
  //   key: 'groundTruth',
  //   render: (url) => (url) ? <audio controls src={url}><source type="audio/wav" /></audio> : <Text type="danger"></Text>,
  // }
];

const transSnippetsDataSource = [
  {
    key: '30',
    mixture: 'wav/00030_mixture.wav',
    enrollText: "Extract the speaker who is saying 'the mixture the affected parts' from this audio?",
    separated: 'wav/00030_attr.wav',
    groundTruth: 'wav/00030_target.wav',
  },
  {
    key: '30',
    mixture: 'wav/00030_mixture.wav',
    enrollAudio: 'wav/00030_enroll.wav',
    separated: 'wav/00030_voiceprint.wav',
    groundTruth: 'wav/00030_target.wav',
  },
  {
    key: '30',
    mixture: 'wav/00030_mixture.wav',
    enrollAudio: "wav/00030_enroll.wav",
    enrollText: "Please note that the person speaking 'the mixture the affected parts' in the mixed audio should be extracted.",
    separated: 'wav/00030_live.wav',
    groundTruth: 'wav/00030_target.wav',
  },
  {
    key: '30',
    mixture: 'wav/00030_mixture.wav',
    enrollAudio: "wav/00030_enroll.wav",
    enrollText: <>I <Text mark>don't want to</Text> the given voice of in this audio.</>,
    separated: 'wav/00030_control.wav',
  },
  {
    key: "73",
    mixture: "wav/00073_mixture.wav",
    enrollText: "I need 'it was plain that only the ponies could go by it' spotted from this audio.",
    separated: "wav/00073_attr.wav",
    groundTruth: "wav/00073_target.wav",
  },
  {
    key: "73",
    mixture: "wav/00073_mixture.wav",
    enrollAudio: "wav/00073_enroll.wav",
    separated: "wav/00073_voiceprint.wav",
    groundTruth: "wav/00073_target.wav",
  },
  {
    key: "73",
    mixture: "wav/00073_mixture.wav",
    enrollAudio: "wav/00073_enroll.wav",
    enrollText: "Please extract 'it was plain that only the ponies could go by it' in the mixed audio.",
    separated: "wav/00073_live.wav",
    groundTruth: "wav/00073_target.wav",
  },
  {
    key: "73",
    mixture: "wav/00073_mixture.wav",
    enrollAudio: "wav/00073_enroll.wav",
    enrollText: <>Is it possible to <Text mark>erase</Text> the given voice from this audio?</>,
    separated: "wav/00073_control.wav",
  },
]

const genderDataSource = [
  {
    key: "42",
    mixture: "wav/00042_mixture.wav",
    enrollText: "Could you support me in identifying and extracting the voice of male from this audio?",
    separated: "wav/00042_attr.wav",
    groundTruth: "wav/00042_target.wav",
  },
  {
    key: "42",
    mixture: "wav/00042_mixture.wav",
    enrollAudio: "wav/00042_enroll.wav",
    separated: "wav/00042_voiceprint.wav",
    groundTruth: "wav/00042_target.wav",
  },
  {
    key: "42",
    mixture: "wav/00042_mixture.wav",
    enrollAudio: "wav/00042_enroll.wav",
    enrollText: "The male voice in the mixed audio should be extracted.",
    separated: "wav/00042_live.wav",
    groundTruth: "wav/00042_target.wav",
  },
  {
    key: "42",
    mixture: "wav/00042_mixture.wav",
    enrollAudio: "wav/00042_enroll.wav",
    enrollText: <>Can you <Text mark>remove</Text> the specified voice from this audio?</>,
    separated: "wav/00042_control.wav",
  },
  {
    key: "87",
    mixture: "wav/00087_mixture.wav",
    enrollText: "Can you extract the specific voice of male from this audio?",
    separated: "wav/00087_attr.wav",
    groundTruth: "wav/00087_target.wav",
  },
  {
    key: "87",
    mixture: "wav/00087_mixture.wav",
    enrollAudio: "wav/00087_enroll.wav",
    separated: "wav/00087_voiceprint.wav",
    groundTruth: "wav/00087_target.wav",
  },
  {
    key: "87",
    mixture: "wav/00087_mixture.wav",
    enrollAudio: "wav/00087_enroll.wav",
    enrollText: "The extracted speaker should be a man.",
    separated: "wav/00087_live.wav",
    groundTruth: "wav/00087_target.wav",
  },
  {
    key: "87",
    mixture: "wav/00087_mixture.wav",
    enrollAudio: "wav/00087_enroll.wav",
    enrollText: <>Please <Text mark>remove</Text> the specified voice from this audio.</>,
    separated: "wav/00087_control.wav",
  },
]

const languageDataSource = [
  {
    key: "47",
    mixture: "wav/00047_mixture.wav",
    enrollText: "Is it possible to isolate the Spanish voice in this speech mix?",
    separated: "wav/00047_attr.wav",
    groundTruth: "wav/00047_target.wav",
  },
  {
    key: "47",
    mixture: "wav/00047_mixture.wav",
    enrollAudio: "wav/00047_enroll.wav",
    separated: "wav/00047_voiceprint.wav",
    groundTruth: "wav/00047_target.wav",
  },
  {
    key: "47",
    mixture: "wav/00047_mixture.wav",
    enrollAudio: "wav/00047_enroll.wav",
    enrollText: "Please extract the Spanish voice in the mixed audio.",
    separated: "wav/00047_live.wav",
    groundTruth: "wav/00047_target.wav",
  },
  {
    key: "47",
    mixture: "wav/00047_mixture.wav",
    enrollAudio: "wav/00047_enroll.wav",
    enrollText: <><Text mark>Eliminate</Text> the given voice from this audio.</>,
    separated: "wav/00047_control.wav",
  },
  {
    key: "90",
    mixture: "wav/00090_mixture.wav",
    enrollText: "Would you be able to assist me in isolating the English voice from this mixture speech?",
    separated: "wav/00090_attr.wav",
    groundTruth: "wav/00090_target.wav",
  },
  {
    key: "90",
    mixture: "wav/00090_mixture.wav",
    enrollAudio: "wav/00090_enroll.wav",
    separated: "wav/00090_voiceprint.wav",
    groundTruth: "wav/00090_target.wav",
  },
  {
    key: "90",
    mixture: "wav/00090_mixture.wav",
    enrollAudio: "wav/00090_enroll.wav",
    enrollText: "Please extract the English voice in the mixed audio.",
    separated: "wav/00090_live.wav",
    groundTruth: "wav/00090_target.wav",
  },
  {
    key: "90",
    mixture: "wav/00090_mixture.wav",
    enrollAudio: "wav/00090_enroll.wav",
    enrollText: <>Please <Text mark>remove</Text> the specified voice from this audio.</>,
    separated: "wav/00090_control.wav",
  },
]

const loudnessFarNearDataSource = [
  {
    key: "160",
    mixture: "wav/00160_mixture.wav",
    enrollText: "Help me extract the speech signal of the loudest speaker.",
    separated: "wav/00160_attr.wav",
    groundTruth: "wav/00160_target.wav",
  },
  {
    key: "160",
    mixture: "wav/00160_mixture.wav",
    enrollAudio: "wav/00160_enroll.wav",
    separated: "wav/00160_voiceprint.wav",
    groundTruth: "wav/00160_target.wav",
  },
  {
    key: "160",
    mixture: "wav/00160_mixture.wav",
    enrollAudio: "wav/00160_enroll.wav",
    enrollText: "Notice that the loudest sound in the mixed audio should be extracted.",
    separated: "wav/00160_live.wav",
    groundTruth: "wav/00160_target.wav",
  },
  {
    key: "160",
    mixture: "wav/00160_mixture.wav",
    enrollAudio: "wav/00160_enroll.wav",
    enrollText: <><Text mark>Remove</Text> the given voice from the mixtrue.</>,
    separated: "wav/00160_control.wav",
  },
  {
    key: "240",
    mixture: "wav/00240_mixture.wav",
    enrollText: "Help me retrieve the speech signal corresponding to far away from the microphone.",
    separated: "wav/00240_attr.wav",
    groundTruth: "wav/00240_target.wav",
  },
  {
    key: "240",
    mixture: "wav/00240_mixture.wav",
    enrollAudio: "wav/00240_enroll.wav",
    separated: "wav/00240_voiceprint.wav",
    groundTruth: "wav/00240_target.wav",
  },
  {
    key: "240",
    mixture: "wav/00240_mixture.wav",
    enrollAudio: "wav/00240_enroll.wav",
    enrollText: "The speaker is far away from the microphone, and the reverberat is very serious.",
    separated: "wav/00240_live.wav",
    groundTruth: "wav/00240_target.wav",
  },
  {
    key: "240",
    mixture: "wav/00240_mixture.wav",
    enrollAudio: "wav/00240_enroll.wav",
    enrollText: <><Text mark>Eliminate</Text> the registered voice from this audio.</>,
    separated: "wav/00240_control.wav",
  },
]


export default function Demo() {
  return (
    <>
      <Row justify="center">
        <Title level={2}>Abstract</Title>
      </Row>
      <Row justify="center" >
        <Col span={12}>
          <Typography>
            <Paragraph >
              Humans possess an extraordinary ability to selectively focus on the sound source of interest amidst complex acoustic environments, commonly referred to as cocktail party scenarios. In an attempt to replicate this remarkable auditory attention capability in machines, target speaker extraction (TSE) models have been developed. However, the effectiveness of these models is hindered in real-world scenarios due to the potential variation or even absence of pre-registered cues. To address this limitation, this study investigates the integration of natural language to enhance the flexibility and controllability of existing TSE models. <Text strong mark> Specifically, we leverage a large language model (LLM) to extract useful semantic cues from the user's typed text input, which can complement the pre-registered cues or work independently to control the TSE process.</Text>
              Our experimental results demonstrate competitive performance when only text-based cues are presented, and a new state-of-the-art is set when combined with pre-registered acoustic cues. To the best of our knowledge, this is the first work that has successfully incorporated text-based cues to guide target speaker extraction, which can be a cornerstone for cocktail party problem research.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
      <Divider />
      <Row justify="center">
        <Col span={10}>
          <Card cover={<Image src={diffFigure} />}>
            <Meta
              description="Comparison between the conventional TSE system and our proposed LLM-TSE system. The conventional systems rely on the pre-registered voiceprint of the target speaker as an extraction cue, while our system offers the flexibility to incorporate text-based cues to facilitate the target speaker extraction process."
            />
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={10}>
          <Card cover={<Image src={scenariosFigure} />}>
            <Meta
              description="New application scenarios enabled by the proposed LLM-TSE."
            />
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={10}>
          <Card cover={<Image src={modelArchFigure} />}>
            <Meta
              description="Overview of the proposed LLM-TSE model architecture."
            />
          </Card>
        </Col>
      </Row>
      <Divider></Divider>
      <Divider />
      <Row justify="center">
        <Title level={2}>Demo</Title>
      </Row>
      <Divider>Transcription Snippets</Divider>
      <Table className={styles.table} dataSource={transSnippetsDataSource} columns={columns} size='middle' pagination={false} />
      <Divider>Loudness or Far/Near</Divider>
      <Table className={styles.table} dataSource={loudnessFarNearDataSource} columns={columns} size="middle" pagination={false} />
      <Divider>Gender</Divider>
      <Table className={styles.table} dataSource={genderDataSource} columns={columns} size="middle" pagination={false} />
      <Divider>Language</Divider>
      <Table className={styles.table} dataSource={languageDataSource} columns={columns} size='middle' pagination={false} />
    </>
  );
}
