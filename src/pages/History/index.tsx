import Container from '../../components/Container'
import PageLayout from '../../components/ProtectedPageLayout';
import Table from './Table'


export default function Page() {
    return <PageLayout
        title={'History'}
        breadcrumbs={true}
    >
        <Container>
            <Table/>
        </Container>
    </PageLayout>
}