import * as TI from './TagInput.styles';
import { WithContext as ReactTagInput, Tag} from 'react-tag-input';

export interface TagInputProps{
    onAdd(): () => any
    onDelete(): () => any
}

export default function TagInput(props: TagInputProps){
    return <TI.Wrapper>
        <ReactTagInput handleAddition={props.onAdd} handleDelete={props.onDelete} />
    </TI.Wrapper>
}