import React from 'react'
import 'animate.css';
/////// if you've successfully logged in  this section will appear
const LoggedIn = ({username,email,password}) => {
return (
    <>
<div className="row py-5 px-4 animate__animated animate__rotateIn">
    <div className="col-md-5 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
                <div className="media align-items-end profile-head">
                    <div className="profile mr-3"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail"/><a href="/#" className="btn btn-outline-danger btn-sm btn-block">Log out</a></div>
                    <div className="media-body mb-5 text-white">
                        <h4 className="mt-0 mb-0">{username}</h4>
                        <h4 className="mt-0 mb-0">{email}</h4>
                        <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>New York</p>
                    </div>
                </div>
            </div>
            <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">4</h5><small className="text-muted"> <i className="fas fa-image mr-1"></i>Photos</small>
                    </li>
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                    </li>
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                    </li>
                </ul>
            </div>
            <div className="px-4 py-3">
                <h5 className="mb-0 ">Settings</h5>
                <div className="p-4 rounded shadow-sm">
                    <p className="font-italic mb-0 text-success">username: {username}</p>
                    <p className="font-italic mb-0 text-success">Email: {email}</p>
                    <p className="font-italic mb-0 text-success">password:{password}</p>
                </div>
            </div>
            <div className="px-4 py-3">
                <h5 className="mb-0">About</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    <p className="font-italic mb-0">Web Developer</p>
                    <p className="font-italic mb-0">Lives in New York</p>
                    <p className="font-italic mb-0">Photographer</p>
                </div>
            </div>
            <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Recent photos</h5>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/></div>
                    <div className="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/></div>
                    <div className="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid rounded shadow-sm"/></div>
                    <div className="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/></div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}
export default LoggedIn