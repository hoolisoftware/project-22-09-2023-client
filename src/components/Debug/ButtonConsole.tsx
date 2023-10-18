type Props<Type> ={
    value?: Type
    children?: string
}

export default function ButtonConsole<Type>(props: Props<Type>) {
    return <button style={{display: 'block', marginBottom: 16}} onClick={
        (e) => {e.preventDefault(); console.log(props.children+' > ', props.value)}
    }>
        {props.children ? props.children : typeof props.value}
    </button>
}
