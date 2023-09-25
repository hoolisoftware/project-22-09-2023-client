import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    document.title = 'User administration'

    return <PageLayout>
        <Container>
            <center>
                User administration page
            </center>
        </Container>
    </PageLayout>
}