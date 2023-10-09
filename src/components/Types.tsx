import { Type } from '../interfaces/pokemon.interface'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = { types?: Array<Type> }

enum TypeColor {
    normal = '#9099a1',
    fire = '#ff9c54',
    water = '#4d90d5',
    grass = '#63bb5b',
    electric = '#f3d23b',
    ice = '#74cec0',
    fighting = '#ce4069',
    poison = '#ab6ac8',
    ground = '#d97746',
    flying = '#8fa8dd',
    psychic = '#f97176',
    bug = '#90c12c',
    rock = '#c7b78b',
    ghost = '#5269ac',
    dragon = '#0a6dc4',
    dark = '#5a5366',
    steel = '#5a8ea1',
    fairy = '#ec8fe6'
}

const typeColor = (type: string) => {
    const init = TypeColor;
    return init[type as keyof typeof init]
}


export const Types: React.FC<Props> = ({ types }) => {
    return (
        <>
            <Row>
                <div className='fw-medium'>Types</div>
                {
                    types?.map((type, index) => (
                        <Col>
                            <div key={index} className='fw-bolder fst-italic' style={{ color: typeColor(type.type.name) }}>{type.type.name}</div>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}