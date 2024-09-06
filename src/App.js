import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const subtitle = `Here's what our happy clients say about us`;
  const bio = `Elon Reeve Musk FRS  is a businessman,conservative political activist,[3][4] and investor known for his key roles in the space company SpaceX and the automotive company Tesla.`;
  const imgs = [
    "https://img.etimg.com/thumb/width-420,height-315,imgsize-31070,resizemode-75,msid-109709699/news/international/business/elon-musks-fortune-soars-by-most-since-before-twitter-purchase/elon-musk-and-india-who-needs-who-more-here-are-some-pointers.jpg",
    "https://img.etimg.com/thumb/width-420,height-315,imgsize-31070,resizemode-75,msid-109709699/news/international/business/elon-musks-fortune-soars-by-most-since-before-twitter-purchase/elon-musk-and-india-who-needs-who-more-here-are-some-pointers.jpg",
    "https://img.etimg.com/thumb/width-420,height-315,imgsize-31070,resizemode-75,msid-109709699/news/international/business/elon-musks-fortune-soars-by-most-since-before-twitter-purchase/elon-musk-and-india-who-needs-who-more-here-are-some-pointers.jpg",
    "https://img.etimg.com/thumb/width-420,height-315,imgsize-31070,resizemode-75,msid-109709699/news/international/business/elon-musks-fortune-soars-by-most-since-before-twitter-purchase/elon-musk-and-india-who-needs-who-more-here-are-some-pointers.jpg",
    "https://img.etimg.com/thumb/width-420,height-315,imgsize-31070,resizemode-75,msid-109709699/news/international/business/elon-musks-fortune-soars-by-most-since-before-twitter-purchase/elon-musk-and-india-who-needs-who-more-here-are-some-pointers.jpg",
    "https://img.etimg.com/thumb/width-420,height-315,imgsize-31070,resizemode-75,msid-109709699/news/international/business/elon-musks-fortune-soars-by-most-since-before-twitter-purchase/elon-musk-and-india-who-needs-who-more-here-are-some-pointers.jpg",
  ];

  const [scrollX, setScrollX] = useState(0);
  const scrollableDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableDivRef.current) {
        setScrollX(scrollableDivRef.current.scrollLeft);
        setIsSctive(Math.floor(scrollableDivRef.current.scrollLeft / 500) + 1);
      }
    };

    const divElement = scrollableDivRef.current;
    if (divElement) {
      divElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (divElement) {
        divElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const [isActive, setIsSctive] = useState(2);
  return (
    <div className="app">
      <h2 className="heading">Our Testimonials</h2>
      <p className="subheading">{subtitle}</p>
      <div className="main" ref={scrollableDivRef}>
        <div className="corosoul">
          {imgs.map((data, index) => (
            <div
              className={isActive === index ? "container" : "container1"}
              key={index}
            >
              <img
                src={data}
                className={isActive === index + 1 ? "image" : "image1"}
              ></img>
              <p className="name">Elon Musk</p>
              <p className="title">Founder of tesla and spacex</p>
              <div className="biobox">
                <p className="bio">{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="indicator">
        {imgs.map((data, index) => (
          <div
            className={isActive === index + 1 ? "activedot" : "notactivedot"}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
