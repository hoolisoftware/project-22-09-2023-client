import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    document.title = 'Dashboard'

    return <PageLayout>
        <Container>
            <center>
                QR generator page
            </center>
        </Container>
    </PageLayout>
}