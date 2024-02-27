import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import imgHomeAtivo from '../../public/images/homeAtivo.svg';
import imgHomeCinza from '../../public/images/homeCinza.svg';
import imgPublicacaoAtiva from '../../public/images/publicacaoAtiva.svg';
import imgPublicacaoCinza from '../../public/images/publicacaoCinza.svg';
import imgUsuarioAtivo from '../../public/images/usuarioAtivo.svg';
import imgUsuarioCinza from '../../public/images/usuarioCinza.svg';

const mapaDeRotas = {
    home: {
        imagemAtivo: imgHomeAtivo,
        rotasAtivacao: ['/'],
        imagemPadrao: imgHomeCinza
    },
    publicacao: {
        imagemAtivo: imgPublicacaoAtiva,
        rotasAtivacao: ['/publicacao'],
        imagemPadrao: imgPublicacaoCinza
    },
    perfil: {
        imagemAtivo: imgUsuarioAtivo,
        rotasAtivacao: ['/perfil/eu', '/perfil/eu/editar'],
        imagemPadrao: imgUsuarioCinza
    }
}

export default function Navegacao({ className }) {
    const [rotaAtiva, setRotaAtiva] = useState('home');
    const router = useRouter();

    useEffect(() => {
        definirRotaAtiva();
    }, [router.asPath]);

    const definirRotaAtiva = () => {
        const chavesDoMapaDeRotas = Object.keys(mapaDeRotas);
        const indiceAtivo = chavesDoMapaDeRotas.findIndex(chave => {
            return mapaDeRotas[chave].rotasAtivacao.includes(
                window.location.pathname
            );
        });

        if (indiceAtivo === -1) {
            setRotaAtiva('home');
        } else {
            setRotaAtiva(chavesDoMapaDeRotas[indiceAtivo]);
        }
    }
    //console.log(rotaAtiva);
    const obterImagem = (nomeRota) => {
        const rotaAtivada = mapaDeRotas[nomeRota];

        if (rotaAtiva === nomeRota) {
            return rotaAtivada.imagemAtivo;
        }

        return rotaAtivada.imagemPadrao;
    }

    const aoclicarNoIcone = (nomeRota) => {
        setRotaAtiva(nomeRota);
        router.push(mapaDeRotas[nomeRota].rotasAtivacao[0])
    }

    return (
        <nav className={`barraNavegacao ${className}`}>
            <ul>
                <li onClick={() => aoclicarNoIcone('home')}>
                    <Image
                        src={obterImagem('home')}
                        alt='icone home'
                        width={20}
                        height={20}
                    />
                </li>

                <li onClick={() => aoclicarNoIcone('publicacao')}>
                    <Image
                        src={obterImagem('publicacao')}
                        alt='icone publicacao'
                        width={20}
                        height={20}
                    />
                </li>

                <li onClick={() => aoclicarNoIcone('perfil')}>
                    <Image
                        src={obterImagem('perfil')}
                        alt='icone usuario'
                        width={20}
                        height={20}
                    />
                </li>
            </ul>
        </nav>
    );
}