import type { APIBranch, APIOrganization } from '@/global/models';
import { useBranches } from '@/hooks/use-query';
import TableObject from '@components/TableObject'


export default function CustomizedTables() {
    const data = useBranches()

    return (
        <TableObject
            data={data}
            availableMethods={['create', 'retrieve', 'update', 'delete']}
            urlCreate='/branches/create/'
            getUrlUpdate={(item: APIBranch) => `/branches/${item.id}/update/`}
            getModalDeleteObjectString={(item: APIBranch) => `branch "${item.address}"`}
            columns={
                [
                    {
                        label: 'ID',
                        field: 'id',
                        width: 50
                    },
                    {
                        label: 'Organization',
                        field: 'organization',
                        render: (field: APIOrganization) => field.name,
                        width: 100
                    },
                    {
                        label: 'Branch address',
                        field: 'address',
                    },
                    {
                        label: 'Created',
                        field: 'created',
                        width: 200,
                    }
                ]
            }
        />
    )
}