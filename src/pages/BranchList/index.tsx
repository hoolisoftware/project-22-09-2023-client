import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';

import Table from '../BranchList/Table'


export default function Page() {
    return <PageLayout
        title={'Branch administration'}
        breadcrumbs={true}
    >
        <Container>
            <Table/>
        </Container>
    </PageLayout>
}