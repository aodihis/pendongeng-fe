import { NextRequest, NextResponse } from 'next/server'
 
const endpoint : string = process.env.STORY_ENDPOINT_URL as string;
const apiKey : string = process.env.OPENAI_SK_KEY as string

export async function POST(request: NextRequest) {
    const dataToSent: any = await request.json();
    console.log(dataToSent)
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    requestHeaders.set('openai_key',apiKey);
    const res = await fetch(endpoint, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(dataToSent),
    })
 
    const receiveData: {
        story: string
    } = await res.json();
    const story =  receiveData.story;

    console.log(story)
    const parsedData = story.split('\n\n')
    let responseData: {
        title: string,
        story: string[]
    } = {
        title: '',
        story: []
    }
    parsedData.forEach( (value) => {
        if (value.startsWith('judul:')) {
            responseData.title = value.replace("judul: ", "")
            return;
        }
        if (value.startsWith('cerita:')) {
            responseData.story.push(value.replace("cerita: ", ""))
            return;
        }

        responseData.story.push(value)
    })

  return NextResponse.json(responseData)
}