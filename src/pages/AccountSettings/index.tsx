import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    return <PageLayout
        title={'Account Settings'}
        breadcrumbs={true}
    >
        <Container>
            <center>
                Account settings page
            </center>
        </Container>
    </PageLayout>
}