import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Container, Row, Col } from 'reactstrap';
import '../feeds/FeedIndex.css'; 

export function DashboradIndex({ data, loading, getFeeds }) {
  const { feedId } = useParams();

  useEffect(() => {
    getFeeds({feedId});
  }, [feedId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const defaultImageUrl = 'https://media.istockphoto.com/id/1309699912/vector/vector-illustration-daily-news-paper-template-with-text-and-picture-placeholder.jpg?s=170667a&w=0&k=20&c=v3jfXM3nN9rRb0OXRUejdPecLTVV37pqe8ub84r7Ti8=';

  // Filter out articles with no description
  const filteredData = data.filter(article => article.author);

  return (
    <Container fluid>
      <Row xs="1" sm="2" md="3" lg="4">
        {filteredData.map((article, index) => (
          <Col key={index}>
            <Card className="my-3">
              <CardImg top src={article.urlToImage || defaultImageUrl} alt={article.title} style={{ height: "200px" }} />
              <CardBody className="card-body d-flex flex-column">
                <div>
                  <CardTitle tag="h5" className='card-title'>{article.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{article.source.name}</CardSubtitle>
                  <CardText className="card-text">{article.description}</CardText>
                </div>
                <div className="mt-auto">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                </div>
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

const DashboradIndexContainer = connect(mapState, mapDispatch)(DashboradIndex);
export default DashboradIndexContainer;
