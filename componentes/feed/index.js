import { useEffect, useState } from "react";
import Postagem from "./Postagem";

export function Feed({ usuarioLogado }) {
    const [listaDePostagens, setListaDePostagens] = useState([]);

    useEffect(() => {
        console.log('carrefar o feed');
        setListaDePostagens([
            {
                id: '1',
                usuario: {
                    id: '1',
                    nome: 'Yara',
                    avatar: null,
                },
                fotoDoPost: '',
                descricao: '',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Fulano',
                        mensagem: 'Muito legal!'
                    }
                ]
            },
            {
                id: '2',
                usuario: {
                    id: '2',
                    nome: 'Douglas',
                    avatar: null,
                },
                fotoDoPost: '',
                descricao: '',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Ciclano',
                        mensagem: 'Muito bom!'
                    }
                ]
            }
        ])
    }, [usuarioLogado]);
    
    return (
        <div className="feedContainer">
            {listaDePostagens.map(dadosPostagem => (
                <Postagem key={dadosPostagem.id} {...dadosPostagem} />
            ))}
        </div>
    )
}