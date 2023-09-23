import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    document.title = 'Today Offers'

    return <PageLayout>
        <Container>
            <center>
                Today Offers Page
            </center>
        </Container>
    </PageLayout>
}