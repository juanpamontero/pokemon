import { Stat } from '../interfaces/pokemon.interface'

type Props = {
    stats?: Array<Stat>;
}

const overloadStat = (statt: number) => {
    if (statt > 100) {
        return 100
    } else {
        return statt
    }
}

export const Stats: React.FC<Props> = ({ stats }) => {
    return (
        <>
            <div className='fw-medium'>Stats</div>
            {
                stats?.map((stat, index) => (
                    <div key={index} className='text-start'>
                        {stat.stat.name}
                        <div className='rounded text-center' style={{
                            backgroundColor: "black",
                            color: "white",
                            width: `${overloadStat(stat.base_stat)}%`,
                        }}>{stat.base_stat}</div>
                    </div>
                ))
            }
        </>
    )
}