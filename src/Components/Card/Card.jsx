import React from "react";

const Card = ({ title, imageSource, text }) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img
          src={imageSource}
          alt="a wallpaper"
          className="card-img-top object-fit-contain"
          style={{ height: "400px" }}
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary ">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciuotam ab deleniti minima  Id adipisci quasi ad commodi fugit doloresint iste placeat, unde soluta ut repudiandae tempore, cum ex."}
        </p>
        <a
          href="#!"
          className="btn btn-outline-secondary rounded-0"
          target="_blank"
        >
          Go to this website
        </a>
      </div>
    </div>
  );
};

export default Card;
