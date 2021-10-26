import "../../styles/roadmap.scss";
import { roadMapData } from "../../mockup";
const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap-header">
        <h1>Roadmap</h1>
        <p>
          We have planned this out for a long time, and as described above, we
          have a lot of fun “utility,” gaming and rewards to offer. But the fun
          doesn’t stop there - other ideas are still in the game plan, and will
          be revealed overtime. For now, a sneak peak at what we’re working on
          in the short term can be found below.
        </p>
      </div>
      <div className="gradient-bg" />
      <div className="roadmap-content">
        {roadMapData.map((data, index) => {
          return (
            <div className="road-map-component">
              <div className="map-indicator">
                <img src={data.url} alt={`map-data-${index}`} />
              </div>
              <div className="content">
                <h3>{data.title}</h3>
                <ul>
                  {data.list.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Roadmap;
