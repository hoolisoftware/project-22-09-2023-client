import { useUsers } from '@/hooks/use-query';
import TableObject from '@components/TableObject'
import { APIUser } from '@/global/models';

export default function CustomizedTables() {
  const data = useUsers()

  return (
    <TableObject
      data={data}
      availableMethods={['create', 'retrieve', 'update', 'delete']}
      urlCreate='/users/create/'
      getUrlUpdate={ (item: APIUser) => `/users/${item.id}/update/` }
      getModalDeleteObjectString={ (item: APIUser) => `user "${item.username}"` }
      columns={
        [
          {
            label: 'ID',
            field: 'id',
            width: 100
          },
          {
            label: 'Username',
            field: 'username',
            width: 200
          },
          {
            label: 'User role',
            field: 'role',
            width: 100,
            render: (field: string) => field || '-'
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