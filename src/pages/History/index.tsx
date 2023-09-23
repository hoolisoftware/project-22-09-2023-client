import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    document.title = 'History'

    return <PageLayout>
        <Container>
            <center>
                History page
            </center>
        </Container>
    </PageLayout>
}