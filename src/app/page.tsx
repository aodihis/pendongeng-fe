'use client'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDiv from './FormDiv';
import Results, { resultsDataProp } from './results';

const Page = () => {
  const [results, setResults] = useState<resultsDataProp|null>(null);
  
  if (results) {
    return (
      <div className='result-page'>
        <Results results={results}></Results>
      </div>
    )
  }
  return (
    <div className='form-page'>
      <FormDiv setResults={setResults}></FormDiv>
    </div>
  )
}

export default Page;
