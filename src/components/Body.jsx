import Supervisor from "./Supervisor";
import Team from "./Team";
import Karma from "./Karma";
import Calculator from "./Calculator";

const Body = () => {
  return (
    <div className="wrapper">
      <Supervisor />
      <Team />
      <Karma />
      <Calculator />
    </div>
  );
};

export default Body;
