const BlogDetails = () => {

    const details="This blog is a sample test, nested directly into my App Component."
    const video="click the link below to view the previous meeting recording"
    return ( 
        <div className="BlogDetails">
            <h2>BlogDetails component</h2>
            <p className="details">{details}</p>
            <p className="video">{video}</p>
            <h2 style={{
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "0%",
                textShadow: "0px 2px 2px grey",
            }}><a href="https://smartshopngonline-my.sharepoint.com/personal/samuel_fanibi_smartshopng_online/_layouts/15/stream.aspx?id=%2Fpersonal%2Fsamuel%5Ffanibi%5Fsmartshopng%5Fonline%2FDocuments%2FRecordings%2FCoding%20Training%20Class%2D20240108%5F181044%2DMeeting%20Recording%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview" target="blank">Mp4</a>
            </h2>
        </div>
     );
}
 
export default BlogDetails;