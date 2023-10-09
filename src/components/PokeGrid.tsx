import { useFetch } from "../hooks/useFetch"
import { RootObjectPokemons } from "../interfaces/pokemons.interface"
import { PokeCard } from "./PokeCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const PokeGrid = () => {
    const { data, error, loading } = useFetch<RootObjectPokemons>("https://pokeapi.co/api/v2/pokemon/")
    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>{error.message}</div>
    } else {
        return (
            <>
                <Container className="text-center">
                    <Row className="align-items-center justify-content-center">
                        {data?.results.map((pokemon, index) => (
                            <Col key={index} lg='4' md='6' sm='12' className="text-center">
                                <PokeCard url={pokemon.url} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        )
    }
}