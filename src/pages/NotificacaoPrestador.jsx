import NavBarPrestador from '../componentes/NavBarPrestador'
import CardsNotificacaoVerde from '../componentes/Cards-NotificacaoVerde';
import CardsNotificacaoAmarelo from '../componentes/Cards-NotificacaoVerde';
import CardsNotificacaoVermelho from '../componentes/Cards-NotificacaoVerde';

function NotificacaoPrestador() {
  return (
    <div>
      <NavBarPrestador/>
      <h1>Confira os clientes que estão interessados no seu serviço</h1>
      <CardsNotificacaoVerde/>
      <CardsNotificacaoAmarelo/>
      <CardsNotificacaoVermelho/>
    </div>
  );
}

export default NotificacaoPrestador;