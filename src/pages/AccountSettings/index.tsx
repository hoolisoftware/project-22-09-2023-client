import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    document.title = 'Account Settings'

    return <PageLayout>
        <Container>
            <center>
                Account settings page
            </center>
        </Container>
    </PageLayout>
}