import css from './index.module.scss'

import Header from '../Header'
import Footer from '../Footer'
import ChangeBranchModal from '../ChangeBranchModal'
import ChangeBarModal from '../ChangeBarModal'

export default function PageLayout(props: React.HTMLAttributes<HTMLDivElement>)
{
    return <div className={css.layout}>
        <div>
            <Header/>
            {props.children}
            <ChangeBarModal/>
            <ChangeBranchModal/>
        </div>
        <Footer/>
    </div>
}