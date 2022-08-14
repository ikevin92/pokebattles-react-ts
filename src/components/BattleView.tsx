import { ListBattle } from './ListBattle';


export const BattleView = () => {
  return (
    <div className='container text-bg-primary position-relative'>
      <h3 className='p-5'>Listos para el combate</h3>
      <ListBattle />
    </div>
  )
}