import * as P from './ProgressBar.styles';

export interface ProgressBarProps{
    title: string
    percentage: number
    theme: 'primary' | 'secondary'
    width?: number
}

export default function ProgressBar(props: ProgressBarProps){
    return <P.WrapperProgressBar style={{width: props.width || 'auto'}}>
        <P.FirstBar percentage={props.percentage}></P.FirstBar>

    </P.WrapperProgressBar>
}