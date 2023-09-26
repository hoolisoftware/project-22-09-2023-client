import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';
import Table from './Table'


export default function Page() {
    return <PageLayout
        title={'Winners'}
    >
        <Container>
            <Table/>
        </Container>
    </PageLayout>
}