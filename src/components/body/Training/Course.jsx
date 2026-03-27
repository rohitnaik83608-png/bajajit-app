

// import images properly
import img1 from "../../../assets/img/course-icon-1.png";
import img2 from "../../../assets/img/course-icon-2.png";
import img3 from "../../../assets/img/course-icon-3.png";
import img4 from "../../../assets/img/course-icon-4.png";
import img5 from "../../../assets/img/course-icon-5.png";
import img6 from "../../../assets/img/course-icon-6.png";
import img7 from "../../../assets/img/course-icon-7.png";
import img8 from "../../../assets/img/course-icon-8.png";

function Course() {

  const courses = [
    { img: img1, title: "Web Designing", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
    { img: img2, title: "Graphic Designing", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
    { img: img3, title: "Mobile App Designing", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
    { img: img4, title: "Php", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
    { img: img5, title: "Digital Marketing", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
    { img: img6, title: "CMS", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
    { img: img7, title: "HR Management", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
    { img: img8, title: "Finance Management", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting" },
  ];

  return (
    <section className="course">
      <div className="container">
        <div className="row">

          {/* Title */}
          <div className="col-lg-4 col-md-12 col-sm-6 course-title">
            <div>
              <h2>What we offer</h2>
              <p>These are the courses we are specialized in:-</p>
            </div>
          </div>

          {/* Courses */}
          {courses.map((course, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
              <div className="course-card">
                <div className="card-img">
                  <img src={course.img} alt={course.title} />
                </div>
                <div className="card-content">
                  <h4>{course.title}</h4>
                  <p>{course.desc}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Course;