import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    document.title = 'Winners'

    return <PageLayout>
        <Container>
            <center>
                Winners page
            </center>
        </Container>
    </PageLayout>
}