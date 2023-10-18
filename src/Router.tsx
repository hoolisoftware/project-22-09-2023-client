import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import History from './pages/History'
import EventOfferCreateUpdate from './pages/EventOfferCreateUpdate'
import EventOfferDetail from './pages/EventOfferDetail'
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
import BetList from './pages/BetList'
import BetCreateUpdate from './pages/BetCreateUpdate'
import EmployeeCreateUpdate from './pages/EmployeeCreateUpdate'
import OfferList from '@pages/OfferList'
import OfferCreateUpdate from '@pages/OfferCreateUpdate'
import Login from './pages/Login'
import GetOfferList from '@pages/GetOfferList'
import GetOfferDetail from '@/pages/GetOfferDetail'
import Page from '@components/Page'


const router = createBrowserRouter([
    {
        path: 'login/',
        element: <Page page={<Login/>}/>
    },
    {
        path: '/',
        element: <Page protected page={<Dashboard/>}/>
    },
    {
        path: 'account/settings/',
        element: <Page protected page={<AccountSettings/>}/>
    },
    {
        path: 'history/',
        element: <Page protected page={<History/>}/>
    },
    {
        path: 'events/offers/:offerId/',
        element: <Page protected page={<EventOfferDetail/>}/>
    },
    {
        path: 'events/offers/create/',
        element: <Page protected page={<EventOfferCreateUpdate/>}/>
    },
    {
        path: 'events/offers/:offerId/update/',
        element: <Page protected page={<EventOfferCreateUpdate/>}/>
    },
    {
        path: 'events/',
        element: <Page protected page={<EventList/>}/>
    },
    {
        path: 'qr-generator/',
        element: <Page protected page={<QRGenerator/>}/>
    },
    {
        path: 'qr-generator/:tableNo/',
        element: <Page protected page={<QRGeneratorDetail/>}/>
    },
    {
        path: 'winners/',
        element: <Page protected page={<Winners/>}/>
    },
    {
        path: 'bars/',
        element: <Page protected page={<BarList/>}/>
    },
    {
        path: 'bars/create/',
        element: <Page protected page={<BarCreateUpdate/>}/>
    },
    {
        path: 'bars/:barId/update/',
        element: <Page protected page={<BarCreateUpdate/>}/>
    },
    {
        path: 'users/',
        element: <Page protected page={<UserList/>}/>
    },
    {
        path: 'users/create/',
        element: <Page protected page={<UserCreateUpdate/>}/>
    },
    {
        path: 'users/:userId/update/',
        element: <Page protected page={<UserCreateUpdate/>}/>
    },
    {
        path: 'branches/',
        element: <Page protected page={<BranchList/>}/>
    },
    {
        path: 'branches/create',
        element: <Page protected page={<BranchCreateUpdate/>}/>
    },
    {
        path: 'branches/:branchId/update',
        element: <Page protected page={<BranchCreateUpdate/>}/>
    },
    {
        path: 'employees/:branchId/create/',
        element: <Page protected page={<EmployeeCreateUpdate/>}/>
    },
    {
        path: 'employees/:employeeId/update/',
        element: <Page protected page={<EmployeeCreateUpdate/>}/>
    },
    {
        path: 'offers/',
        element: <Page protected page={<OfferList/>}/>
    },
    {
        path: 'offers/create',
        element: <Page protected page={<OfferCreateUpdate/>}/>
    },
    {
        path: 'offers/:offerId/update',
        element: <Page protected page={<OfferCreateUpdate/>}/>
    },
    {
        path: 'bets/',
        element: <Page protected page={<BetList/>}/>
    },
    {
        path: 'bets/create',
        element: <Page protected page={<BetCreateUpdate/>}/>
    },
    {
        path: 'bets/:betId/update',
        element: <Page protected page={<BetCreateUpdate/>}/>
    },
    {
        path: 'get-offer/:branchId/:tableNo/',
        element: <Page protected page={<GetOfferList/>}/>
    },
    {
        path: 'get-offer/:branchId/:tableNo/submit',
        element: <Page protected page={<GetOfferDetail/>}/>
    }
])


export default function Router()
{
    return <RouterProvider router={router}/>
}