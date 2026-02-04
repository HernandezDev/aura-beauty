export interface EnhancedImage {
  sources: Record<string, string>; 
  img: {
    src: string;
    w: number;
    h: number;
    alt?: string;
  };
}
  