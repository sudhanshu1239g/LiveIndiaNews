import { createBrowserRouter } from "react-router";
import MainLayout from './layouts/MainLayout';
// ... your existing imports
import HomePage from './features/newsList/pages/HomePage';
import PoliticsPage from './features/newsList/pages/PoliticsPage';
import EconomyPage from './features/newsList/pages/EconomyPage';
import SpecialReport from './features/newsList/pages/SpecialReport';
import NewsDetail from './features/newsList/pages/NewsDetail';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // The "Wrapper"
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/politics", element: <PoliticsPage /> },
            { path: "/economy", element: <EconomyPage /> },
            { path: "/special-report", element: <SpecialReport /> },
            { path: "/news/:id", element: <NewsDetail /> }
        ]
    }
]);