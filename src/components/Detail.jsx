import { motion } from "framer-motion";

const Detail = (props) => {
  return (
    <div className="content-wrapper">
      <h2 className="wrapper-header">{props.heading}</h2>
      <p className="wrapper-detail">{props.content}</p>
      <div className="wrapper-image-container">
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={props.image}
          alt="wrapper image"
        />
      </div>
    </div>
  );
};

export default Detail;
