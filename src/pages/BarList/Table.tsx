import { APIOrganization } from '@global/models'
import { useOrganizations } from '@/hooks/use-query';
import TableObject from '@components/TableObject'


export default function CustomizedTables() {
  const data = useOrganizations()

  return (
    <TableObject
      data={data}
      availableMethods={['create', 'retrieve', 'update', 'delete']}
      urlCreate='/bars/create/'
      getUrlUpdate={ (item: APIOrganization) => `/bars/${item.id}/update/` }
      getModalDeleteObjectString={ (item: APIOrganization) => `bar "${item.name}"` }
      columns={
        [
          {
            label: 'ID',
            field: 'id',
            width: 100
          },
          {
            label: 'Bar name',
            field: 'name',
            width: 200
          },
          {
            label: 'Branches',
            field: 'branches_count',
            width: 100
          },
          {
            label: 'Created at',
            field: 'created',
            width: 200
          }
        ]
      }
    />
  )
}