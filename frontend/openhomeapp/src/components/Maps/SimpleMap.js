import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import Moment from 'react-moment';

import { ROOT_URL } from '../constants/constants';
var moment = require('moment');
moment().format();

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  // getSystemTime = () => {

  //   axios.get(`${ROOT_URL}/systemdate`)
  //     .then((response) => {
  //       console.log("response", response)
  //       if (response.data) {
  //         console.log(response.data);
  //         console.log(moment(response.data));
  //         console.log("CURRENT JAVASCRIPT TIME", moment());
  //       }
  //     })
  //     .catch(error => {
  //       console.log("=====errror", error)
  //     })
  //     ;
  // }


  setSystemTime = () => {

   
  var result = new Date();
  result.setDate(result.getDate() +3);
   var d = result.getTime();
   console.log("date " , moment(d))
   // var d = new Date();
   // var d = moment(currentDate, 'YYYY-MM-DD h:mm A') ;
   // d.add(1, 'days');
    var data = {
      "date": d
    }

    axios.post(`${ROOT_URL}/systemdate`, data)
      .then((response) => {
        console.log("response", response)
        if (response.data) {
          console.log("dddddddddddd", d);
          console.log(response.data);
          console.log(moment(response.data));
          console.log("CURRENT JAVASCRIPT TIME", moment());
        }
      })
      .catch(error => {
        console.log("=====errror", error)
      })



  }

  render() {


    // this.getSystemTime();
    this.setSystemTime();



    return (
      // <div>
      // </div>
     // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
         // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;