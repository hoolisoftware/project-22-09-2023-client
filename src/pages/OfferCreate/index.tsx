import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    document.title = 'Create Offer'

    return <PageLayout>
        <Container>
            <center>
                Offer Creation Page
            </center>
        </Container>
    </PageLayout>
}