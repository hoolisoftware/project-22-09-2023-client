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
import QRGeneratorDetail from './pages/QRGeneratorDetail'
import Winners from './pages/Winners'
import AccountSettings from './pages/AccountSettings'
import BarList from './pages/BarList'
import BarCreateUpdate from './pages/BarCreateUpdate'
import UserList from './pages/UserList'
import UserCreateUpdate from './pages/UserCreateUpdate'
import BranchList from './pages/BranchList'
import BranchCreateUpdate from './pages/BranchCreateUpdate'
import EmployeeCreateUpdate from './pages/EmployeeCreateUpdate'


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
        element: <OfferDetail/>
    },
    {
        path: 'offers/create/',
        element: <OfferCreateUpdate/>
    },
    {
        path: 'offers/:offerId/update/',
        element: <OfferCreateUpdate/>
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
        path: 'qr-generator/:tableNo/',
        element: <QRGeneratorDetail/>
    },
    {
        path: 'winners/',
        element: <Winners/>
    },
    {
        path: 'bars/',
        element: <BarList/>
    },
    {
        path: 'bars/create/',
        element: <BarCreateUpdate/>
    },
    {
        path: 'bars/:barId/update/',
        element: <BarCreateUpdate/>
    },
    {
        path: 'users/',
        element: <UserList/>
    },
    {
        path: 'users/create/',
        element: <UserCreateUpdate/>
    },
    {
        path: 'users/:userId/update/',
        element: <UserCreateUpdate/>
    },
    {
        path: 'branches/',
        element: <BranchList/>
    },
    {
        path: 'branches/create',
        element: <BranchCreateUpdate/>
    },
    {
        path: 'branches/:branchId/update',
        element: <BranchCreateUpdate/>
    },
    {
        path: 'employees/:branchId/create/',
        element: <EmployeeCreateUpdate/>
    },
    {
        path: 'employees/:employeeId/update/',
        element: <EmployeeCreateUpdate/>
    }
])


export default function Router()
{
    return <RouterProvider router={router}/>
}