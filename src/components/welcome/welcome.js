import React, { Fragment } from 'react';
import { Row, Col, Card } from 'react-materialize';
import { Link } from "react-router-dom";
import logoSolo from './soloImg.svg';
//import logoLan from './lanImg.svg';
import './welcome.css';

const imgSolo = (<img alt={'solo game'} className={'logo-card'} src={logoSolo}/>);
//const imgLan = (<img alt={'Ia game'} className={'logo-card'} src={logoLan}/>);

const Welcome = () => {
    return (
        <Fragment>
            <Row>
                <Col m={6} s={12}>
                    <Card header={imgSolo} title={'Win againt yourself'} actions={[<Link key={'linkSolo'} to="/solo">Play</Link>]}>
                        Play In solo
                    </Card>
                </Col>
                {/*<Col m={6} s={12}>
                    <Card header={imgLan} title={'Win againt your friends'} actions={[<Link key={'linkLan'} to="/lan">Play</Link>]}>
                        Play In Lan
                    </Card>
                </Col>*/}
            </Row>
        </Fragment>
    );
};

export default Welcome;