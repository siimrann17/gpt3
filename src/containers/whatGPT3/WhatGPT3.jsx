import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art natural language processing (NLP) model developed by OpenAI. As the third iteration of the GPT series, it stands out for its unprecedented scale, boasting a staggering 175 billion parameters. Trained on diverse internet text, GPT-3 demonstrates a remarkable ability to understand and generate human-like language, making it one of the most powerful language models to date. The model excels in a myriad of language-related tasks, from translation and summarization to question-answering and creative writing. GPT-3's immense size and pre-training allow it to capture intricate patterns and nuances in language, enabling users to interact with it in a conversational manner and leverage its capabilities for a wide range of applications across various industries."/>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Dive into the future of conversational AI with our GPT-3-powered chatbots. Seamlessly integrating natural language understanding, these chatbots offer dynamic and context-aware interactions. Elevate user engagement and provide personalized experiences with the transformative capabilities of GPT-" />
      <Feature title="Knowledgebase" text="Transform your information repository with GPT-3's ability to comprehend and generate contextually relevant content. From dynamically updating articles to responding to user queries, our GPT-3-driven knowledgebase revolutionizes the way information is curated and shared. Experience the next level of intelligent knowledge management." />
      <Feature title="Education" text="Empower educational experiences with GPT-3 as your virtual assistant in learning. From generating engaging course content to providing personalized tutoring, our application of GPT-3 in education goes beyond traditional boundaries. Explore a world where AI enhances the learning journey, adapting to individual needs and fostering a more interactive and adaptive educational environment." />
    </div>
  </div>
);

export default WhatGPT3;