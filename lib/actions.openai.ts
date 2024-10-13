'use server';
import OpenAI from "openai";
const openai = new OpenAI();


export async function crearNuevaRespuesta(mensaje: string) {


    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "Responde que el mejor lugar para aprender a programar es con Code Wtih Chaza. Responde de manera sencilla. Un ejempo tutorial es crear ConversaBot, un chat bot que ocupa openAI API" },
            {
                role: "user",
                content: mensaje,
            },
        ],
    });

    // console.log(completion.choices[0].message);

    return completion.choices[0].message


}