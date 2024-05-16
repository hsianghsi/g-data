L.mapbox.accessToken = 'pk.eyJ1IjoiYm9zc2Jvc3NsZXUiLCJhIjoiY2trcHU5N2EyMGJwdDJvbnRvc2g2djNubSJ9.MH9jCElgj_r1kHN305ijZw';
var info = document.getElementById('info');
var map = L.mapbox.map('map')
    .setView([40.745, -73.935], 11.2)
    .setMaxZoom(11.9)
    .setMinZoom(11.2)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/bossbossleu/ckorhgspj0p7q17rvd5hx3epj')
    );
map.doubleClickZoom.disable();
map.setMaxBounds(map.getBounds());
var southWest = L.latLng(40.54, -74.48),
    northEast = L.latLng(40.94, -73.48),
    bounds = L.latLngBounds(southWest, northEast);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          title: 'Chelsea',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1230 ft<br><br><br>42<br>33<br><br><br>34.7<br>32<br><br><br>36<br>6<br>14<br>3<br>5<br>32<br><br><br>38<br>8<br>0<br>2<br>46<br><br><br>15<br>10<br>18<br>9<br>12<br>35<br><br><br>44<br>5<br>1<br>4<br>43<br><br><br>45<br>32<br>26<br>21<br>18<br>17<br><br><br>35<br>28<br>2<br>34'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.99666526125108, 40.74784003777844]
        }
      },

      {
        type: 'Feature',
        properties: {
          title: 'Lower East Side',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1466 ft<br><br><br>44<br>43<br><br><br>29.4<br>27<br><br><br>26<br>4<br>8<br>8<br>7<br>45<br><br><br>22<br>8<br>1<br>1<br>65<br><br><br>12<br>9<br>14<br>4<br>7<br>53<br><br><br>37<br>7<br>2<br>2<br>51<br><br><br>42<br>30<br>23<br>23<br>15<br>14<br><br><br>39<br>22<br>1<br>37'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.99082419315837, 40.71833152173715]

        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'East Village',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1181 ft<br><br><br>36<br>29<br><br><br>28.6<br>26<br><br><br>34<br>0<br>12<br>2<br>4<br>42<br><br><br>25<br>15<br>1<br>0<br>57<br><br><br>13<br>7<br>14<br>8<br>10<br>47<br><br><br>39<br>5<br>0<br>4<br>50<br><br><br>38<br>31<br>21<br>33<br>15<br>5<br><br><br>44<br>22<br>2<br>31'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.98621121176718, 40.72642913600763]

        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Gramercy Park',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1415 ft<br><br><br>53<br>35<br><br><br>33.2<br>31<br><br><br>43<br>4<br>5<br>7<br>8<br>30<br><br><br>31<br>14<br>1<br>0<br>52<br><br><br>16<br>5<br>17<br>8<br>13<br>52<br><br><br>51<br>4<br>1<br>1<br>42<br><br><br>55<br>33<br>24<br>39<br>25<br>13<br><br><br>38<br>25<br>2<br>34'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.98364150392283, 40.73818576380065]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'West Village',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1305 ft<br><br><br>49<br>41<br><br><br>31.5<br>32<br><br><br>37<br>1<br>7<br>5<br>4<br>44<br><br><br>32<br>10<br>0<br>0<br>54<br><br><br>10<br>9<br>15<br>11<br>5<br>49<br><br><br>43<br>6<br>1<br>3<br>45<br><br><br>36<br>27<br>23<br>27<br>18<br>10<br><br><br>32<br>30<br>0<br>36'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.99960382444324, 40.73360554064036]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Tribeca',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1737 ft<br><br><br>54<br>37<br><br><br>33<br>30<br><br><br>31<br>0<br>11<br>11<br>6<br>37<br><br><br>39<br>6<br>0<br>2<br>51<br><br><br>8<br>4<br>23<br>6<br>13<br>45<br><br><br>34<br>5<br>4<br>2<br>54<br><br><br>40<br>38<br>25<br>24<br>20<br>17<br><br><br>43<br>20<br>1<br>35'
        },
        geometry: {
          type: 'Point',
          coordinates: [-74.00923329788877, 40.715538225159925]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Midtown East',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1523 ft<br><br><br>47<br>26<br><br><br>32.9<br>30<br><br><br>40<br>1<br>10<br>11<br>3<br>33<br><br><br>38<br>10<br>0<br>0<br>47<br><br><br>12<br>12<br>14<br>7<br>12<br>42<br><br><br>49<br>2<br>2<br>0<br>46<br><br><br>51<br>37<br>30<br>37<br>27<br>23<br><br><br>41<br>26<br>2<br>30'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.97447256237602, 40.75079342967771]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Lincoln Square',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1519 ft<br><br><br>41<br>34<br><br><br>34.3<br>32<br><br><br>50<br>5<br>10<br>1<br>1<br>29<br><br><br>38<br>16<br>0<br>0<br>43<br><br><br>16<br>11<br>20<br>12<br>4<br>36<br><br><br>51<br>3<br>4<br>1<br>39<br><br><br>56<br>50<br>42<br>42<br>30<br>16<br><br><br>46<br>22<br>0<br>31'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.98349712931237, 40.77608042617172]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Upper West Side',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1575 ft<br><br><br>35<br>23<br><br><br>34.3<br>30<br><br><br>41<br>5<br>9<br>6<br>5<br>31<br><br><br>41<br>12<br>0<br>2<br>42<br><br><br>13<br>12<br>18<br>6<br>14<br>36<br><br><br>48<br>5<br>3<br>3<br>40<br><br><br>47<br>36<br>28<br>43<br>27<br>15<br><br><br>40<br>30<br>1<br>28'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.97503098242109, 40.78770790410171]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Manhattan Valley',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1787 ft<br><br><br>42<br>34<br><br><br>30.2<br>28<br><br><br>30<br>3<br>9<br>6<br>7<br>37<br><br><br>39<br>13<br>0<br>1<br>45<br><br><br>14<br>12<br>17<br>16<br>6<br>34<br><br><br>50<br>6<br>1<br>1<br>41<br><br><br>62<br>50<br>42<br>42<br>27<br>20<br><br><br>40<br>24<br>1<br>40'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.96572392371597, 40.800452669257815]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Central Harlem',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1707 ft<br><br><br>45<br>39<br><br><br>33.3<br>31<br><br><br>19<br>26<br>16<br>4<br>5<br>28<br><br><br>40<br>20<br>0<br>1<br>36<br><br><br>20<br>13<br>20<br>11<br>9<br>26<br><br><br>55<br>7<br>0<br>1<br>35<br><br><br>54<br>47<br>38<br>42<br>24<br>19<br><br><br>48<br>27<br>1<br>23'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.94550895237678, 40.80777765194525]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Upper East Side',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1305 ft<br><br><br>33<br>36<br><br><br>32.2<br>30<br><br><br>44<br>1<br>9<br>2<br>3<br>38<br><br><br>34<br>19<br>0<br>0<br>45<br><br><br>14<br>8<br>17<br>13<br>7<br>40<br><br><br>52<br>1<br>2<br>3<br>41<br><br><br>44<br>46<br>37<br>40<br>29<br>14<br><br><br>40<br>19<br>0<br>30'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.95402770149525, 40.7788395855512]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'East Harlem',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1785 ft<br><br><br>48<br>24<br><br><br>30.3<br>30<br><br><br>11<br>11<br>29<br>3<br>8<br>35<br><br><br>38<br>10<br>2<br>0<br>49<br><br><br>17<br>6<br>15<br>5<br>19<br>37<br><br><br>52<br>0<br>1<br>0<br>44<br><br><br>48<br>44<br>37<br>39<br>27<br>19<br><br><br>39<br>20<br>1<br>39'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.9428163439054, 40.794148829904465]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Washington Heights',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1476 ft<br><br><br>31<br>22<br><br><br>30.9<br>29<br><br><br>18<br>11<br>15<br>1<br>11<br>42<br><br><br>39<br>14<br>0<br>0<br>42<br><br><br>14<br>11<br>21<br>7<br>12<br>34<br><br><br>61<br>1<br>0<br>0<br>36<br><br><br>42<br>53<br>40<br>42<br>25<br>11<br><br><br>42<br>26<br>1<br>30'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.94489435997193, 40.83407996815915]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: "Hell's Kitchen",
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '648 ft<br><br><br>27<br>48<br><br><br>30.6<br>29<br><br><br>40<br>1<br>9<br>9<br>3<br>32<br><br><br>35<br>18<br>0<br>0<br>45<br><br><br>14<br>6<br>29<br>11<br>4<br>35<br><br><br>64<br>2<br>1<br>0<br>32<br><br><br>46<br>39<br>32<br>37<br>28<br>16<br><br><br>22<br>44<br>1<br>32'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.99315811344883, 40.76282662307969]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Lenox Hill',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2010 ft<br><br><br>45<br>28<br><br><br>33.5<br>30<br><br><br>47<br>0<br>5<br>6<br>5<br>33<br><br><br>40<br>12<br>0<br>1<br>45<br><br><br>14<br>6<br>19<br>11<br>10<br>39<br><br><br>46<br>8<br>0<br>1<br>43<br><br><br>56<br>36<br>35<br>44<br>22<br>12<br><br><br>42<br>24<br>0<br>33'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.96248220319043, 40.76720898678101]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Concourse',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2381 ft<br><br><br>60<br>17<br><br><br>30.7<br>29<br><br><br>4<br>11<br>40<br>1<br>7<br>32<br><br><br>55<br>8<br>0<br>0<br>35<br><br><br>19<br>7<br>12<br>7<br>13<br>41<br><br><br>44<br>0<br>0<br>0<br>52<br><br><br>47<br>45<br>30<br>27<br>10<br>20<br><br><br>41<br>16<br>2<br>40'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.91773459590624, 40.83450111686287]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'South Bronx',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '3008 ft<br><br><br>42<br>25<br><br><br>30.3<br>29<br><br><br>3<br>18<br>34<br>1<br>8<br>30<br><br><br>39<br>9<br>1<br>2<br>46<br><br><br>19<br>1<br>19<br>6<br>15<br>39<br><br><br>45<br>1<br>1<br>1<br>49<br><br><br>35<br>40<br>37<br>29<br>19<br>22<br><br><br>42<br>23<br>0<br>33'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.91765081443882, 40.816079065323045]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Belmont',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '3211 ft<br><br><br>45<br>18<br><br><br>28.1<br>27<br><br><br>7<br>10<br>26<br>1<br>11<br>42<br><br><br>41<br>5<br>0<br>5<br>45<br><br><br>16<br>4<br>14<br>7<br>16<br>42<br><br><br>44<br>1<br>2<br>0<br>49<br><br><br>46<br>34<br>29<br>26<br>18<br>21<br><br><br>28<br>15<br>0<br>55'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.8875756332115, 40.85558063698224]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Parkchester',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '3809 ft<br><br><br>54<br>14<br><br><br>30.2<br>29<br><br><br>5<br>20<br>34<br>1<br>7<br>28<br><br><br>47<br>2<br>0<br>3<br>45<br><br><br>14<br>3<br>19<br>6<br>14<br>43<br><br><br>44<br>0<br>0<br>1<br>52<br><br><br>44<br>40<br>35<br>31<br>19<br>25<br><br><br>38<br>14<br>4<br>43'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.86094862236988, 40.833191433421085]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Long Island City',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2372 ft<br><br><br>44<br>27<br><br><br>32.1<br>31<br><br><br>24<br>5<br>13<br>15<br>5<br>30<br><br><br>39<br>13<br>1<br>0<br>45<br><br><br>19<br>5<br>15<br>12<br>8<br>40<br><br><br>49<br>4<br>2<br>0<br>44<br><br><br>44<br>35<br>26<br>27<br>20<br>15<br><br><br>46<br>25<br>0<br>28'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.9447682112414, 40.74841621109902]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Astoria',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1691 ft<br><br><br>37<br>30<br><br><br>31.3<br>30<br><br><br>29<br>3<br>15<br>8<br>6<br>34<br><br><br>33<br>17<br>1<br>1<br>46<br><br><br>14<br>16<br>17<br>7<br>8<br>37<br><br><br>55<br>9<br>1<br>4<br>28<br><br><br>54<br>49<br>38<br>34<br>23<br>22<br><br><br>27<br>32<br>1<br>39'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.92139272177555, 40.76690809572307]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Downtown Brooklyn',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2168 ft<br><br><br>42<br>29<br><br><br>31.7<br>30<br><br><br>22<br>11<br>10<br>6<br>10<br>37<br><br><br>34<br>14<br>0<br>0<br>50<br><br><br>18<br>5<br>17<br>12<br>8<br>39<br><br><br>39<br>9<br>3<br>4<br>43<br><br><br>46<br>40<br>30<br>26<br>15<br>11<br><br><br>31<br>35<br>1<br>31'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.98343820831346, 40.693668445009]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'East Flatbush',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '4994 ft<br><br><br>60<br>25<br><br><br>30.3<br>28<br><br><br>3<br>49<br>7<br>0<br>4<br>34<br><br><br>47<br>9<br>1<br>0<br>40<br><br><br>17<br>6<br>18<br>8<br>11<br>39<br><br><br>41<br>0<br>0<br>1<br>52<br><br><br>48<br>42<br>33<br>24<br>18<br>15<br><br><br>39<br>11<br>2<br>47'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.93041262837251, 40.651759532757794]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Crown Heights',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2764 ft<br><br><br>34<br>24<br><br><br>30.4<br>29<br><br><br>21<br>21<br>9<br>3<br>9<br>34<br><br><br>37<br>20<br>1<br>1<br>37<br><br><br>9<br>9<br>21<br>13<br>14<br>33<br><br><br>48<br>5<br>0<br>1<br>44<br><br><br>43<br>41<br>35<br>37<br>19<br>19<br><br><br>35<br>22<br>2<br>40'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.94203354565873, 40.671199879319225]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Park Slope',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2745 ft<br><br><br>32<br>23<br><br><br>33.2<br>32<br><br><br>32<br>3<br>8<br>5<br>6<br>42<br><br><br>21<br>13<br>3<br>1<br>58<br><br><br>8<br>10<br>13<br>9<br>8<br>51<br><br><br>34<br>8<br>6<br>4<br>47<br><br><br>51<br>41<br>38<br>29<br>19<br>8<br><br><br>30<br>26<br>0<br>43'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.982957859335, 40.66927086967388]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Bed-Stuy',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2111 ft<br><br><br>29<br>21<br><br><br>29.9<br>28<br><br><br>17<br>15<br>15<br>3<br>10<br>37<br><br><br>32<br>17<br>4<br>2<br>41<br><br><br>14<br>11<br>18<br>3<br>8<br>45<br><br><br>44<br>13<br>1<br>1<br>37<br><br><br>39<br>33<br>27<br>27<br>17<br>13<br><br><br>43<br>24<br>4<br>28'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.94505603899259, 40.689118935202806]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Sunset Park',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '3306 ft<br><br><br>51<br>11<br><br><br>29.8<br>28<br><br><br>12<br>2<br>31<br>9<br>5<br>40<br><br><br>39<br>7<br>3<br>1<br>43<br><br><br>10<br>5<br>19<br>8<br>12<br>45<br><br><br>40<br>1<br>1<br>0<br>57<br><br><br>45<br>39<br>35<br>33<br>23<br>15<br><br><br>40<br>14<br>0<br>45'
        },
        geometry: {
          type: 'Point',
          coordinates: [-74.00742209266079, 40.64791303533381]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Prospect Park',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2439 ft<br><br><br>31<br>28<br><br><br>32.4<br>31<br><br><br>18<br>21<br>7<br>0<br>11<br>39<br><br><br>31<br>22<br>1<br>1<br>43<br><br><br>17<br>8<br>8<br>8<br>14<br>44<br><br><br>49<br>3<br>1<br>1<br>44<br><br><br>42<br>39<br>30<br>38<br>27<br>11<br><br><br>41<br>20<br>0<br>38'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.95683013296755, 40.65970372723811]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Flabush',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '3335 ft<br><br><br>45<br>32<br><br><br>32.9<br>32<br><br><br>15<br>25<br>10<br>2<br>9<br>31<br><br><br>39<br>11<br>1<br>2<br>45<br><br><br>16<br>6<br>18<br>9<br>8<br>42<br><br><br>46<br>4<br>1<br>2<br>45<br><br><br>48<br>46<br>40<br>35<br>23<br>23<br><br><br>40<br>14<br>2<br>43'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.95870471118214, 40.637774953543165]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Clinton Hill',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2368 ft<br><br><br>26<br>32<br><br><br>30.5<br>29.5<br><br><br>23<br>6<br>11<br>2<br>4<br>48<br><br><br>26<br>14<br>2<br>1<br>53<br><br><br>9<br>9<br>20<br>6<br>12<br>43<br><br><br>52<br>8<br>2<br>1<br>36<br><br><br>42<br>42<br>37<br>38<br>24<br>12<br><br><br>37<br>22<br>0<br>40'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.96521878410874, 40.68978444028797]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Bushwick',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1772 ft<br><br><br>30<br>27<br><br><br>27.9<br>27<br><br><br>22<br>6<br>19<br>3<br>11<br>36<br><br><br>32<br>19<br>4<br>3<br>38<br><br><br>14<br>4<br>29<br>10<br>8<br>34<br><br><br>57<br>3<br>1<br>0<br>57<br><br><br>46<br>50<br>35<br>51<br>29<br>21<br><br><br>46<br>25<br>0<br>28'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.92009482585735, 40.70226582051996]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Williamsburg',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2113 ft<br><br><br>49<br>41<br><br><br>30.8<br>29<br><br><br>34<br>2<br>7<br>0<br>4<br>51<br><br><br>27<br>13<br>0<br>0<br>58<br><br><br>13<br>8<br>16<br>5<br>7<br>50<br><br><br>44<br>8<br>2<br>0<br>42<br><br><br>50<br>35<br>29<br>32<br>18<br>14<br><br><br>24<br>37<br>0<br>38'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.96020708300637, 40.717535096236645]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Flushing',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '4844 ft<br><br><br>56<br>19<br><br><br>29.5<br>27.5<br><br><br>6<br>5<br>17<br>36<br>4<br>29<br><br><br>38<br>15<br>1<br>0<br>43<br><br><br>14<br>6<br>19<br>12<br>15<br>33<br><br><br>49<br>6<br>0<br>1<br>41<br><br><br>42<br>42<br>37<br>40<br>30<br>16<br><br><br>42<br>17<br>0<br>40'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.83013792401673, 40.75957033122168]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Jackson Heights',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '1997 ft<br><br><br>45<br>15<br><br><br>36.2<br>33<br><br><br>7<br>0<br>45<br>8<br>8<br>28<br><br><br>42<br>10<br>0<br>1<br>45<br><br><br>15<br>8<br>12<br>5<br>14<br>45<br><br><br>34<br>6<br>1<br>0<br>57<br><br><br>44<br>39<br>30<br>31<br>18<br>22<br><br><br>43<br>15<br>0<br>41'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.88503529795574, 40.753757841117945]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Elmhurst',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '2548 ft<br><br><br>48<br>20<br><br><br>30.7<br>29<br><br><br>7<br>4<br>25<br>21<br>7<br>34<br><br><br>37<br>5<br>0<br>2<br>53<br><br><br>14<br>5<br>13<br>7<br>16<br>44<br><br><br>43<br>3<br>0<br>1<br>51<br><br><br>41<br>45<br>34<br>41<br>26<br>15<br><br><br>37<br>17<br>1<br>44'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.87792023865616, 40.73940097925205]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Jamaica',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '4578 ft<br><br><br>57<br>14<br><br><br>29.5<br>28<br><br><br>3<br>22<br>21<br>2<br>7<br>41<br><br><br>44<br>8<br>2<br>4<br>40<br><br><br>14<br>5<br>19<br>4<br>13<br>44<br><br><br>44<br>1<br>1<br>2<br>48<br><br><br>42<br>41<br>39<br>32<br>19<br>20<br><br><br>39<br>10<br>1<br>49'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.79992265951789, 40.70246728966804]
        }
      },
      {
        type: 'Feature',
        properties: {
          title: 'Bay Ridge',
          description: 'Radius (approx.)<br><br><strong>Photo</strong><br>Faceless Profiles<br>Shirtless Profiles<br><br><strong>Age</strong><br>Average<br>Median<br><br><strong>Race</strong><br>White<br>Black<br>Latino<br>Asian<br>Mixed<br>N/A<br><br><strong>Gender</strong><br>Man<br>Cis Man<br>Non-Binary<br>Trans Woman<br>N/A<br><br><strong>Position</strong><br>Top<br>Vers Top<br>Versatile<br>Vers Bottom<br>Bottom<br>N/A<br><br><strong>Relationship Status</strong><br>Single<br>Open relationship<br>Married<br>Partnered<br>N/A<br><br><strong>Looking for</strong><br>Right Now<br>Friends<br>Chat<br>Dates<br>Relationship<br>Networking<br><br><strong>HIV Status</strong><br>Negative<br>Negative, on PrEP<br>Positive, Undetectable<br>N/A',
          numbers: '4338 ft<br><br><br>56<br>21<br><br><br>32.3<br>30.5<br><br><br>24<br>2<br>14<br>5<br>11<br>40<br><br><br>36<br>8<br>1<br>2<br>49<br><br><br>14<br>7<br>9<br>8<br>12<br>49<br><br><br>47<br>2<br>1<br>0<br>47<br><br><br>36<br>36<br>42<br>9<br>23<br>35<br><br><br>42<br>9<br>0<br>48'
        },
        geometry: {
          type: 'Point',
          coordinates: [-74.02839624872936, 40.62284306271223]
        }
      }
    ]
  };

myLayer.setGeoJSON(geoJson);
myLayer.on('click', function (e) {
    var feature = e.layer.feature;
    var content = '<div class="flexbox"><span onclick="this.parentNode.style.display = `none`;" class="closebtn">&times;</span><div class="left"><h3 style="font-size: 12px"> ' + feature.properties.title + '</h3><p>(n= 99)</p></div><div class="middle"><p style= "text-align: right">' + feature.properties.description + '</p></div><div class="right"><p style= "text-align: left">' + feature.properties.numbers + '</p></div></div>';
    info.innerHTML = content;
});

empty();

function empty() {
    info.innerHTML = '<div class="marker"; style="font-size: 12px"><strong>Click a marker</strong></div>';
}