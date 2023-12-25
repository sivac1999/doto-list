import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaskList from './TaskList';
import MyVerticallyCenteredModal from './updateTask';
function App() {
  return (
    <Container className=' p-5 ' >
       <Row className="justify-content-md-center row">
        <Col lg="6" className='col p-3'>

     <Header />
     <AddTask />
     <TaskList />
     <MyVerticallyCenteredModal />
     </Col>
     </Row>
     </Container>
  );
}

export default App;
