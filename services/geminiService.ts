import { GoogleGenAI, Type } from "@google/genai";
import { InterpretationResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Helper to convert an image URL to a base64 string
async function urlToBase64(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Remove data url prefix (e.g. "data:image/jpeg;base64,")
        const base64Data = base64String.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error fetching image for conversion:", error);
    throw error;
  }
}

export async function interpretImage(imageUrl: string): Promise<InterpretationResponse> {
  try {
    const base64Data = await urlToBase64(imageUrl);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: base64Data,
            },
          },
          {
            text: "You are a high-end art curator and poet. Look at this photograph. Provide a short, evocative, poetic description of the mood and feeling of the image (max 2 sentences). Then provide a very brief technical observation about the composition or lighting. Return JSON.",
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A creative, abstract title for the image" },
            poeticDescription: { type: Type.STRING, description: "Evocative description" },
            technicalNote: { type: Type.STRING, description: "Brief technical observation" },
          },
          required: ["title", "poeticDescription", "technicalNote"],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }
    return JSON.parse(text) as InterpretationResponse;

  } catch (error) {
    console.error("Gemini Interpretation Failed:", error);
    return {
      title: "Untitled Observation",
      poeticDescription: "The silence of the image speaks for itself, capturing a moment frozen in time.",
      technicalNote: "Balanced composition with subtle contrast."
    };
  }
}
