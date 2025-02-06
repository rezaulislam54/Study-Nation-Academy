import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../../components/core/HomePage/HighlightText";
import CTAButton from "../../components/core/HomePage/Button";
import CodeBlocks from "../../components/core/HomePage/CodeBlocks";
// import Banner from "../../assets/Images/banner.mp4";

const HomePage = () => {
  return (
    <div>
      <div className=" mx-auto relative flex flex-col w-11/12 items-center justify-between text-white">
        <Link to={"/signup"}>
          <div className=" group mt-16 p-1 mx-auto rounded-full bg-[#161d29] font-bold transition-all duration-200 hover: scale-95 w-fit max-w-maxContent">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-[#000814]">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-3xl md:text-4xl font-semibold mt-7">
          Empower Your Future With <HighlightText text={"Coding Skills"} />
        </div>

        <div className=" mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-[#838894]">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* <div className="mx-3 my-12 shadow-blue-200 w-[70%] relative">
          <div className="grad2 -top-10 w-[800px]"></div>
          <video className="video" muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div> */}

        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className=" font-semibold text-2xl lg:text-4xl sm:w-full">
                Unlock Your
                <HighlightText text={"coding potential"} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
            codeColor={"white"}
            backgroudGradient={"grad"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
