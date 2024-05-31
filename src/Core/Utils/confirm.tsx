import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Confirm from '../../Components/Confirm/Confirm'

    

export interface ConfirmProps {
    title: string
    onConfirm?: () => any
    onCancel?: () => any
}

export default function confirm(props: ConfirmProps) {
  setTimeout(()=>{
      confirmAlert({
          overlayClassName: 'confirmOverlay',
          customUI: ({ onClose }) => {
              return (
                      <Confirm
                          title={props.title}
  
                          onConfirm={() => {
                              if (props.onConfirm) props.onConfirm()
                                  onClose()
                          }}
                          onCancel={() => {
                          if (props.onCancel) props.onCancel()
                              onClose()
                          }}
                      />
              );
          }
      });
  },0)
}
