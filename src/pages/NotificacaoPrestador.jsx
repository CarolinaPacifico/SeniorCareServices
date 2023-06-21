import NavBarPrestador from '../componentes/NavBarPrestador'
import CardsNotificacaoVerde from '../componentes/Cards-NotificacaoVerde';
import CardsNotificacaoAmarelo from '../componentes/Cards-NotificacaoAmarelo';
import CardsNotificacaoVermelho from '../componentes/Cards-NotificacaoVermelho';

function NotificacaoPrestador() {
  return (
    <div>
      <NavBarPrestador/>
      <h1>Confira os clientes que estão interessados no seu serviço</h1>
      <br />
      <div className='cardcolorido'>
      <CardsNotificacaoVerde/>
      <CardsNotificacaoAmarelo/>
      <CardsNotificacaoVermelho/>
      </div>
    </div>
  );
}

export default NotificacaoPrestador;