import React from 'react'
import { useParams } from 'react-router-dom'

export default function Article() {
    const {id} = useParams();
  return (
    <div>Article avec id : {id} </div>
  )
}
