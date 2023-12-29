import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      


<Container>
      
      <Row>
        <Col></Col>
        <Col>
        <Card style={{ width: '25rem' }} className='mt-4'>
          <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkukvckg3fiSuzXVB77Qet7YBJIFpQT9sVcuySajdYFhrB4NNcXDyZgTKEguMHxKsG10&usqp=CAU' />
          <Card.Body>
            <Card.Title>
            <Button variant="primary"><h5>Sweetest Cutest bestest Miss <b style={{color:'#78ffd6'}}>Megha</b></h5></Button>
            </Card.Title>
            <Card.Text>
              <span style={{color:'#f953c6'}}> Good Afternoon <img height={20} width={20} src='https://cdn-icons-png.flaticon.com/128/11175/11175472.png' /></span> .Wishing you a wonderful day ahead.<img height={20} width={20} src='https://cdn-icons-png.flaticon.com/128/2278/2278992.png' />
              Work Hard Stay Healthy , Keep Smiling .
              Take Care.
              This is a little effort to make you smile Hope you like it <img height={20} width={20} src='https://cdn-icons-png.flaticon.com/128/3670/3670159.png' />
            </Card.Text>

           
            <ListGroup>
            <ListGroup.Item variant="info">
                Chashme se better hota hain vision ...
                <p>
                If being Cutie was a crime, you'd be in prison ...

                </p>
          </ListGroup.Item>
            </ListGroup>
            
          </Card.Body>
        </Card>

       
       
       </Col>
        <Col></Col>
      </Row>
</Container>


         
    </div>
  );
}

export default App;
