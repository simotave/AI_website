import React from 'react';
import {Card, Col, Row} from "react-bootstrap";

function creaProfilo(o){
    return(
        <Profilo id={o.id} title={o.title} imgSrc={o.imgSrc} description={o.description} location={o.location} lat={o.lat} lng={o.lng} />
    )
}
function Profilo(props) {
    const{id, title, imgSrc, description, location}=props;
    return (
        <div id={`card-${id}`} className={'card'}>
        <Card>
            <Card.Img src={imgSrc} style={{ width: '500px', height: '500px'}} className="mx-auto my-2"/>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );

}

function Elenco(props){
    let{dati} = props;
    // Funzione per scorrere verso la Card corrispondente
    const scrollToCard = (id) => {
        const element = document.getElementById(`card-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <div className={'elenco'}>
            <ul className={"elenco-cliccabile"}>
                {dati.map((profilo) => (
                    <li key={profilo.id} onClick={() => scrollToCard(profilo.id)} style={{ cursor: 'pointer' }} className={'elemento-cliccabile'}>
                        {profilo.title}
                    </li>
                ))}
            </ul>
            <Row>
        <Col>
            {
                dati.map(creaProfilo)
            }
        </Col>
            </Row>
</div>
);
}

export default Elenco;