import { Link } from 'react-router-dom';
import useFetch from '../Hooks/Use-fetch';

const Courses = () => {
  const { components, error, loading } = useFetch('http://localhost:8000/courses');

  return (
    <div className="courses">
      {loading && (
      <div className="loading">
        Fetching from server...
        <br />
        This might take some seconds
      </div>
      )}
      {!loading && <h2>My Courses</h2>}

      {error && <div className="error">{error}</div>}

      {components && (
      <div className="run-course">

        {components.map((component) => (
          <div className="course-slide" key={component.id}>
            <Link
              to={`/components/${component.id}`}
              style={{
                textDecoration: 'none',
              }}
            >
              <h2>{component.title}</h2>
              <p style={{
                fontFamily: "'Gill Sans', 'Gill Sans MT', 'Trebuchet MS'",
                marginLeft: '70%',
                fontWeight: '600',
              }}
              >
                Author:
                {' '}
                {component.author}
              </p>
            </Link>
          </div>
        ))}

      </div>
      )}

    </div>
  );
};

export default Courses;
