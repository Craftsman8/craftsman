import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Courses = ({ components }) => (
  <div className="courses">
    <h2>My Courses</h2>

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
Courses.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Courses;
