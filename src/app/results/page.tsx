import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form} from 'react-bootstrap';

export default function Home() {
  return (
    <main>
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Umur Anak</Form.Label>
            <Form.Control type="text" name="umur" placeholder="Masukan umur anak" />
          </Form.Group>
        </Form>
      </div>
    </main>
  )
}
