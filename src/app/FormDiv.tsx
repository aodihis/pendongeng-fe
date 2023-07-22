'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './formdiv.css'
import {Container, Row, Col, Form, Button, FormGroup} from 'react-bootstrap';

const FormDiv = () => {
    return (
      <Container fluid>
        <Row className='mb-5 mt-5'>
          <h3 className='text-center'>Dongeng Sebelum Tidur</h3>
          <Col md={4} className='mx-auto mt-5 mb-3 form-dongeng-block'>
              <Form className='m-5' method='post'>
                <Form.Group className="mb-3" controlId="age">
                  <Form.Label>Umur Anak</Form.Label>
                  <Form.Control type="text" name='age' placeholder="Masukan umur anak" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="gender">
                  <Form.Label>Jenis kelamin</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Pilih jenis kelamin</option>
                    <option value="laki-laki">Laki-Laki</option>
                    <option value="perempuan">Perempuan</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="specific_topic">
                  <Form.Label>Topik cerita</Form.Label>
                  <Form.Control type="text" name='specific_topic' placeholder="Topik cerita" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="number-of-sentence">
                  <Form.Label>Panjang cerita (dalam kalimat)</Form.Label>
                  <Form.Control type="number" name='n_sententce' max={100} placeholder="Jumlah kalimat" />
                </Form.Group>
                <div className='text-center'>
                  <Button variant="primary" type="submit">
                    Lanjut
                  </Button>
                </div>
                
              </Form>
          </Col>
        </Row>
      </Container>
    )
  }
  
  export default FormDiv;