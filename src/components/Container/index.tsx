import css from './index.module.scss'


interface props extends React.HTMLAttributes<HTMLDivElement> {}


export default function Container(props: props)
{
    return <div className={css.container}>
        {props.children}
    </div>
}