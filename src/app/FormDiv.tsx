'use client'
import './formdiv.css'
import {Container, Row, Col, Form, Button, FormGroup} from 'react-bootstrap';
import { log } from 'console';
import { Dispatch, SetStateAction, useState } from 'react';
import { resultsDataProp } from './results';

const max_sentence = 100;

type props = {
  setResults: Dispatch<SetStateAction<resultsDataProp | null>>
}

const FormDiv = ({setResults}  : props) => {

    const [loading, setLoading] = useState<boolean>(false) 

    const handleSubmit = async (event:React.SyntheticEvent) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
      setLoading(true)
  
      // Get data from the form.
      const target  = event.target as typeof event.target & {
        age: { value: number };
        gender: { value: string };
        specific_topic: { value: string };
        n_sentence: { value: number };
      };

      const data = {
        age: target.age.value,
        gender: target.gender.value,
        specific_topic: target.specific_topic.value,
        n_sentence: Math.min(target.n_sentence.value, max_sentence)
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/story'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()

      setLoading(true)
      setResults(result)
      
    }

    return (
      <>
      {
        loading ? (
          <div className='loading-overlay'>
            <div className='loading-spinner-area'>
              <div className="spinner-grow text-primary" role="status">
              </div>
              <div className="spinner-grow text-success" role="status">
              </div>
              <div className="spinner-grow text-danger" role="status">
              </div>
              <div className="spinner-grow text-warning" role="status">
              </div>
              <div className="spinner-grow text-info" role="status">
              </div>
            </div>
        </div>
        ) : ''
      }
      <Container fluid>
        <Row className='mb-5 mt-5'>
          <h3 className='text-center'>Dongeng Sebelum Tidur</h3>
          <Col xs={12} sm={4} md={6} lg={4} className='mx-auto mt-5 mb-3 form-dongeng-block'>
              <Form className='mx-1 my-5 m-sm-5' method='post' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="age">
                  <Form.Label>Umur Anak</Form.Label>
                  <Form.Control type="number" name='age' placeholder="Masukan umur anak" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="gender">
                  <Form.Label>Jenis kelamin</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>Pilih jenis kelamin</option>
                    <option value="laki-laki">Laki-Laki</option>
                    <option value="perempuan">Perempuan</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="specific_topic" >
                  <Form.Label>Topik cerita</Form.Label>
                  <Form.Control type="text" name='specific_topic' placeholder="Topik cerita" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="number-of-sentence">
                  <Form.Label>Panjang cerita (dalam kalimat)</Form.Label>
                  <Form.Control type="number" name='n_sentence' max={100} placeholder="Jumlah kalimat" required/>
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
      </>
    )
  }
  
  export default FormDiv;