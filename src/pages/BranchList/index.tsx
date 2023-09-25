import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    document.title = 'Branch administration'

    return <PageLayout>
        <Container>
            <center>
                Branch administration page
            </center>
        </Container>
    </PageLayout>
}