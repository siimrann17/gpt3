import React from 'react';
import './features.css';
import { Feature } from '../../components';

const  featuresData = [
    {
        title: 'Dynamic Content Generation:',
        text: 'Explore the future of content creation with our GPT-3-powered app. Witness the seamless generation of dynamic and contextually rich content, empowering you to transform ideas into compelling narratives effortlessly.',
    },
    {
        title: 'Interactive Conversations:',
        text: 'Step into the future of interactive communication as GPT-3 brings conversations to life. Engage in dialogues that feel natural and intelligent, opening up endless possibilities for applications such as chatbots, virtual assistants, and more.',
    },
    {
        title: 'Versatile Applications:',
        text: 'Experience the future of versatility with GPT-3. From automating tasks to aiding in problem-solving, our app showcases the myriad applications this advanced language model offers, allowing you to redefine the boundaries of what is achievable.',
    },
    {
        title: 'Innovative User Experiences:',
        text: 'Make the future happen today by creating innovative user experiences. GPT-3 transforms the way users interact with technology, providing a glimpse into a world where intuitive, AI-driven interfaces enhance the overall user journey.'
    }
]

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
            </div>
            <div className='gpt3__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
        </div>
    );
}

export default Features;
