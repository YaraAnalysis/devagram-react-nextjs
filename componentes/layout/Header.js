import Image from 'next/image';
import logoHorizontalImg from '../../public/images/logoHorizontal.svg';

export default function Header() {
    return (
        <header className='cabealhoPrincipal'>
            <div className='conteudoCabecalhoPrincipal'>
                <div className='logoCabecalhoPrincipal'>
                    <Image
                        src={logoHorizontalImg}                  
                        alt='logo devagram'
                        layout='fill'
                    />
                </div>
            </div>

        </header>
    );
}