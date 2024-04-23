import Icon from '@mdi/react';
import * as ED from './ErrorDisplay.styles';
import { mdiAlert } from '@mdi/js';
import Heading from '../Typography/Heading';

export interface ErrorDisplayProps {
    small?: boolean
    title?: string
    message?: string
}

export default function ErrorDisplay(props: ErrorDisplayProps) {
    return <ED.Wrapper>
        <Icon path={mdiAlert} size={props.small ? '24px' : '48px'}/>
        <Heading level={2} children={ props.title || 'Erro ao renderizar componente'}></Heading>
        <ED.Message>{ props.message || 'Erro desconhecido'}</ED.Message>
    </ED.Wrapper>
}