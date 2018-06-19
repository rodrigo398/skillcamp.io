import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Contact = () => (
  <div>
    <Helmet title="Contacr" />
    <h1>Interested in getting in contact with us?</h1>
    <h3>Find us all over the web or simply send us an email!</h3>
    <ul>
      <li>
        <Link to="/">Slack</Link>
      </li>
      <li>
        <Link to="/">Gitlab</Link>
      </li>
      <li>
        <Link to="/">Facebook</Link>
      </li>
      <li>
        <Link to="/">LinkedIn</Link>
      </li>
      <li>
        <Link to="/">Instagram</Link>
      </li>
      <li>
        <Link to="/">Twitter</Link>
      </li>
      <li>
        or email us at{' '}
        <a href="mailto:mail@skillcamp.com">mail@skillcamp.com</a>
      </li>
    </ul>
  </div>
)

export default Contact
