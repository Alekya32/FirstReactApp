import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from'../css/style'
import Person from '../component/person';
 
const root = document.getElementById("root")
ReactDOM.render(
    <Person name="sample app"/>,
    root
)