import Container from '../../components/Container'
import PageLayout from '../../components/ProtectedPageLayout';

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