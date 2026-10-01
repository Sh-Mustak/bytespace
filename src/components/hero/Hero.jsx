import Button from "../common//Button.jsx";
import Navbar from "../navbar/Navbar";
import FloatingCard, { AvatarStack } from "./FloatingCard.jsx";
import {
  Cube,
  LimeSquiggle,
  Ring,
  Triangle,
  WhiteSquiggle,
} from "../common/Shapes.jsx";
import Instructor from "/img/guy.png";
import Circle from "/img/radius.svg";

export default function Hero() {
  return (
    <header className="bg-[#003BE2] bg-grid-lines bg-grid text-white relative overflow-hidden text-center">
      <div className="max-w-[1160px] mx-auto px-10">
        <Navbar />
        <h1 className="text-4xl md:text-[52px] leading-[1.16] mt-9 font-extrabold -tracking-[0.5px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="opacity-80 text-sm mt-4 max-w-[480px] mx-auto">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center bg-white rounded-full py-1.5 pl-5 pr-1.5 max-w-[460px] mx-auto mt-6 gap-2"
        >
          <input
            placeholder="Course, topic, creator"
            className="flex-1 border-0 outline-none py-2 text-sm bg-transparent text-gray-700"
          />
          <Button className="!rounded-full">Search</Button>
        </form>

        <div className="relative h-[380px] mt-1.5 z-[2]">
          <LimeSquiggle
            style={{
              width: 250,
              top: 36,
              left: -140,
              transform: "rotate(-8deg)",
            }}
          />
          <WhiteSquiggle style={{ width: 120, right: "6%", top: 90 }} />
          <Triangle />
          <Cube />
          <Ring />
          {/* <div className="absolute left-1/2 bottom-[-190px] w-[480px] h-[480px] -ml-[240px] rounded-full bg-[#CBFC01] z-[1]" /> */}
         <div className="relative h-full">
          <img
            src={Circle}
            alt="Circle"
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[950px] z-[1]"
          />

          <img
            src={Instructor}
            alt="Instructor"
            className="absolute left-[54%] bottom-0 -translate-x-[50%] w-[550px] z-[2]"
          />
        </div>
          <FloatingCard style={{ left: "22%", top: 64 }}>
            <b className="text-[13px] text-black font-bold block">
              UI/UX Design
            </b>
            200 Courses · 1000+ Students
          </FloatingCard>
          <FloatingCard style={{ right: "20%", top: 96 }}>
            Learning Progress
            <b className="text-2xl font-extrabold block mt-0.5">55%</b>
          </FloatingCard>
          <FloatingCard style={{ left: "30%", bottom: 24 }}>
            Happy Students
            <AvatarStack count={4} />
          </FloatingCard>
        </div>
      </div>
    </header>
  );
}
