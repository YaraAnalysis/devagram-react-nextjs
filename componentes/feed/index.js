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
                    nome: 'Yara Vasconcellos',
                    avatar: null,
                },
                fotoDoPost: 'https://img.freepik.com/fotos-gratis/aguia-careca-majestosa-empoleirada-olhando-fixamente-com-olhos-afiados-gerados-por-ia_188544-35430.jpg',
                descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
                curtidas: [],
                comentarios: [
                    {
                        nome: 'Fulano',
                        mensagem: 'Muito legal!'
                    },
                    {
                        nome: 'Fulano de tal',
                        mensagem: 'Imagem muito bacana!'
                    },
                    {
                        nome: 'Fulanoda esquina',
                        mensagem: 'Isso aí! Continue assim...!'
                    }
                ]
            },
            {
                id: '2',
                usuario: {
                    id: '2',
                    nome: 'Douglas Oliveira',
                    avatar: null,
                },
                fotoDoPost: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg',
                descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
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