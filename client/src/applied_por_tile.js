import './applied_por_tile.css';

function Applied_POR_Tile() {
  return (
    <div className="Tile">
        <div className="tile-info">
            <div className="tile-recruiter">
                <p>Mars Rover Team</p>
            </div>
            <div className="tile-position">
                <p>Junior Design Engineer</p>
            </div>
            <div className="tile-deadline">
                <p>Applied: 12/6/2023 11:59PM</p>
            </div>
        </div>
        <div className="tile-apply-sec">
            <div className="apply-btn">
            <a href="www.google.com"> <p>Accepted</p> </a>
            </div>
        </div>
    </div>
  );
}

export default Applied_POR_Tile;
