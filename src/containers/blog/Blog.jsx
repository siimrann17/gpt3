import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Celebrating Milestones: Join us in celebrating milestones, from project successes to community achievements, as we collectively mark the exciting progress in our journey of technological exploration." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Innovation Unleashed: Explore groundbreaking solutions and cutting-edge technologies as we push the boundaries of what is possible in the world of innovation." />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Collaboration Hub: Join a vibrant community where minds converge, ideas flourish, and collaborative efforts result in extraordinary outcomes." />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Tech Insights Galore: Stay informed with a wealth of tech insights, keeping you at the forefront of the latest trends, developments, and breakthroughs in the tech landscape." />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Showcasing Creativity: Witness a showcase of unparalleled creativity, where projects come to life, ideas flourish, and innovation takes center stage." />
      </div>
    </div>
  </div>
);

export default Blog;