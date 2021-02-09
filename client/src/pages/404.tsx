import * as React from 'react'
import { Link } from 'gatsby'

import IndexLayout from '../layouts'

const NotFoundPage = () => (
  <IndexLayout>
    <div>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void. <Link to="/">Go back.</Link>
      </p>
    </div>
  </IndexLayout>
)

export default NotFoundPage
