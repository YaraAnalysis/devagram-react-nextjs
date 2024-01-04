export default function Botao({
    tipo = 'button',
    texto,
    cor = 'primaria',
    desabilitado = false,
    manipularclique
}) {
    return(
        <button
            type={tipo}
            className={`btn ${cor}`}
            disabled={desabilitado}
            onClick={manipularclique}
        >
            {texto}
        </button>
    );
}