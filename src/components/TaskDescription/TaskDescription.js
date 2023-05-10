import React from "react";
import './TaskDescription.css'

const code = {
  fontFamily: "Andale Mono, monospace",
  textAlign: "left"
};

const TaskDescription = () => (
  <div className='TaskDescription'>
    <h2>Coding task</h2>
    <p>
      Your task is to write a simple React Application that renders list of
      repositories In the following manner:
    </p>
    <pre>
      {`
        • <name> - 🌟 <stars> - 🍴 <forks>
        • react - 🌟 69012 - 🍴 12581
        • reselect - 🌟 7291 - 🍴 214
        • redux - 🌟 31705 - 🍴 6581
        • recompose - 🌟 5671 - 🍴 342
      `}
    </pre>
    <p>
      Please use URL in `src/strings/index.ts` to fetch
      list of repositories, once resolved it will return list in following
      format:
      <pre>
        {`
          [
            {name: 'react', stars: 69012, forks: 12581, url: 'http://…'},
            {name: 'react', stars: 7291, forks: 214, url: 'http://…'},
            {name: 'react', stars: 31705, forks: 6581, url: 'http://…'},
            {name: 'react', stars: 5671, forks: 342, url: 'http://…'}
          ]
        `}
      </pre>
    </p>
  </div>
);

export default TaskDescription;