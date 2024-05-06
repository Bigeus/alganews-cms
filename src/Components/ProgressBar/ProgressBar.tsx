import * as P from './ProgressBar.styles';

export interface ProgressBarProps{
    title: string
    progress: number
    theme: 'primary' | 'secondary'
    width?: number
}

export default function ProgressBar (props: ProgressBarProps) {
    return <P.ProgressBarWrapper style={{ width: props.width || 'auto' }}>
      <P.TextShadow progress={props.progress} theme={props.theme}>
        {props.title}
      </P.TextShadow>
      <P.CurrentProgress progress={props.progress} theme={props.theme}>
        <span>
          {props.title}
        </span>
      </P.CurrentProgress>
    </P.ProgressBarWrapper>
  }