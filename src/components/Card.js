import React from "react";
// import image from "../components/vs_image.png"

export default function Card(props) {
  // const [open, setOpen] = useState(false);

  const handleClick = () =>{
    <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content" style={{margin:"200px auto",width:"29rem"}}>
        <div className="modal-header">
        <h5 className="modal-title">Match Summary</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div className="modal-body">
        {props.match.status}<br/><br/>

        Score<br/>
        <b>{props.match.teamInfo[0].name}</b><br/>
        <b>{props.match.teamInfo[1].name}</b><br/>

      </div>
    </div>
    </div>
  </div>
  }

  return (
    <div>
      <div
        className="container card"
        style={{
          width: "50rem",
          height: "15rem",
          marginTop: "20px",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div className="card-body">
          <div className="container text-center">
            <div className="row">
              <div
                className="col"
                style={{ paddingTop: "42px", fontSize: "28px" }}
              >
                {props.match.teamInfo[0].name}
              </div>
              <div className="col-3">
                <img
                  src={require("../components/vs_image.png")}
                  alt=""
                  style={{ width: "125px", height: "125px" }}
                ></img>
              </div>
              <div
                className="col"
                style={{ paddingTop: "42px", fontSize: "28px" }}
              >
                {props.match.teamInfo[1].name}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">

            <div style={{ marginRight: "5px" }}>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                onClick={()=>handleClick(props.match.id)}
              >
                Show Match Details
              </button>
             
            </div>

            {/* Date and Time */}
            <div>
              <button type="button" className="btn btn-danger">
                {props.match.dateTimeGMT}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
