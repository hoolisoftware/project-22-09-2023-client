import css from './index.module.scss'

import Header from '../Header'
import Footer from '../Footer'

export default function PageLayout(props: React.HTMLAttributes<HTMLDivElement>)
{
    return <div className={css.layout}>
        <div>
            <Header/>
            {props.children}
        </div>
        <Footer/>
    </div>
}