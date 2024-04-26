import Icon from '@mdi/react';
import * as IU from './ImageUploader.styles';
import { mdiDelete, mdiUpload } from '@mdi/js';
import { useState } from 'react';
import Button from '../Button/Button';

export interface ImageUploaderProps {
    label: string

}

export default function ImageUploader(props: ImageUploaderProps) {

    const [filePreview, setFilePreview] = useState<string | null>(null)

    function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
        const file = ev.target.files![0]

        if (file) {
            const reader = new FileReader()

            reader.addEventListener('load', ev => {
                setFilePreview(String(ev.target?.result))
            })

            reader.readAsDataURL(file)
        }
    }

    if (filePreview) {
        return <IU.ImagePreviewWrapper>
            <IU.ImagePreview preview={filePreview}>

                <Button
                    variant={'primary'}
                    label={<IU.ContentLabel>Remover Imagem<Icon style={{paddingLeft: '5px',alignContent: 'center'}}
                        size={1.2}
                        path={mdiDelete} /></IU.ContentLabel>}
                    onClick={() => setFilePreview(null)}>
                    <Icon path={mdiDelete} size={'10px'} />
                </Button>

            </IU.ImagePreview>
        </IU.ImagePreviewWrapper>
    }

    return <IU.Wrapper>
        <IU.Label>
            <Icon size={'24px'} path={mdiUpload} />
            <span>{props.label}</span>
            <IU.Input type='file' onChange={handleChange}>

            </IU.Input>
        </IU.Label>
    </IU.Wrapper>
}