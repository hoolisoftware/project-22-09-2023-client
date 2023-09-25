import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import History from './pages/History'
import OfferCreateUpdate from './pages/OfferCreateUpdate'
import OfferDetail from './pages/OfferDetail'
import EventList from './pages/EventList'
import QRGenerator from './pages/QRGenerator'
import Winners from './pages/Winners'
import AccountSettings from './pages/AccountSettings'
import UserList from './pages/UserList'
import BarList from './pages/BarList'
import BranchList from './pages/BranchList'

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
        path: 'offers/:offerId/',
        element: <OfferDetail title='Offer details'/>
    },
    {
        path: 'offers/create/',
        element: <OfferCreateUpdate title='Create offer'/>
    },
    {
        path: 'offers/edit/:offerId/',
        element: <OfferCreateUpdate title='Edit offer'/>
    },
    {
        path: 'events/',
        element: <EventList/>
    },
    {
        path: 'qr-generator/',
        element: <QRGenerator/>
    },
    {
        path: 'winners/',
        element: <Winners/>
    },
    {
        path: 'users/',
        element: <UserList/>
    },
    {
        path: 'bars/',
        element: <BarList/>
    },
    {
        path: 'branches/',
        element: <BranchList/>
    }
])


export default function Router()
{
    return <RouterProvider router={router}/>
}