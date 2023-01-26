
import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'


const App = () => {

	const router = createBrowserRouter([
		{
			path: '/',
			element: <>
				<Navbar />
				<Outlet />
				<Footer />
			</>,
			children: [
				{ path: '/', element: <Home /> },
				{ path: '/home', element: <Home /> },
				{ path: '/about', element: <About /> }
			]

		}
	])

	return (
		<RouterProvider router={router} />
	)
}

export default App

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'

// const App = () => {
// 	return (


// 		<BrowserRouter>
// 			<Routes>
// 				<Route path='/' element={<Home />}></Route>
// 				<Route path='/home' element={<Home />}></Route>
// 				<Route path='/about' element={<About />}></Route>
// 			</Routes>
// 		</BrowserRouter>


// a
// 	)
// }

// export default App