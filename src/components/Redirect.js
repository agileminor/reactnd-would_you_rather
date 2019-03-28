import React from 'react'
import { Link } from 'react-router-dom'

export default function Redirect(props) {
    return <div>
     404 - please <Link to = '/'> login </Link>
      </div>
}