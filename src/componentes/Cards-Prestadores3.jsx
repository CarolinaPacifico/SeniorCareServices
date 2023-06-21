import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardSobre() {
  return (
    <CardGroup className="cardSobre">
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
        <Card.Title>Claúdia dos Santos</Card.Title>
          <Card.Text>
            <li>Cuidadora e auxiliar em asilos</li>
            <li>29 anos</li>
            <li>7 anos de experiência</li>
            <li>Salário Minimo: R$ 1.200 e negociável</li>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
        <Card.Title>Barbara Sales</Card.Title>
          <Card.Text>
          <li>Cuidador de asilos e auxiliar doméstico</li>
            <li>28 anos</li>
            <li>4 anos de experiência</li>
            <li>Salário Minimo: R$ 900 e negociável</li>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/818819/pexels-photo-818819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
        <Card.Title>Marta Alameda</Card.Title>
          <Card.Text>
          <li>Cuidadora em asilos</li>
            <li>25 anos</li>
            <li>3 anos de experiência</li>
            <li>Salário Minimo: R$ 995</li>
          </Card.Text>
        </Card.Body>
      </Card>


      </CardGroup>

  );
}

export default CardSobre;