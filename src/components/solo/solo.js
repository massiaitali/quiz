import React, { Fragment } from 'react';
import { Row, Col, Card } from 'react-materialize';

const Solo = () => {
    return (
        <Fragment>
            <Row>
                <Col m={12} s={12}>
                    <Card
                        className="blue-grey darken-1"
                        textClassName="white-text"
                        title="Card title"
                        actions={[<a />,<a />]}
                    >
                        I am a very simple card.
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Solo;