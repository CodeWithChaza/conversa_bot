'use server';
import OpenAI from "openai";
const openai = new OpenAI();


export async function crearNuevaRespuesta(mensaje: string) {


    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "Sos un programador experto en Nextjs" },
            {
                role: "user",
                content: mensaje,
            },
        ],
    });

    console.log(completion.choices[0].message);

    return completion.choices[0].message


}