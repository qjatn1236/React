import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  const [checked, setChecked] = useState(false);
  
  // AIzaSyAjiQColwsL52Vckf7l0jbS7ZHpxTewddA
  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]

  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyAjiQColwsL52Vckf7l0jbS7ZHpxTewddA
  // https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAjiQColwsL52Vckf7l0jbS7ZHpxTewddA
  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&maxResults=25&key=AIzaSyAjiQColwsL52Vckf7l0jbS7ZHpxTewddA
  // https://academy.dream-coding.com/courses/player/react/lessons/1507/discussions/8980=AIzaSyAjiQColwsL52Vckf7l0jbS7ZHpxTewddA
  // https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyAjiQColwsL52Vckf7l0jbS7ZHpxTewddA
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", checked],
    queryFn: async () => {
      console.log("fetching ...");
      const response = await fetch(`data/${checked ? "sale_" : ""}products.json`);
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
  });

  // const {
  //   isLoading,
  //   error,
  //   data: products,
  // } = useQuery({
  //   queryKey: ["products", checked],
  //   queryFn: async () => {
  //     console.log("fetching...");
  //     return fetch(`data/${checked ? "sale_" : ""}products.json`).then((res) =>
  //       res.json()
  //     );
  //   },
  //   staleTime: 5000,
  // });

  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
