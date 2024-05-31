import styled from "styled-components";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import FieldDescriptor from "../../Components/Typography/FieldDescriptor";
import ValueDescriptor from "../../Components/ValueDescriptor/ValueDescriptor";
import { transparentize } from "polished";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useSingleEditor from "../../Core/Hooks/useSingleEditor";
import { getEditorDescription } from "bigeus-sdk";


interface EditorProfileProps {
  hidePersonalData?: boolean
}

export default function EditorProfileGrid(props: EditorProfileProps) {

  //  throw new Error("Houve um erro ao renderizar o componente EditorProfile");

  const params = useParams<{ id: string }>();
  const { editor, fetchEditor } = useSingleEditor();


  useEffect(() => {
    fetchEditor(Number(params.id))
  }, [params.id])

  if (!editor) {
    return null
  }


  return <EditorProfileWrapper>
    <EditorHeadline>
      <Avatar src={editor.avatarUrls.small} />
      <Name>{editor?.name}</Name>
      <Description>{getEditorDescription(new Date(editor.createdAt))}</Description>
    </EditorHeadline>

    <Divisor />

    <EditorFeatures>
      <PersonalInfo>
        <Biography>{editor.bio}</Biography>
        <Skills>
          {
            editor.skills?.map(skill => {
              return <ProgressBar progress={skill.percentage} theme={"primary"} title={skill.name} />
            })
          }

        </Skills>
      </PersonalInfo>
      <ContactInfo>
        <FieldDescriptor head={'Cidade'} children={editor.location.city} />
        <FieldDescriptor head={'Estado'} children={editor.location.state} />
        {
          !props.hidePersonalData && <>
            <FieldDescriptor head={'Celular'} children={'+55 27 99900-9999'} />
            <FieldDescriptor head={'Email'} children={'ana.castillo@redacao.algacontent.com'} />
            <FieldDescriptor head={'Nascimento'} children={'26 de Dezembro de 1997 (22 anos)'} />
          </>
        }
      </ContactInfo>
    </EditorFeatures>

    {
      !props.hidePersonalData &&
      <EditorEarnings>
        <ValueDescriptor color={'default'} value={21452} description={'Palavras nesta semana'} />
        <ValueDescriptor color={'default'} value={123234} description={'Palavras no mês'} />
        <ValueDescriptor color={'default'} value={12312312} description={'Total de palavras'} />
        <ValueDescriptor color={'primary'} value={545623.23} description={'Ganhos na semana'} isCurrency />
        <ValueDescriptor color={'primary'} value={545623.23} description={'Ganhos no mês'} isCurrency />
        <ValueDescriptor color={'primary'} value={545623.23} description={'Ganhos no total'} isCurrency />
      </EditorEarnings>
    }
  </EditorProfileWrapper>
}

const EditorProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px;
  border: 1px solid ${transparentize(0.9, '#274060')};
`

const EditorHeadline = styled.div`
  display: grid;
  align-items: center;
  gap: 8px 16px;
  grid-template-rows: 2;
  grid-template-columns: 48px auto;
  height: 48px;
`

const Avatar = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: contain;
  width: 48px;
  height: 48px;
`

const Name = styled.h1`
  font-size: 18px;
  font-weight: 400;
  grid-column-start: 2;
`

const Description = styled.span`
  font-size: 12px;
  grid-column-start: 2;
`

const Divisor = styled.div`
  border-bottom: 1px solid  ${transparentize(0.9, '#274060')};
`

const EditorFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  gap: 24px;
`

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Biography = styled.p`
  font-size: 12px;
  line-height: 20px;
`

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 0;

  >* {
    width: 100%;
  }

  &>:nth-child(1),
  &>:nth-child(2) {
    width: 50%;
  }
`

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const EditorEarnings = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 24px;
`