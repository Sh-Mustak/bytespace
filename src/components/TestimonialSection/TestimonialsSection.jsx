import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/content";
export default function TestimonialsSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#edf9a0_0%,#f3f6ff_45%,#eef2ff_100%)] py-20 font-sans text-gray-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          <div className="md:col-span-6">
            <h2 className="text-3xl md:text-[38px] leading-[1.18] font-black text-gray-900 tracking-tight">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-xs md:text-[13px] text-gray-500 leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>
         {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={t.name}
              {...t}
              avatar={t.avatar || `/img/Ellipse ${index + 1}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
