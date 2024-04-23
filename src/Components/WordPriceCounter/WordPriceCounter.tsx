import { useState } from 'react';
import * as WPC from './WordPriceCounter.styles';

export interface WordPriceCounterProps {
    wordCount: number
    pricePerWord: number
}

export default function WordPriceCounter(props: WordPriceCounterProps) {
  
    if(props.wordCount < 0){
        throw Error('A quantidade de palavras não pode ser negativa')
    }
  
  return <WPC.Wrapper>
        <WPC.WordCount>
            {props.wordCount}   palavras
        </WPC.WordCount>
        <WPC.Value>
            {(props.pricePerWord * props.wordCount).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2,
            })}.
        </WPC.Value>
    </WPC.Wrapper>
}