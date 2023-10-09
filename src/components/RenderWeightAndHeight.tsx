import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
    weight: number;
    height: number;
}

export const RenderWeightAndHeight: React.FC<Props> = ({ height, weight }) => {
    return (
        <>
            <Row>
                <Col>
                    <p className="fs-6 fw-normal">Weight: {weight / 10} Kg</p>
                </Col>
                <Col>
                    <p className="fs-6 fw-normal">Height: {height / 10} M</p>
                </Col>
            </Row>
        </>
    )
}