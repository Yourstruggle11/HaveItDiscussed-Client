import React from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard";

export default function Home() {
  return (
    <>
      <div className="relative bg-[#f9fafb] dark:bg-MB overflow-hidden p-10 h-[100vh]">
      <div class="max-w-sm w-full lg:max-w-full lg:flex items-center justify-center bg-[#f9fafb]">
        <Link to='/question' >            
            <QuestionCard
            Likes={5}
            TagArray={["Tags One", "Tags Two"]}
            Question="Can coffee make you a better developer?"
            Desc="Lorem ipsum dolor sit amet, consectetur adipisicing ad ads ds fsd fd gdf gdf s sc sz  z x"
            PostedBy="Jonathan Reinink"
            Date="Aug 18"
            />
        </Link>
        </div>
      </div>
    </>
  );
}
