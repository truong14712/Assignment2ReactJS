import { Route, Routes } from 'react-router-dom';
import ClientLayout from './layouts/defaultLayout/client';
import Home from './pages/client/Home';
import Detail from './pages/client/Detail';
import Errors from './components/Error';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<ClientLayout />}>
					<Route index path="/" element={<Home />} />
					<Route index path="/detail" element={<Detail />} />
					<Route index path="*" element={<Errors />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
