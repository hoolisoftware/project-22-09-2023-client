import css from './index.module.scss'

import { Box } from '@mui/material'
import { useSelector } from 'react-redux/es/hooks/useSelector'

import { RootState } from '@/app/store'
import Header from '../Header'
import Footer from '../Footer'
import ChangeBranchModal from '../ChangeBranchModal'
import ChangeOrganizationModal from '../ChangeOrganizationModal'
import Breadcrumbs, {type Breadcrumb} from '../Breadcrumbs'


interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    title: string
    breadcrumbs?: Breadcrumb[] | boolean
    back?: boolean
}

export default function PageLayout(props: Props)
{
    document.title = props.title
    const filters = useSelector((state: RootState) => state.filters)

    return <>
        {
            filters.organization && filters.branch &&
            <div className={css.layout}>
                <div>
                    <Header/>
                    <Box component={'main'}>
                        {
                            (Array.isArray(props.breadcrumbs) || props.breadcrumbs === true) && (
                                <Breadcrumbs back={props.back} title={props.title} breadcrumbs={props.breadcrumbs}/>
                            )
                        }
                        {props.children}
                    </Box>
                </div>
                <Footer/>
            </div>
        }
        <ChangeOrganizationModal/>
        <ChangeBranchModal/>
    </> 
}