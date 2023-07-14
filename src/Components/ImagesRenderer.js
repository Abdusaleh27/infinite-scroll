import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Gallery from "react-photo-gallery";

const url = "https://api.unsplash.com//photos/random?client_id=";
const id = "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";
const numOfImages = 20;

const ImagesRenderer = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const imageList = await axios.get(`${url}${id}&count=${numOfImages}`);
      setPhotos((images) => [
        ...images,
        ...imageList.data.map((image) => ({
          src: image.urls.regular,
          width: parseInt(image.width),
          height: parseInt(image.height),
        })),
      ]);
      setLoading(false);
      setHasMore(true);
    } catch (error) {
      console.log("cant fetch images", error);
      setLoading(false);
      setHasMore(false);
    }
  };

  //<-----inital image fetching when loading first time------->
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchImages}
        hasMore={hasMore} // Replace with a condition based on your data source
        loader={loading ? <Loading /> : ""}
        endMessage={
          <div>
            <p className="text-white" data-testid="end-reached">
              UNSPLASH API CALL LIMIT REACHED, Try again later!
            </p>
            <p className="text-white">Infinity continued 👇</p>
            <img
              src="https://i.giphy.com/media/3oAt28uFXyrrgR1pte/giphy.webp"
              alt="end of page"
            />
          </div>
        }
      >
        {photos.length > 0 ? (
          <div data-testid="gallery">
            <Gallery
              photos={photos}
              data-testid="photo-gallery"
              direction={"column"}
            />
          </div>
        ) : loading ? (
          <p data-testid="ApiCall">Fetching Data ...</p>
        ) : (
          ""
        )}
      </InfiniteScroll>
    </div>
  );
};

export default ImagesRenderer;
