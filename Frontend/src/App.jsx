import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { Home, Login, SignUp, PageNoFound, Profile } from './Pages';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './Components/Shared/Navbar';
import { Provider } from 'react-redux';
import { store } from './Store/store';

const App=()=> {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<div className='grid grid-cols-5'>
				
					<div className='col-span-5'>
					<Navbar />
						<Routes>
							<Route
								path='/login'
								element={<Login />}
							/>
							<Route
								path='/signup'
								element={<SignUp />}
							/>
							<Route
								path='/profile/:id'
								element={
									<ProtectedRoute>
										<Profile />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/'
								element={
									<ProtectedRoute>
										<Home />
									</ProtectedRoute>
								}
							/>
							<Route
								path='*'
								element={<PageNoFound />}
							/>
						</Routes>
					</div>
				</div>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
