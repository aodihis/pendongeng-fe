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
        <Container className="mx-auto my-5">
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
        <div className="fixed-bottom bottom-nav">
            <Container className="mx-auto my-2">
                <Row className="justify-content-center">
                    <Col lg={4} className="text-center">
                        <Button className="button-nav-back button" onClick={ () => {location.reload();}}>Generate Cerita Baru</Button>
                    </Col>
                </Row>
                    
            </Container>
        </div>
    </>
    )
  }
  
  export default Results;