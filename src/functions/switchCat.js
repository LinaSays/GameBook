import React from 'react';

const switchCat = (path) => {
  switch (path) {
    case '/categories/1':
      return (
        <>
          <img
            src=" https://i.imgur.com/croWORO.jpg"
            alt="Bannière"
            className="categories-header-image"
            width="100%"
          />
          <div className="categories-header-content">
            <h1 className="categories-header-title m-0">Heroïc Fantasy.</h1>
          </div>
        </>
      );

    case '/categories/2':
      return (
        <>
          <img
            src="https://i.imgur.com/Qpz3IxL.jpg"
            alt="Bannière"
            className="categories-header-image"
            width="100%"
          />
          <div className="categories-header-content">
            <h1 className="categories-header-title m-0">Contes pour enfants.</h1>

          </div>
        </>
      );

    case '/categories/3':
      return (
        <>
          <img
            src="https://i.imgur.com/lLHSVLi.jpg"
            alt="Bannière"
            className="categories-header-image"
            width="100%"
          />
          <div className="categories-header-content">
            <h1 className="categories-header-title m-0">Polar .</h1>

          </div>
        </>
      );

    case '/categories/4':
      return (
        <>
          <img
            src="https://i.imgur.com/2yyGZAM.jpg"
            alt="Bannière"
            className="categories-header-image"
            width="100%"
          />
          <div className="categories-header-content">
            <h1 className="categories-header-title m-0">Science Fiction .</h1>
          </div>
        </>
      );

    case '/categories/5':
      return (
        <>
          <img
            src="	https://i.imgur.com/JgiShXY.jpg"
            alt="Bannière"
            className="categories-header-image"
            width="100%"
          />
          <div className="categories-header-content">
            <h1 className="categories-header-title m-0">Horreur .</h1>
          </div>
        </>
      );


    default:
      return (
        <p>pas d'image</p>
      );
  }
};

export default switchCat;
