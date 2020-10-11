import React from 'react';
import Dental from '../../../images/dentalinfo.png'

const DentalInfo = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5 pt-3">
            <div className="container mb-3">
                <div className="row mb-5">
                    <div className="col-md-5 mb-2">
                        <img className="img-fluid" src={Dental} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button className="btn" style={{backgroundColor: '#1cc7c1', color: '#ffffff'}}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalInfo;