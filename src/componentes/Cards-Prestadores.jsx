import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardSobre() {
  return (
    <CardGroup className="cardSobre">
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
        <Card.Title>Julia Baltar</Card.Title>
          <Card.Text>
          <li>Enfermeira</li>
            <li>34 anos</li>
            <li>6 anos de experiência</li>
            <li>Salário Minimo: R$ 1.200 e negociável</li>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <Card.Body>
        <Card.Title>Nilson Muradas</Card.Title>
          <Card.Text>
          <li>Enfermeira</li>
            <li>34 anos</li>
            <li>6 anos de experiência</li>
            <li>Salário Minimo: R$ 1.200 e negociável</li>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
        <Card.Title>Marcos Fontes</Card.Title>
          <Card.Text>
          <li>Enfermeira</li>
            <li>34 anos</li>
            <li>6 anos de experiência</li>
            <li>Salário Minimo: R$ 1.200 e negociável</li>
          </Card.Text>
        </Card.Body>
      </Card>


      </CardGroup>

  );
}

export default CardSobre;