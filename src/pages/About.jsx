import { Link } from "react-router-dom";
import { Logo } from "../components";

function About() {
  return (
    <>
      <div className="breadcrumbs text-base mt-[-60px] mb-11">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 sm:gap-x-6">
        <Logo logoClass="sm:text-6xl">About</Logo>
        <div className="w-[90%] sm:w-3/4">
          <p className="text-md text-justify sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            pariatur eligendi eum laboriosam fugiat, facilis exercitationem quae
            voluptatem repudiandae ullam veritatis minus dicta quia, ipsa
            aperiam dignissimos doloremque rerum sunt. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ut distinctio quam consectetur?
            Recusandae iusto earum dicta sunt iure obcaecati ratione reiciendis
            sequi unde architecto eligendi, deleniti quas fuga quam porro.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
