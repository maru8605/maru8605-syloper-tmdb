import React, {useState, useEffect} from 'react'
import ActorsCard from './ActorsCard'
import { fetchActors } from '../service';

const ActorsDetails = ({match}) => {
    let params = match.id
    const [actors, setActors] = useState([]);
    const {id, img, character, name} = actors

    useEffect(() => {
        const fetchApi = async() => {
            setActors( await fetchActors(params.id))   
        } 
        fetchApi()
    }, [params.id])


    return (
        <div>
            {actors.slice(0, 6).map((index, item) => (
                <ActorsCard
                    key={index}
                    item={item}
                />
            ))}
            
        </div>
    )
}

export default ActorsDetails
