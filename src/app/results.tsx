import { Container, Row, Col, Nav, Button } from "react-bootstrap";


export type resultsDataProp = {
    title: string,
    story: string[]
}

type props = {
    results: resultsDataProp
}
const Results = ({results}  : props) => {
    return (
        <>
        <Nav className="justify-content-end my-3">
           <Container className="justify-content-end d-flex items">
                <Button className="button-nav-back" onClick={ () => {location.reload();}}>Kembali</Button>
           </Container>
        </Nav>
            
        <Container className="mx-auto">
            <Row className="justify-content-center">
                <Col lg={9}>
                    <h1>{results.title}</h1>
                    <hr></hr>
                    {
                        results.story.map((el, i) => {
                            return <p key={i}>{el}</p>;
                        })
                    }
                </Col>
            </Row>
        </Container>
    </>
    )
  }
  
  export default Results;