import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    document.title = 'Bar administration'

    return <PageLayout>
        <Container>
            <center>
                Bar administration page
            </center>
        </Container>
    </PageLayout>
}