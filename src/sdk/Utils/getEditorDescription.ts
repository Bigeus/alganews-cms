import { formatDistance } from "date-fns";
import { ptBR } from 'date-fns/locale';
export default function getEditorDescription(editorCreationDate: Date){
    return formatDistance(editorCreationDate, new Date(), { locale:ptBR })
}