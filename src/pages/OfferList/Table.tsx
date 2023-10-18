import { APIOffer, APIOrganization } from '@global/models'
import { useOffers } from '@/hooks/use-query';
import TableObject from '@components/TableObject'


export default function CustomizedTables() {
  const data = useOffers()

  return (
    <TableObject
      data={data}
      availableMethods={['create', 'retrieve', 'update', 'delete']}
      urlCreate='/offers/create/'
      getUrlUpdate={ (item: APIOffer) => `/offers/${item.id}/update/` }
      getModalDeleteObjectString={ (item: APIOffer) => `offer with id"${item.id}"` }
      columns={
        [
          {
            label: 'ID',
            field: 'id',
            width: 100
          },
          {
            label: 'Organization',
            field: 'organization',
            width: 200,
            render: (field: APIOrganization) => field.name
          },
          {
            label: 'Action ID',
            field: 'action_id',
            width: 200
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