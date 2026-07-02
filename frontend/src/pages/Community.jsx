function Community() {

  const posts = [
    {
      id: 1,
      user: "Ahmed",
      avatar: "https://i.pravatar.cc/50?img=1",
      time: "2h ago",
      content:
        "🚀 بدأت تطوير Quavron Community System",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      likes: 124,
      comments: 18,
      reposts: 7
    },

    {
      id: 2,
      user: "Sophia",
      avatar: "https://i.pravatar.cc/50?img=5",
      time: "5h ago",
      content:
        "💻 New React AI IDE is under testing!",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
      likes: 342,
      comments: 41,
      reposts: 22
    }
  ];

  return (
    <div className="community-page">

      <h1>🌐 Community Feed</h1>

      <p
        style={{
          opacity: 0.7,
          marginTop: "10px"
        }}
      >
        Connect with developers worldwide
      </p>

      {/* CREATE POST */}

      <div className="create-post">

        <textarea
          placeholder="Share something with the community..."
        ></textarea>

        <div className="create-actions">

          <button>
            📷 Media
          </button>

          <button>
            💻 Code
          </button>

          <button className="post-btn">
            Post
          </button>

        </div>

      </div>

      {/* POSTS */}

      <div className="feed">

        {posts.map((post) => (

          <div
            className="post-card"
            key={post.id}
          >

            {/* HEADER */}

            <div className="post-header">

              <img
                src={post.avatar}
                alt="avatar"
              />

              <div>

                <h3>{post.user}</h3>

                <span>
                  {post.time}
                </span>

              </div>

            </div>

            {/* CONTENT */}

            <p className="post-content">
              {post.content}
            </p>

            {/* IMAGE */}

            <img
              className="post-image"
              src={post.image}
              alt="post"
            />

            {/* ACTIONS */}

            <div className="post-actions">

              <button>
                ❤️ {post.likes}
              </button>

              <button>
                💬 {post.comments}
              </button>

              <button>
                🔁 {post.reposts}
              </button>

              <button>
                📌 Save
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );

}

export default Community;
