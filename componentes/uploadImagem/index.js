import { useRef } from "react";

export function UploadImagem({
    className = ''
}) {
    const referenciaInput = useRef(null);

    const abrirSeletorArquivos = () => {
        referenciaInput?.current?.click();
    }

    return (
        <div className={`uploadImagemContainer ${className}`} onClick={abrirSeletorArquivos}>
            <button>abrir seletor de arquivos</button>
            <input 
                type='file' 
                className='oculto' 
                accept="image/*"
                ref={referenciaInput}
            />
        </div>
    );
}