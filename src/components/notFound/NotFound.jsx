
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found_decoration decoration-top" />
      <div className="not-found_decoration decoration-bottom" />

      <div className="not-found_content">
        <div className="not-found_illustration">
          <span className="not-found_number">404</span>

          <div className="not-found_bag">
            <div className="bag_handle" />
            <div className="bag_face">
              <span className="bag_eye" />
              <span className="bag_eye" />
              <span className="bag_mouth" />
            </div>
          </div>

          <span className="not-found_box box-left" />
          <span className="not-found_box box-right" />
        </div>

        <span className="not-found_label">
          PAGE NOT FOUND
        </span>

        <h1>Oops! Page Not Found</h1>

        <p>
          The page you're looking for doesn't exist
          or has been moved.
          <br />
          Don't worry, let's get you back on track.
        </p>

        <a href="/" className="not-found_home">
          Back to Home <span>→</span>
        </a>

        <button
          className="not-found_back"
          onClick={() => window.history.back()}
        >
          <span>←</span> Go Back
        </button>
      </div>
    </main>
  );
}

export default NotFound;
