import React, { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initial, setInitial] = useState(true);
  const fetchUsers = () => {
    setInitial(false);
    // setLoading(true);
    fetch('https://reqres.in/api/users?page=1').then(async (data) => {
      const result = await data.json();
      setUsers(result.data);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    });
  };
  if (initial) {
    return (<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='!#'>
          Topper
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='d-flex'>
          <button
            className='btn btn-success'
            type='submit'
            onClick={() => {
              fetchUsers();
            }}>
            GetUsers
          </button>
        </div>
      </div>
    </nav>)
  }
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='!#'>
            Topper
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='d-flex'>
            <button
              className='btn btn-success'
              type='submit'
              onClick={() => {
                fetchUsers();
              }}>
              GetUsers
            </button>
          </div>
        </div>
      </nav>
      {
        loading ? (<div className="spinner-border" style={{ height: "80px", width: "80px", marginTop: "170px", marginLeft: "650px" }} role="status" />) : (<>
          <div className="container-fluid bg-trasparent my-4 p-2" style={{ position: "relative" }}>
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-6 g-3">
              {users.map((user) => {
                return (<div className="col" key={user.first_name}>
                  <div className="card h-100 shadow-sm"> <img src={user.avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title text-center">{user.first_name} {user.last_name}</h5>
                      <h6 style={{fontSize:"14px"}} className="card-title text-center">{user.email}</h6>
                    </div>
                  </div>
                </div>)
              })
              }
            </div>
          </div>
        </>)
      }
    </>
  );
};

export default App
