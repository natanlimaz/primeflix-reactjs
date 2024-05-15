import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import './home.css';

function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: '8483cdb2e2d10c9c0df4c0179ff368d1',
                    language: 'pt-BR',
                    page: 1
                }
            });

            setFilmes(response.data.results.slice(0, 10));
            setloading(false);
        }

        loadFilmes();
        
    }, []);

    if(loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="lista-filmes">
            {
                filmes.map((filme) => (
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                ))
            }
            </div>
        </div>
    );
}

export default Home;