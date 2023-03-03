import { useEffect } from "react";
import { getAllEpisodes } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

const Episodes = () => {

    const episodes = useSelector((state) => state.allEpisodes.results);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEpisodes());
    }, []);

    const handleClose = (_id) => {
        window.alert('closing cards functionality coming soon');
      };

    return (
        <div>
            <h2>episodes component</h2>
            {
                episodes?.map((episode) => {
                    return (
                        <EpisodeCard
                            key={`char${episode.id}`}
                            id={episode.id}
                            name={episode.name}
                            episode={episode.episode}
                            air_date={episode.air_date}
                            created={episode.created}
                            onClose={() => handleClose(episode.id)}
                        />
                    );
                })
            }
        </div>
    );
};

export default Episodes;