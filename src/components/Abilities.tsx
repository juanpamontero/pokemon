import { Ability } from '../interfaces/pokemon.interface'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
    abilities?: Array<Ability>;
}

export const Abilities: React.FC<Props> = ({ abilities }) => {
    return (
        <>
            <div className='fw-medium'>Abilities</div>
            <Row>
                {
                    abilities?.map((ability, index) => (
                        <Col key={index}>
                            <p className="fs-6 fw-normal">{ability.ability.name}</p>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}