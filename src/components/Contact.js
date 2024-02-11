import useFetch from '../Hooks/Use-fetch';

const Contact = () => {
  const { loading } = useFetch('http://localhost:8000/courses');

  return (
    <div className="contact-us">
      { loading && (
      <div className="loading">
        Fetching contacts...
        <br />
        Please wait
      </div>
      )}
      {!loading && <h4>Contact us via the following channels:</h4>}
    </div>
  );
};

export default Contact;
