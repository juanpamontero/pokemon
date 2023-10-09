import { useFetch } from "../hooks/useFetch";
import { RootObjectPokemon } from "../interfaces/pokemon.interface";
import { Image } from "react-bootstrap";
import { Types } from './Types'
import { RenderWeightAndHeight } from "./RenderWeightAndHeight";
import { Abilities } from './Abilities'
import { Stats } from "./Stats";

type Props = {
    url: string;
}

export const PokeCard: React.FC<Props> = ({ url }) => {
    const { data, error, loading } = useFetch<RootObjectPokemon>(url)
    if (loading) {
        <h3>loading...</h3>
    } else if (error) {
        <h3>{error.message}</h3>
    } else {
        return (
            <>
                <div className="border border-black rounded m-1">
                    <div className="p-2">
                        <Image src={data?.sprites.other?.dream_world.front_default} alt={`imagen de ${data?.name}`} fluid className="m-2" style={{ height: "110px" }} />
                        <p className="fs-4 fw-medium">{data?.name}</p>
                        <RenderWeightAndHeight weight={data?.weight ?? 0} height={data?.height ?? 0} />
                        <Types types={data?.types} />
                        <Abilities abilities={data?.abilities} />
                        <Stats stats={data?.stats} />
                    </div>
                </div>
            </>
        )
    }
}
