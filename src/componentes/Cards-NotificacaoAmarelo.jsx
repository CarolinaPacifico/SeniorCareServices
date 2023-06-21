import Card from 'react-bootstrap/Card';

function CardsNotificacaoAmarelo() {
  return (
    <div>
<>
      {[
        'Warning'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Clientes Novos</Card.Header>
          <Card.Body>
            <Card.Text>
            Atenda a novas pessoas que buscam seu serviço.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>

</div>

  );
}

export default CardsNotificacaoAmarelo;