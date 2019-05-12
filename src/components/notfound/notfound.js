import React, { Fragment } from 'react';
import { Carousel } from 'react-materialize';

const Notfound = () => {
    return (
        <Fragment>
            <Carousel options={{fullWidth: true,indicators: true}} className="white-text center">
                <div className="red">
                    <h2>
                        First Panel
                    </h2>
                    <p>
                        This is your first panel
                    </p>
                </div>
                <div className="amber">
                    <h2>
                        Second Panel
                    </h2>
                    <p>
                        This is your second panel
                    </p>
                </div>
            </Carousel>
        </Fragment>
    )
};

export default Notfound;