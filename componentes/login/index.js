import InputPublico from "../inputPublico";

import imagemEnvelope from "../../public/images/envelope.svg";

export default function Login() {
    return (
        <section className={`paginaLogin paginaPublica`}>
            <div className="logoContainer">
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlterarValor={() => console.log('digitando e-mail')}
                    />
                </form>
            </div>
        </section>
    );
}