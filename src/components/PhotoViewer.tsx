import {PhotoProvider, PhotoView} from "react-photo-view";
import React from "react";
import 'react-photo-view/dist/react-photo-view.css';



export default function PhotoViewer({showImages}: {showImages: boolean}) {

  return (
    <div className={`slide-out-gallery ${showImages ? 'slide-in' : 'slide-out'}`}>
      <PhotoProvider>
        <div className="slide-out-gallery-container">
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
          <PhotoView src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg">
            <img className="slide-out-gallery-image" src="https://assets.unegma.net/unegma.work/rain-examples.unegma.work/metagallery.jpg" alt=""/>
          </PhotoView>
        </div>
      </PhotoProvider>
    </div>
  );
}
