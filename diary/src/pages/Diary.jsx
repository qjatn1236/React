import { useParams } from "react-router-dom";

export default function Diary() {
  const params = useParams();

  return (
    <div>
      <p>{params.id}</p>
    </div>
  );
}
