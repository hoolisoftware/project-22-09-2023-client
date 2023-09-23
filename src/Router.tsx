import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import History from './pages/History'
import OfferCreate from './pages/OfferCreate'
import OfferListToday from './pages/OfferListToday'
import QRGenerator from './pages/QRGenerator'
import Winners from './pages/Winners'
import AccountSettings from './pages/AccountSettings'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>
    },
    {
        path: 'account/settings/',
        element: <AccountSettings/>
    },
    {
        path: 'history/',
        element: <History/>
    },
    {
        path: 'offers/create/',
        element: <OfferCreate/>
    },
    {
        path: 'offers/today/',
        element: <OfferListToday/>
    },
    {
        path: 'qr-generator/',
        element: <QRGenerator/>
    },
    {
        path: 'winners/',
        element: <Winners/>
    }

])


export default function Router()
{
    return <RouterProvider router={router}/>
}