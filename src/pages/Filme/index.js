import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

import api from '../../services/api'

import './filme-info.css';

function Filme() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: '8483cdb2e2d10c9c0df4c0179ff368d1',
                    language: 'pt-BR'
                }
            })
            .then( (response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch( () => {
                navigate("/", { replace: true });
                return;
            });
        }

        loadFilme();
        
        // unmount
        return () => {
            
        }
    }, [id, navigate]); // pois são externos, coloco a dependencia do use effect pq vai q demora a pegar esse id, ai ele chama novamente quando receber


    function salvarFilme() {
        const filmesSalvos = JSON.parse(localStorage.getItem("@primeflix")) || [];

        const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id);

        if(hasFilme) {
            toast.warn("Esse filme já está na lista!");
        
            return;
        }
        else {
            filmesSalvos.push(filme);
            localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
            toast.success("Filme salvo com sucesso!");
        }
    }


    if(loading) {
        return (
            <div className="filme-info">
                <h2>Carregando detalhes...</h2>
            </div>
        );
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10.0</strong>
        
            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Filme;