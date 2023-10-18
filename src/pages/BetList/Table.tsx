import { APIBet, APIBranch, APIOffer } from '@global/models'
import { useBets } from '@/hooks/use-query';
import TableObject from '@components/TableObject'


export default function CustomizedTables() {
  const data = useBets()

  return (
    <TableObject
      data={data}
      availableMethods={['create', 'retrieve', 'update', 'delete']}
      urlCreate='/bets/create/'
      getUrlUpdate={ (item: APIBet) => `/bets/${item.id}/update/` }
      getModalDeleteObjectString={ (item: APIBet) => `bet with "${item.id}" id` }
      columns={
        [
          {
            label: 'ID',
            field: 'id',
            width: 50
          },
          {
            label: 'Bar name',
            field: 'branch',
            width: 200,
            render: (field: APIBranch) => field.organization.name
          },
          {
            label: 'ACTION ID',
            field: 'offer',
            width: 150,
            render: (field: APIOffer) => field.action_id
          },
          {
            label: 'Table Number',
            field: 'table_number',
            width: 150,
          },
          {
            label: 'Bet',
            field: 'bet',
            width: 150,
          },
          {
            label: 'Paid',
            field: 'paid',
            width: 150,
            render: (field: boolean) => field ? 'yes' : 'no'
          },
          {
            label: 'Created at',
            field: 'created',
          }
        ]
      }
    />
  )
}