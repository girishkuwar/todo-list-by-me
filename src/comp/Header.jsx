import React from 'react';
import './Header.css'


export default function Header(props) {
  return (
    <>
    <header>
      <ul>
          <li><a >{props.title}</a></li>
      </ul>
          {props.IsIdentical ? <li><a>GIRISH KUWAR</a></li> : ""}
    </header>
    </>
  )
}