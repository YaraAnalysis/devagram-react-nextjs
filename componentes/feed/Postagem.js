import Link from "next/link";
import Avatar from "../avatar";
import Image from "next/image";

import imgCurtir from '../../public/images/curtir.svg';
import imgCurtido from '../../public/images/curtido.svg';
import imgComentarioAtivo from '../../public/images/comentarioAtivo.svg';
import imgComentarioCinza from '../../public/images/comentarioCinza.svg';

export default function Postagem({
    usuario,
    fotoDoPost,
    descricao,
    comentarios
}) {
    
    return (
        <div className="postagem">
            <Link href={`/perfil/${usuario.id}`}>
                <section className="cabecalhoPostagem">
                    <Avatar src={usuario.avatar} />
                    <strong>{usuario.nome}</strong>
                </section>
            </Link>

            <div className="fotoDaPostagem">
                <img src={fotoDoPost} alt='foto d postagem' />
            </div>

            <div className="rodapeDaPostagem">
                <div className="acoesDaPostagem">
                    <Image
                        src={imgCurtir}
                        alt='icone curtir'
                        width={20}
                        height={20}
                        onClick={() => console.log('curtir')}
                    />

                    <Image
                        src={imgComentarioCinza}
                        alt='icone comentar'
                        width={20}
                        height={20}
                        onClick={() => console.log('comentar')}
                    />

                    <span className="quantidadeCurtidas">
                        Curtido por <strong>32 pessoas</strong>
                    </span>
                </div>

                <div className="descricaoDaPostagem">
                    <strong className="nomeUsuario">{usuario.nome}</strong>
                    <p className="descricao">
                        {descricao}
                    </p>
                </div>

                <div className="comentariosDaPublicacao">
                    {comentarios.map((comentario, i) => (
                        <div className="comentario" key={i}>
                            <strong className="nomeUsuario">{comentario.nome}</strong>
                            <p className="descricao">{comentario.mensagem}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}