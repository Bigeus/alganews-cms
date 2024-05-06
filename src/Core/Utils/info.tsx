import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Info from '../../Components/Info/Info';

export interface InfoProps {
    title: string
    description: string
}

export default function info(props: InfoProps) {
    setTimeout(() => {
        confirmAlert({
            overlayClassName: 'infoOverlay',
            customUI: ({ onClose }) => {
                return (
                    <div >
                        <Info
                            title={props.title}
                            desciption={props.description}
                        />
                    </div>
                );
            }
        });
    },0)
}
