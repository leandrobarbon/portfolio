import {Container} from './style';

interface BoxTagProps {
    icon: any;
    hobbie: string;
}

export function BoxTag({icon, hobbie}: BoxTagProps) {
    return(
        <Container>
            {icon}
            <p>{hobbie}</p>
        </Container>
    )
}