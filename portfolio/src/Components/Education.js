import React from 'react';
import './Style/Education.css';
import school from '../Assets/school.jpeg';
import uni from '../Assets/campus.jpeg';

function Education() {
  return (
    <div className="education">
      <h1>Academic Journey</h1>

      <div className="eduContent">
        {/* School Section */}
        <div className="school section">
          <div className="text-image-container">
            <div className="text-content">
              
              <p className="description">
                I completed my GCE Advanced Level (A/L) at <a href='https://www.mghs.lk/'>Methodist Girls' High School</a>, an institution known for its commitment to academic excellence and holistic development.
                During my time there, I specialized in the Physical Science stream and achieved 2A and 1B grades, which prepared me for the next steps in my academic journey.
                Prior to this, I also achieved 9A in my GCE O/L, reflecting a strong foundation built through dedication and hard work during my time at J/Methodist Girls' High School from grade 6 to 13.
              </p>
            </div>
            <div className="image-content">
              <img src={school} alt="J/Methodist Girls' High School" />
              <div className="image-description">
                <h4>J/Methodist Girls' High School</h4>
                <p>Grade 6 to 13, G.C.E O/L and G.C.E A/L</p>
              </div>
            </div>
          </div>
        </div>

        {/* University Section */}
        <div className="campus section">
          <div className="text-image-container">
            <div className="text-content">
              
              <p className="description">
                I am currently pursuing a Bachelor's degree in Information Technology at the <a href='https://uom.lk/'>University of Moratuwa</a>, 
                where I am gaining deep expertise in software development, data management, information systems, and networking fundamentals.
              </p>
            </div>
            <div className="image-content">
              <img src={uni} alt="University of Moratuwa" />
              <div className="image-description">
                <h4>University of Moratuwa</h4>
                <p>BSc(Hons) in Information Technology, 2022 to 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
