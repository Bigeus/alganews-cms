import Icon from '@mdi/react';
import * as IU from './ImageUploader.styles';
import { mdiDelete, mdiUpload } from '@mdi/js';
import { useState } from 'react';
import Button from '../Button/Button';
import FileService from '../../sdk/Services/File.service';

export interface ImageUploaderProps {
    label: string
    onImageUpload: (imageUrl: string) => any
}

export default function ImageUploader(props: ImageUploaderProps) {

    const [filePreview, setFilePreview] = useState<string | null>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files![0]

        if (file) {
            const reader = new FileReader()

            reader.addEventListener('load', async e => {
                setFilePreview(String(e.target?.result));
                const imageUrl = await FileService.upload(file)
                props.onImageUpload(imageUrl)
            })

            reader.readAsDataURL(file)
        }
    }


    if (filePreview) {
        return <IU.ImagePreviewWrapper>
            <IU.ImagePreview preview={filePreview}>

                <Button
                    variant={'primary'}
                    label={<IU.ContentLabel>Remover Imagem<Icon style={{ paddingLeft: '5px', alignContent: 'center' }}
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
                {props.label}
            <IU.Input type='file' onChange={handleChange} />
        </IU.Label>
    </IU.Wrapper>
}