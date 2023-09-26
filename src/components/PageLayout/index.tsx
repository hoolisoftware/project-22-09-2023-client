import css from './index.module.scss'

import Header from '../Header'
import Footer from '../Footer'
import ChangeBranchModal from '../ChangeBranchModal'
import ChangeBarModal from '../ChangeBarModal'
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

    return <div className={css.layout}>

        <div>
            <Header/>
            {
                (Array.isArray(props.breadcrumbs) || props.breadcrumbs === true) && (
                    <Breadcrumbs back={props.back} title={props.title} breadcrumbs={props.breadcrumbs}/>
                )
            }
            {props.children}
            <ChangeBarModal/>
            <ChangeBranchModal/>
        </div>
        <Footer/>
    </div>
}