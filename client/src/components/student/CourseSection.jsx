import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn From the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Dicover out top-rated courses across various categories. From coding and
        designing to <br /> business and wellness, our courses are crafted to
        deliever results.
      </p>

      <div className="grid grid-cols-4 px-4 md:my-16 max-md:grid-cols-2 my-10  max-sm:grid-cols-1 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CourseSection;
