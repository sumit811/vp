import React from 'react';

function Carousel(props) {
    return (
        <div className="row ved-row">
          <div className="col-3">
            <figure class="figure">
              <img src="https://via.placeholder.com/200X200" class="figure-img img-fluid rounded" alt="..." />
              <figcaption class="figure-caption text-center"><a class="btn btn-outline-secondary" href="#" role="button">Link</a></figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure class="figure">
              <img src="https://via.placeholder.com/200X200" class="figure-img img-fluid rounded" alt="..." />
              <figcaption class="figure-caption text-center"><a class="btn btn-outline-secondary" href="#" role="button">Link</a></figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure class="figure">
              <img src="https://via.placeholder.com/200X200" class="figure-img img-fluid rounded" alt="..." />
              <figcaption class="figure-caption text-center"><a class="btn btn-outline-secondary" href="#" role="button">Link</a></figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure class="figure">
              <img src="https://via.placeholder.com/200X200" class="figure-img img-fluid rounded" alt="..." />
              <figcaption class="figure-caption text-center"><a class="btn btn-outline-secondary" href="#" role="button">Link</a></figcaption>
            </figure>
          </div>
        </div>
        );
}

export default Carousel;