import Beginner from "../../assets/beginner.svg";
import  StarIcon  from "../../assets/star.svg";

export default function CourseCard({ course }) {
  // Make sure avatars is always an array
  const avatars = Array.isArray(course?.avatars) ? course.avatars : [];     

  return (
    <div className="w-full max-w-[580px] rounded-[28px] border border-[#d5d5dc] bg-white p-[18px]">
      {/* Course Image */}
      <div className="relative h-[180px] overflow-hidden rounded-[17px]">
        <img
          src={course?.image || "/img/Frame (2).png"}
          alt={course?.title || "Course Preview"}
          className="h-full w-full object-cover"
        />

        {/* Image Information */}
        <div className="absolute bottom-[20px] left-0 flex w-full items-center justify-between gap-1 px-[11px]">
        <span className="whitespace-nowrap rounded-full bg-[#e5e5e5]/95 px-[11px] py-[6px] text-[10px] font-medium leading-none text-[#555]">
          {course?.lessons || "17 Lessons"}
        </span>

        <span className="whitespace-nowrap rounded-full bg-[#e5e5e5]/95 px-[11px] py-[6px] text-[10px] font-medium leading-none text-[#555]">
          {course?.duration || "2 hours 16 mins"}
        </span>

        <span className="whitespace-nowrap rounded-full bg-[#e5e5e5]/95 px-[11px] py-[6px] text-[10px] font-medium leading-none text-[#555]">
          {course?.comments || "59 Comments"}
        </span>
      </div>
      </div>

      {/* Title + Rating */}
      <div className="mt-[27px] flex items-center justify-between gap-3">
        <h4 className="min-w-0 flex-1 truncate text-[18px] font-bold leading-[1.1] tracking-[-0.5px] text-black">
          {course?.title || "Balancing Productivity and Life"}
        </h4>

        <div className="flex shrink-0 items-center gap-1 text-[21px] text-[#555]">
          <span>{course?.rating || "4.5"}</span>

          <img src={StarIcon} alt="Star" />
        </div>
      </div>

      {/* Author */}
      <div className="mt-[6px] text-[14px]">
        <span className="text-[#666]">by </span>

        <span className="text-[#5b32f5]">
          {course?.author || "purepearl studio"}
        </span>
      </div>

      {/* Beginner + Students */}
      <div className="mt-[25px] flex items-start ">
        {/* Beginner */}
        <div className="flex items-start  rounded-ful">
         <img src={Beginner} alt="Beginner" />
    
        </div>

        {/* Student Avatars */}
        
      </div>

      {/* Price */}
      <div className="mt-[23px]">
        <span className="text-[20px] font-extrabold leading-none text-[#4020e8]">
          ${course?.price || "25"}
        </span>

        <span className="ml-[2px] text-[14px] text-[#666]">
          /lifetime
        </span>
      </div>
    </div>
  );
}