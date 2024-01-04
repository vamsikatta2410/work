import React from 'react'
import './Style.css'
import Container from './Container'
import { useParams } from 'react-router-dom'
import Header from '../Commons/Header'
import {BingData} from './BingData.js';

function BingVideo() {
  const { name } = useParams()

  return (
    <>
      <Header page={'videos'} />

    </>
  )
}

export default BingVideo
