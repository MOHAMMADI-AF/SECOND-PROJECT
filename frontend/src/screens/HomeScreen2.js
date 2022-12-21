import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1>AFGHAN RUGS & CARPETS</h1>
      <p>
        Carpet weaving has always been an integral part of the Afghan heritage
        for centuries and with ethnic diversity drawn from varied other cultures
        as Iran, Pakistan, Tajikistan, Turkmenistan & Uzbekistan, it has been
        possible to translate all through the hands of the Afghan weavers.
        Afghan rugs, like Afghanistan itself, represent a diverse range of
        cultures and artistic sensibilities. With some drawing heavily on
        Persian influences, others from more Oriental styles, and still others
        reflecting the unique war history of Afghanistan. An Afghan rug is both
        an amazing piece of art and a pinnacle of craftsmanship.
      </p>
      <p>
        Afghan rugs are solid, durable and often charming. They reflect the
        heritage of cottage-based craftsmanship passed through generations of
        families. Carpets from Afghanistan can be divided into two branches:
      </p>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
