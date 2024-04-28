import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Container, Row, Col } from 'reactstrap';
import './FeedIndex.css'; // Import CSS file for custom styling

export function FeedIndex({ data, loading, getFeeds }) {
  const { feedId } = useParams();

  useEffect(() => {
    getFeeds({});
  }, [feedId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const defaultImageUrl = 'https://media.istockphoto.com/id/1309699912/vector/vector-illustration-daily-news-paper-template-with-text-and-picture-placeholder.jpg?s=170667a&w=0&k=20&c=v3jfXM3nN9rRb0OXRUejdPecLTVV37pqe8ub84r7Ti8=';

  // Filter out articles with no description
  const filteredData = data.filter(article => article.author);

  return (
    <Container fluid>
      <Row>
        {filteredData.map((article, index) => (
          <Col sm="6" md="4" lg="3" key={index}>
            <Card className="my-3">
              <CardImg top width="100%" src={article.urlToImage || defaultImageUrl} alt={article.title} />
              <CardBody className="card-body">
                <CardTitle tag="h5">{article.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{article.source.name}</CardSubtitle>
                <CardText className="card-text">{article.description}</CardText>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const mapState = (state) => ({
  data: state.feed.feeds,
  loading: state.loading.effects.feed.getFeeds,
});

const mapDispatch = (dispatch) => ({
  getFeeds: (payload) => dispatch.feed.getFeeds(payload),
});

const FeedIndexContainer = connect(mapState, mapDispatch)(FeedIndex);
export default FeedIndexContainer;
