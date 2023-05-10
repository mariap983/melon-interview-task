import React from "react";
import axios from "axios";
import TaskDescription from "../TaskDescription/TaskDescription"
import './Task.css'

// The code starts by importing react, axios and TaskDescription.

const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=melon";

/* It then creates a function called getReactRepositories which takes in 
an endpoint to the GitHub search API as its first parameter, 
and returns the result of that request as its second parameter. */

const getReactRepositories = () =>

  /* The code is then passed into a map function that iterates over each item 
  returned from the search API, creating a new object with three properties: 
  forks, name, stars: stargazers_count. */

  axios
    .get(SEARCH_ENDPOINT)
    .then((result) => result.data.items)
    .then((repos) =>
      repos.map(({ forks, name, stargazers_count, html_url }) => ({
        forks,
        name,
        stars: stargazers_count,
        url: html_url
      }))
    );

// A list of repositories that are available on Github.   

const reposotories = [
  { name: "react", stars: 69012, forks: 12581, url: "http://…" },
  { name: "react", stars: 7291, forks: 214, url: "http://…" },
  { name: "react", stars: 31705, forks: 6581, url: "http://…" },
  { name: "react", stars: 5671, forks: 342, url: "http://…" }
];

/* Finally it returns all these objects together into one array 
so they can be passed into TaskDescription for rendering purposes. */

const Task = () => <TaskDescription />;

export default Task