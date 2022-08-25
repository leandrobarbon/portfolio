import Link from 'next/link';
import {Container, Navegation, Language} from './style';

export function Navbar() {
    return (
        <Container>
            <Link href="/">Leandro lombaldo da silva</Link>
            <Navegation>
                <nav>
                    <Link href="">SOBRE MIM</Link>
                    <Link href="">HABILIDADES</Link>
                    <Link href="">QUEM É LEANDRO</Link>
                    <Link href="">PORTFOLIO</Link>
                    <Link href="">CONTATO</Link>
                </nav>
                <Language>
                    <button>PT-BR</button>
                    <p>/</p>
                    <button className='disable'>EN</button>
                </Language>
            </Navegation>
        </Container>
    )
}