import * as VD from './ValueDescriptor.styles'

export interface ValueDescriptorProps {
    isCurrency?: boolean,
    description: string,
    value: number,
    color: 'primary' | 'default'
}

export default function ValueDescriptor(props: ValueDescriptorProps) {
  

    return <VD.Wrapper color={VD.COLORS[props.color || 'default']}>
        <span className='Description'>{ props.description }:</span>
        <div>
            {
                props.isCurrency &&
                <span className='Currency'>{'R$'}</span>

            }
            <span className='Value'>
                {props.value.toLocaleString('pt-br')}
            </span>
        </div>
    </VD.Wrapper>
}