import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/1.jpg');

const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Consulting", filter: ".cat-5" },
    
];

const projects = [

 {
        thumb: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
        image: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
        title: 'Engineering Design Services',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-1',
        url:'Engineering'
    },

    {
        thumb: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
        image: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
        title: ' Oil & Gas Energy',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-1',
        url:'Oil'
    },
    // {
    //     thumb: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
    //     image: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
    //     title: ' Industrial Construction',
    //     description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
    //     filter: 'cat-1',
    //     url:'Industrial'
    // },
    {
        thumb: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
        image: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
        title: '  Automation Industry',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-1',
        url:'Automation'
    },
    {
        thumb: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
        image: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
        title: ' Manufacturing',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-1',
        url:'Manufacturing'
    },




















    {
        thumb: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
        image: require('./../../images/all bobsco/ourservices/Coating, Painting & Sand blasting.webp'),
        title: 'Coating/Painting & Sand blasting',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-1',
        url:'Coating'
    },
    {
        thumb: require('./../../images/all bobsco/ourservices/Industrial Mechanical & Electrical Works.webp'),
        image: require('./../../images/all bobsco/ourservices/Industrial Mechanical & Electrical Works.webp'),
        title: 'Industrial Mechanical & Electrical Works',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-2',
        url:'Mechanical'
    },
    {
        thumb: require('./../../images/all bobsco/ourservices/Refrigeration.webp'),
        image: require('./../../images/all bobsco/ourservices/Refrigeration.webp'),
        title: 'Refrigeration Services',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-3',
         url:'Refrigeration'
    },
    {
        thumb: require('./../../images/all bobsco/ourservices/Equipment Rental.webp'),
        image: require('./../../images/all bobsco/ourservices/Equipment Rental.webp'),
        title: 'Equipment Rental',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-4',
         url:'Equipment'
    },
    {
        thumb: require('./../../images/all bobsco/ourservices/Civil Works.webp'),
        image: require('./../../images/all bobsco/ourservices/Civil Works.webp'),
        title: 'Civil Works',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-5',
          url:'Civil'
    },
    {
        thumb: require('./../../images/all bobsco/ourservices/Steel Structure Fabrication.webp'),
        image: require('./../../images/all bobsco/ourservices/Steel Structure Fabrication.webp'),
        title: 'Steel Structure Fabrication',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-4',
         url:'Steel'
    },
   
]

class ProjectClassic1 extends React.Component {
    
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };
    
    render() {
        return (
            <>
                {/* <Header /> */}
                <div className="page-content">
                {/* <Banner title="Creating quality urban lifestyles, building stronger communities." pagename="Project Classic View" bgimage={bnrimg}/> */}
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 bg-gray inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container-fluid">
                            {/* PAGINATION START */}
                            {/* <div className="filter-wrap p-b30 text-center">
                                <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                                    <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                    {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                    ))} 
                                </ul>
                            </div> */}
                            {/* PAGINATION END */}
                            {/* GALLERY CONTENT START */}
                            <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-lg-4 col-md-4 col-sm-6 m-b30`}>
                                        <div className="project-classic">
                                            <div className="mt-box ">
                                                <div className="mt-thum-bx  img-center-icon  mt-img-overlay2">
                                                    <img src={item.thumb} alt="" />
                                                    {/* <div className="overlay-bx">
                                                        <div className="overlay-icon">
                                                            <NavLink to={"/project-detail"}>
                                                                <i className="fa fa-external-link mt-icon-box-xs " />
                                                            </NavLink>
                                                            <a className="mfp-link" href={item.image}>
                                                                <i className="fa fa-arrows-alt mt-icon-box-xs" />
                                                            </a>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="mt-info p-t20">
                                              <NavLink to={item.url}>  <h4 className="mt-title m-b20 m-t0" data-hover={item.title}>{item.title}</h4></NavLink>
                                                {/* <p>{item.description}</p> */}
                                                {/* <NavLink to={"/project-detail"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* GALLERY CONTENT END */}
                            {/* <div className="m-t50 text-center">
                                <NavLink to={"#"} className="site-button btn-effect">Our Services</NavLink>
                            </div> */}
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ProjectClassic1;