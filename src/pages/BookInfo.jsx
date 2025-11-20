import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/uI/Rating";
import Price from "../components/uI/Price";

const BookInfo = ({ books }) => {
    const param = useParams()
    console.log(param)
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <Link to="/book" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/book" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
                  alt=""
                  className="book__selected--ig"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Cracking the Code Interview
                </h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={20} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Omnis mollitia maxime incidunt asperiores inventore nisi
                    consequuntur totam voluptatem, quasi quidem saepe quibusdam
                    officia ipsum aliquid natus soluta impedit commodi ducimus!
                  </p>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Omnis mollitia maxime incidunt asperiores inventore nisi
                    consequuntur totam voluptatem, quasi quidem saepe quibusdam
                    officia ipsum aliquid natus soluta impedit commodi ducimus!
                  </p>
                </div>
                <button className="btn">
                    Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="book__selected--title--top">
                        Recommended Books
                    </h2>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
