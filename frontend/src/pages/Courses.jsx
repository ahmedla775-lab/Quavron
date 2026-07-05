function Courses() {

  const categories = [

    {
      title: "🌍 Foreign Languages",
      description:
        "Learn the world's most important languages.",
      courses: [
        "English",
        "French",
        "Russian",
        "Spanish",
        "German",
        "Chinese",
        "Italian"
      ]
    },

    {
      title: "💻 Programming Languages",
      description:
        "Become a professional software engineer.",
      courses: [
        "JavaScript",
        "TypeScript",
        "Python",
        "C++",
        "Java",
        "Rust",
        "Go"
      ]
    },

    {
      title: "🛡 Cyber Security",
      description:
        "Learn ethical hacking and advanced security.",
      courses: [
        "Networking",
        "Linux",
        "Web Security",
        "Malware Analysis",
        "SOC",
        "Cloud Security"
      ]
    },

    {
      title: "🤖 Artificial Intelligence",
      description:
        "Master AI engineering and machine learning.",
      courses: [
        "Machine Learning",
        "Deep Learning",
        "Prompt Engineering",
        "AI Agents",
        "Neural Networks",
        "Computer Vision"
      ]
    },

    {
      title: "🔧 Jobs & Crafts",
      description:
        "Professional skills and real-world careers.",
      courses: [
        "Electricity",
        "Mechanics",
        "Woodworking",
        "Tailoring",
        "Phone Repair",
        "Graphic Design"
      ]
    },

    {
      title: "🎓 Academic Education",
      description:
        "Specialized academic tracks for students.",
      courses: [
        "Mathematics",
        "Physics",
        "Medicine",
        "Engineering",
        "Economics",
        "Law"
      ]
    }

  ];

  return (

    <div className="courses-page">

      {/* HERO */}

      <section className="courses-hero">

        <div>

          <h1>
            📚 Quavron Academy
          </h1>

          <p>

            Learn languages, programming,
            cybersecurity, AI, university subjects,
            careers and real-world skills
            in one ecosystem.

          </p>

        </div>

      </section>

      {/* SEARCH */}

      <section className="courses-search">

        <input
          type="text"
          placeholder="Search courses..."
        />

      </section>

      {/* CATEGORIES */}

      <section className="courses-grid">

        {categories.map((category, index) => (

          <div
            className="course-category-card"
            key={index}
          >

            <h2>
              {category.title}
            </h2>

            <p>
              {category.description}
            </p>

            <div className="course-list">

              {category.courses.map(
                (course, courseIndex) => (

                  <div
                    className="course-item"
                    key={courseIndex}
                  >

                    🎯 {course}

                  </div>

                )
              )}

            </div>

            <button className="primary-btn">

              Explore Courses

            </button>

          </div>

        ))}

      </section>

      {/* FEATURED */}

      <section className="featured-learning">

        <h2>
          🚀 Featured Learning Tracks
        </h2>

        <div className="projects-grid">

          <div className="project-card">

            <h3>
              Full Stack Developer
            </h3>

            <p>
              React + Node.js + Databases
              + Cloud Deployment
            </p>

          </div>

          <div className="project-card">

            <h3>
              AI Engineer
            </h3>

            <p>
              Machine Learning + AI Apps
              + Prompt Engineering
            </p>

          </div>

          <div className="project-card">

            <h3>
              Ethical Hacker
            </h3>

            <p>
              Penetration Testing +
              Linux + Web Security
            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Courses;
