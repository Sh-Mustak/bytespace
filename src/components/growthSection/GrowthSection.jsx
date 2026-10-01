import FeatureItem from "./FeatureItem";
import GrowthCard from "./GrowthCard";
import StatItem from "./StatItem";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function GrowthSection() {
  return (
    <section
      id="creators"
      className="bg-[linear-gradient(135deg,#edf9a0_0%,#f3f6ff_40%,#ffffff_100%)] py-20 font-sans text-gray-900 overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 space-y-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 max-w-lg">
            <h2 className="text-3xl md:text-[36px] leading-[1.2] font-black text-gray-900 tracking-tight">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="text-xs md:text-[13px] text-gray-500 leading-relaxed my-6">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="flex gap-10 text-[#0047FF] text-2xl font-black mt-6">
              {stats.map((stat) => (
                <StatItem
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[380px] w-full flex justify-center items-end">
            <GrowthCard className="absolute left-2 md:left-6 top-0 p-3.5 w-[210px] z-[5]">
              <p className="text-[11px] font-bold text-gray-700 mb-2">
                Course preview
              </p>

              <div className="relative rounded-xl overflow-hidden mb-3 bg-gray-100 h-24 flex items-center justify-center">
                <img
                  src="/img/course-thumb.png"
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 left-1.5 flex gap-1">
                  <span className="bg-black/30 backdrop-blur-md text-[8px] text-white px-2 py-0.5 rounded-full">
                    17 Lessons
                  </span>
                  <span className="bg-black/30 backdrop-blur-md text-[8px] text-white px-2 py-0.5 rounded-full">
                    2 hours 16 mins
                  </span>
                </div>
              </div>

              <h4 className="font-bold text-[11px] text-gray-900">
                Learn Figma fro…
              </h4>
              <p className="text-[9px] text-gray-400 mt-0.5">
                by purepearl studio
              </p>

              <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-50">
                <span className="bg-gray-100 text-gray-600 text-[9px] px-2 py-0.5 rounded-md font-medium">
                  📊 Beginner
                </span>
                <div className="text-[11px] font-black text-[#0047FF]">
                  $25
                  <span className="text-[8px] font-normal text-gray-400">
                    /lifetime
                  </span>
                </div>
              </div>
            </GrowthCard>

            <img
              src="/img/lime-spiral.png"
              alt="Decoration"
              className="absolute right-12 top-10 w-16 h-auto z-[2] object-contain"
            />

            <img
              src="/img/guy.png"
              alt="Student with laptop"
              className="absolute bottom-0 right-8 h-[360px] w-auto object-contain z-[10] drop-shadow-2xl"
            />

            <GrowthCard className="absolute right-0 md:right-2 top-8 p-3.5 w-[160px] z-[4]">
              <span className="text-[9px] font-medium text-gray-400 block mb-0.5">
                Learning Progress
              </span>
              <b className="text-xl font-black text-gray-900 block">55%</b>
              <div className="w-full bg-gray-100 h-1 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#D4F933] h-full w-[55%]" />
              </div>
            </GrowthCard>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[400px] w-full flex justify-center items-end">
            <GrowthCard
              tone="blue"
              className="absolute left-0 md:left-4 top-2 p-4 w-[170px] z-[5]"
            >
              <p className="text-[10px] text-blue-200 font-medium">
                Total Revenue
              </p>
              <p className="text-[8px] text-blue-300">July 1-28</p>
              <b className="text-xl font-black block mt-2">$120.29</b>
              <div className="w-full bg-blue-800 h-1 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#D4F933] h-full w-[70%]" />
              </div>
            </GrowthCard>

            <GrowthCard
              tone="blue"
              className="absolute left-0 md:left-4 top-36 p-4 w-[170px] z-[5]"
            >
              <p className="text-[10px] text-blue-200 font-medium">
                Year to Date
              </p>
              <p className="text-[8px] text-blue-300">2023</p>
              <b className="text-lg font-black block mt-1">$1,200.38</b>
              <span className="inline-block bg-[#D4F933] text-black font-extrabold text-[9px] px-2 py-0.5 rounded-full mt-1.5">
                +12%
              </span>
            </GrowthCard>

            <img
              src="/img/girl.png"
              alt="Creator"
              className="absolute bottom-0 left-1/3 -translate-x-1/4 h-[380px] w-auto object-contain z-[8] drop-shadow-2xl"
            />

            <img
              src="/img/lime-spiral.png"
              alt="Decoration"
              className="absolute right-28 bottom-28 w-16 h-auto z-[2] object-contain"
            />

            <GrowthCard className="absolute right-4 md:right-10 bottom-2 p-3 w-[180px] z-[9]">
              <span className="text-[10px] font-bold text-gray-800 block">
                Happy Students
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[10px] font-extrabold text-gray-900">
                  4.5
                </span>
                <span className="text-[9px] text-gray-400">(240)</span>
                <span className="text-yellow-400 text-xs">★</span>
              </div>

              <div className="flex items-center mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src="/img/Ellipse.png"
                    alt="User Avatar"
                    className="w-5 h-5 rounded-full border-2 border-white object-cover -ml-1.5 first:ml-0 shadow-sm"
                  />
                ))}
                <span className="w-5 h-5 rounded-full bg-[#D4F933] text-black text-[8px] font-bold flex items-center justify-center -ml-1.5 border-2 border-white">
                  2K+
                </span>
              </div>
            </GrowthCard>
          </div>

          <div className="lg:col-span-6 max-w-lg">
            <h2 className="text-3xl md:text-[36px] leading-[1.2] font-black text-gray-900 tracking-tight">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="text-xs md:text-[13px] text-gray-500 leading-relaxed my-6">
              <strong className="text-gray-900 font-bold">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="space-y-3">
              {features.map((text) => (
                <FeatureItem key={text} text={text} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
