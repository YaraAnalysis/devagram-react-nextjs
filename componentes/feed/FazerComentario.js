import { useState } from "react";
import Avatar from "../avatar";

export default function FazerComentario({ usuarioLogado }) {
    const [linhas, setLinhas] = useState(1);
    const [comentario, setComentario] = useState('');

    const aoDigitarComentario = (e) => {
        const valorInput = e.target.value;
        setComentario(valorInput);
        setLinhas(valorInput.length > 0 ? 2 : 1);
    }

    return (
        <div className="containerFazerComentario">
            <Avatar src={usuarioLogado.avatar} />
            <textarea 
                rows={linhas}
                onChange={aoDigitarComentario}
                placeholder="Adicione um comentário...">
            </textarea>

            <button
                type="button"
                className="btnPublicacao desktop"
            >
                Publicar
            </button>
        </div>
    )
}