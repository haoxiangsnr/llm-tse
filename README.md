# Typing to Listen at the Cocktail Party: Text-Guided Target Speaker Extraction (LLM-TSE)

We released _Typing to Listen at the Cocktail Party: Text-Guided Target Speaker Extraction (LLM-TSE)_. We propose LLM-TSE, which is the first work to incorporate LLMs to guide target speaker extraction successfully. Check out the [paper](https://arxiv.org/abs/2310.07284) and [demo](https://haoxiangsnr.github.io/llm-tse/).

<p align="center">
    <img src="website/src/components/Demo/scenarios.png" width="80%"> <br>
</p>

## Introduction

Humans possess an extraordinary ability to selectively focus on the sound source of interest amidst complex acoustic environments, commonly referred to as cocktail party scenarios. In an attempt to replicate this remarkable auditory attention capability in machines, target speaker extraction (TSE) models have been developed. These models leverage the pre-registered cues of the target speaker to extract the sound source of interest. However, the effectiveness of these models is hindered in real-world scenarios due to the unreliable or even absence of pre-registered cues. To address this limitation, **this study investigates the integration of natural language description to enhance the feasibility, controllability, and performance of existing TSE models. Specifically, we propose a model named LLM-TSE, wherein a large language model (LLM) extracts useful semantic cues from the user's typed text input. These cues can serve as independent extraction cues, task selectors to control the TSE process or complement the pre-registered cues.** Our experimental results demonstrate competitive performance when only text-based cues are presented, the effectiveness of using input text as a task selector, and a new state-of-the-art when combining text-based cues with pre-registered cues. To our knowledge, this is the first study to successfully incorporate LLMs to guide target speaker extraction, which can be a cornerstone for cocktail party problem research.

<p align="center">
    <img src="website/static/img/diff.png" width="800%"> <br>
    (Comparison between the conventional TSE system and our proposed Text-Guided TSE system. The conventional systems rely on the pre-registered voiceprint of the target speaker as an extraction cue, while our system offers the flexibility to incorporate text-based cues to facilitate the target speaker extraction.)
</p>

## Dataset

We will release the LLM-TSE dataset soon.

## Models

We will release pre-trained models soon.
