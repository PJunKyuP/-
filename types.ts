export interface Photo {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  category: 'Portrait' | 'Landscape' | 'Abstract';
  year: string;
  location: string;
  camera: string;
  description: string;
  gallery?: string[]; // Optional array for additional images in the series
}

export enum ViewState {
  GALLERY = 'GALLERY',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT'
}

export interface InterpretationResponse {
  title: string;
  poeticDescription: string;
  technicalNote: string;
}