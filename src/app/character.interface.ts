export interface CharacterApi {
  info: CharacterApiInfo;
  results: CharacterResult[];
}

export interface CharacterApiInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterApiResultOrigin;
  location: CharacterApiResultOrigin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterApiResultOrigin {
  name: string;
  url: string;
}
