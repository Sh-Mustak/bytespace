import { chips, courseGradients, courses } from "../../data/content";

import Chip from "./Chip.jsx";
import CourseCard from "./CourseCard.jsx";
import LearningPathsSection from "./LearningPathsSection";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16">
      <div className="max-w-[1160px] mx-auto px-10">
        <h2 className="text-[26px] text-center font-extrabold leading-tight -tracking-[0.3px]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="text-[12.5px] text-mut max-w-[560px] mx-auto mt-3.5 text-center leading-loose">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        <div className="flex flex-wrap gap-2 justify-center max-w-[820px] mx-auto mt-7">
          {chips.map((c, i) => (
            <Chip key={c} label={c} active={i === 0} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {courses.map((course, i) => (
            <CourseCard
              key={course.title}
              course={course}
              gradient={courseGradients[i]}
            />
          ))}
        </div>

        <LearningPathsSection />
      </div>
    </section>
  );
}
