import Image from 'next/image';
import { useState } from 'react';
import logoHorizontalImg from '../../public/images/logoHorizontal.svg';
import imagemLupa from '../../public/images/lupa.svg';
import Navegacao from './Navegacao';
import ResultadoPesquisa from './ResultadoPesquisa';
import UsuarioService from '../../services/UsuarioService';
import { useRouter } from 'next/router';

const usuarioService = new UsuarioService();

export default function Cabecalho() {
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
    const [termoPesquisado, setTermoPesquisado] = useState('');
    const router = useRouter();

    const aoPesquisar = async (e) =>{
        setTermoPesquisado(e.target.value);
        setResultadoPesquisa([]);

        if (termoPesquisado.length < 2) {
            return;
        }

        try {
            const { data } = await usuarioService.pesquisar(termoPesquisado);
            setResultadoPesquisa(data);
        } catch (error) {
            alert('Erro ao pesquisar usuário. ' + error?.response?.data?.erro);
            //alert('Erro ao pesquisar usuario. ' + e?.response?.data?.erro);

        }
    }

    const aoClicarResultadoPesquisa = (id) => {
        console.log('aoClicarResultadoPesquisa', {id});
        setResultadoPesquisa([]);
        setTermoPesquisado('');
        router.push(`/perfil/${id}`);
    }

    return (
        <header className='cabecalhoPrincipal'>
            <div className='conteudoCabecalhoPrincipal'>
                <div className='logoCabecalhoPrincipal'>
                    <Image
                        src={logoHorizontalImg}                  
                        alt='logo devagram'
                        layout='fill'
                    />
                </div>

                <div className='barraPesquisa'>
                    <div className='containerImagemLupa'>
                        <Image 
                            src={imagemLupa}
                            alt='Icone lupa'
                            layout='fill'
                        />
                    </div>

                    <input
                        type='text'
                        placeholder='Pesquisar'
                        value={termoPesquisado}
                        onChange={aoPesquisar}
                    />
                </div>

                <Navegacao className='desktop' />
            </div>

            {resultadoPesquisa.length > 0 && (
                <div className='resultadoPesquisaConatiner'>
                    {resultadoPesquisa.map(r => (
                        <ResultadoPesquisa
                            avatar={r.avatar}
                            nome={r.nome}
                            email={r.email}
                            key={r._id}
                            id={r._id}
                            onClick={aoClicarResultadoPesquisa}
                        />
                    ))}
                </div>
            )}
        </header>
    );
}