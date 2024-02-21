import { useRouter } from "next/router";
import UsuarioService from "@/services/UsuarioService"
import Header from "@/componentes/layout/Header";

const usuarioService = new UsuarioService();

export default function comAutorizacao(Componente) {
    return (props) => {
        const router = useRouter();
        
        if(typeof window !== 'undefined'){
            if (!usuarioService.estaAutenticado()) {
                router.replace('/');
                return null;
            }

            return (
                <>
                    <Header />
                    <Componente {...props}/>
                </>
            )
        }

        return null;
    }
}