import { useState, useEffect } from 'react';
import youtube from '../apis/YouTube';

const useVideos = (defaultSearchTerm) => {
    const KEY = "AIzaSyBVhW9YhIvIHKRLSMrBGr9_IeVHh57mdSU";
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm); // load videos of child by default
      }, [defaultSearchTerm]);

      const search = async (term) => {
        const res = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            key: KEY,
            type: "video",
          },
        });
        setVideos(res.data.items);
      };

      return { videos, search };

}

export default useVideos;