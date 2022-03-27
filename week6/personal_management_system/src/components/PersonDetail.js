import React from "react";
////clicked personal in detail
function PersonDetail({ userDetail }) {
return (
<div className="container">
    <div className="row">
    <h1 className="bg-header text-white text-center">Person Detail</h1>
    </div>
    {userDetail.map((x) => (
    <div className="row col-12  d-flex justify-content-center align-items-center"  style={{height:'100vh'}}>
        <div class="card  text-center " style={{ width: "50%" }}>
            <div className="col-12  ">
            <img  class="card-img-top" src="https://picsum.photos/300/150"   alt="profile"/>
            </div>
        <div class="card-body ">
            <h5 class="card-title">Name: {x.firstName}</h5>
            <hr />
            <h5>Last name: {x.lastName}</h5>
            <hr />
            <h5> E-mail address: {x.email}</h5>
            <hr />
            <h5>Password : {x.password}</h5>
            <hr />
            <h5>About : {x.about}</h5>
        </div>
        </div>
    </div>
    ))}
</div>
);
}
export default PersonDetail;