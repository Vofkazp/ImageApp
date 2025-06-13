export interface ImageContext {
  imageData: ImageGrid | null;
  videoData: ImageGrid | null;
  getImageData: (page: number, perPage: number) => Promise<void>;
  getVideoData: () => Promise<void>;
  fetchError: boolean;
}

export interface ImageGrid {
  total: number;
  totalHits: number;
  hits: image_item[];
}

export interface image_item {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  fullHDURL: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}