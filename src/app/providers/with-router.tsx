import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

const withRouter = (component: () => React.ReactNode) => () =>
	(
		<BrowserRouter>
			<Suspense fallback={null}>{component()}</Suspense>
		</BrowserRouter>
	)
export default withRouter
