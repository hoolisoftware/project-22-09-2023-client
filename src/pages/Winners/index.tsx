import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';
import Table from './Table'


export default function Page() {
    document.title = 'Winners'

    return <PageLayout>
        <Container>
            <Table/>
        </Container>
    </PageLayout>
}