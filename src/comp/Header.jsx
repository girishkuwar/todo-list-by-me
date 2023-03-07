import React from 'react';
import './Header.css'


export default function Header(props) {
  return (
    <>
    <header>
      <ul>
          <li><a >{props.title}</a></li>
          <li><a >ABOUT</a></li>
          <li><a >PROJECTS</a></li>
          <li><a >COUNTACT US</a></li>
          {props.IsIdentical ? <li><a >HI BRO</a></li> : ""}
      </ul>
    </header>
    </>
  )
}