import {createContext, ReactNode, useContext, useState} from "react";
import {API_KEY} from "../constanrs/key";
import {ImageGrid, ImageContext} from "../interfaces/mainInterfsce";

const ImgContext = createContext<ImageContext | null>(null);

export const useTemp = () => {
  const context = useContext(ImgContext);
  if (!context) {
    throw new Error("useTemp must be used within a ImageContextProvider");
  }
  return context;
};

const ImageContextProvider = ({children}: { children: ReactNode }) => {
  const [imageData, setImageData] = useState<ImageGrid | null>(null);
  const [videoData, setVideoData] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  const getImageData = async () => {
    const URL = `https://pixabay.com/api/?key=${API_KEY}`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setImageData(data);
    } catch (error) {
      setFetchError(true);
    }
  }

  const getVideoData = async () => {
    const URL = `https://pixabay.com/api/videos/?key=${API_KEY}`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setImageData(data);
    } catch (error) {
      setFetchError(true);
    }
  }

  const value = {imageData, videoData, getImageData, getVideoData, fetchError};

  return (
      <ImgContext.Provider value={value}>
        {children}
      </ImgContext.Provider>
  );
}

export default ImageContextProvider;