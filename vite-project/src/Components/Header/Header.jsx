import { ImageCard } from "../Headerimage/ImageCard";
import { useGetAllContent } from "../../hooks/useGetAllContent";
import { useGetImagePosts } from "../../hooks/useGetImagePosts";
import styles from './header.module.scss';

export const Header = () => {
    const { data: allData } = useGetAllContent();
    const { data: images } = useGetImagePosts();
  
  
    return (
      <>
        <div>
          {images?.items?.map((item) => {
            return (
              <ImageCard
                key={0}
                url={item.fields.image.fields.file.url}
                alt={item.fields.titel}
                titel={item.fields.titel}
              ></ImageCard>
            );
          })}
        </div>
      </>
    );
  }
