function About({ image, about }) {
  // Displays the blog image and its description.
  return (
    <aside>
      <img src={image} alt="blog logo" />

      <p>{about}</p>
    </aside>
  );
}

export default About;