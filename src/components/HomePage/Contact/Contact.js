import React from 'react';


const Contact = () => {
    return (
        <section className="contact my-5 py-5 " style={{ backgroundColor: '#3f475a', color: '#ffffff'}}>
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 style={{ color: '#1cc7c1' }} className="text-uppercase">Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button style={{backgroundColor: '#1cc7c1', color: '#ffffff'}} type="button" className="btn px-5 mt-2"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;