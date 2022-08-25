import {Container, Title, Feature} from './style';

interface HeaderProps {
    title: string;
    colorProps: string;
}

export function Header({title, colorProps}: HeaderProps) {
    return(
        <Container>
            <Title>{title}</Title>
            <Feature colorProp={colorProps} width="136px" />
            <Feature colorProp={colorProps} width="103px" />
        </Container>
    )
}