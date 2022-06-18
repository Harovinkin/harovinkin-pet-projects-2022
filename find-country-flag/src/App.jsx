import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Details } from './pages/Details';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='country/:name' element={<Details />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
