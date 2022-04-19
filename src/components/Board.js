/* eslint-disable no-undef */
import React from 'react'
import Square from './Square';

export default function Board(props) {
  return (
    <div className='board'>
      <div>
        <Square value = {props.squares[0]} onClick={ ()=> {
          // eslint-disable-next-line no-undef
          props.onClick(0);
          }}
        />
        <Square value = {props.squares[1]} onClick={ ()=> {
          // eslint-disable-next-line no-undef
          props.onClick(1);
          }}
        />
        <Square value = {props.squares[2]} onClick={ ()=> {
          // eslint-disable-next-line no-undef
          props.onClick(2);
          }}
        />
      </div>
      <div>
        <Square value = {props.squares[3]} onClick={ ()=> {
          // eslint-disable-next-line no-undef
          props.onClick(3);
          }}
        />
        <Square value = {props.squares[4]} onClick={ ()=> {
          // eslint-disable-next-line no-undef
          props.onClick(4);
          }}
        />
        <Square value = {props.squares[5]} onClick={ ()=> {
          // eslint-disable-next-line no-undef
          props.onClick(5);
          }}
        />
      </div>
      <div>
        <Square value = {props.squares[6]} onClick={ ()=> {
          // eslint-disable-next-line no-undef
          props.onClick(6);
          }}
        />
        <Square value = {props.squares[7]} onClick={ ()=> {
          // eslint-disable-next-line no-undef
          props.onClick(7);
          }}
        />
        <Square value = {props.squares[8]} onClick={ ()=> {
          // eslint-disable-next-line no-undef
          props.onClick(8);
          }}
        />  
      </div>
    </div>
  )
}
