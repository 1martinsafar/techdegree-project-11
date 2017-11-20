import React from "react";

import Photos from './Photos';
import NotFound from './NotFound';

const Flowers = props => {

  console.log("DOGS PROPS DATA");
  console.log(props.photos);

  const photoSet = props.photos;
  let photos;
  let title = props.title;
  console.log("TITLE: " + title);
  if (photoSet.length) {
    photos = photoSet.map(photo => <Photos url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
  } else {
    photos = <NotFound />
  }

  return(
    <div className="photo-container">
      <h2>{title}</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default Flowers;
