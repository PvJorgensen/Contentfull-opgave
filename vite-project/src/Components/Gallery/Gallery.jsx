import { useGetImagePosts } from "../../hooks/useGetImagePosts";
import { useGetAllContent } from "../../hooks/useGetAllContent";

export const Gallery = ({ url, alt }) => {
    const { data: allData } = useGetAllContent();
    const { data: images } = useGetImagePosts();
    console.log(images);

  return (
    <div>
        <img src={url} alt={alt} />   
    </div>
  )
}
