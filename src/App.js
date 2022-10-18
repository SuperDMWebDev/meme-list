import "./App.css";
import { Button, Row, Col } from "antd";
import { useEffect, useState } from "react";
const api_meme = "https://api.imgflip.com/get_memes";
function Imagememe(props) {
  const { src, alt, key } = props;
  console.log("key", key);
  return <img key={key} src={src} className="meme_image" alt={alt} />;
}
function App() {
  const [memeArr, setMemeArr] = useState([]);
  const loadImage = (event) => {
    event.preventDefault();
    getImage();
  };
  const getImage = () => {
    fetch(api_meme)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data", data);
        setMemeArr(data.data.memes);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    console.log("call api");
    getImage();
  }, []);
  useEffect(() => {
    console.log("memeArr", memeArr.length);
  }, [memeArr]);
  return (
    <div className="App">
      <h3 className="app_header">Meme app</h3>
      <Button type="primary" onClick={(event) => loadImage(event)}>
        Load images
      </Button>
      <Row
        className="image_container"
        gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}
      >
        {memeArr.length !== 0 &&
          memeArr.map((item, index) => {
            return (
              <Col
                span={6}
                className="gutter-row image-item"
                key={`image-${index}`}
              >
                <Imagememe src={item.url} alt={item.name} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default App;
