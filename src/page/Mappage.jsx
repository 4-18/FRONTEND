/*global kakao*/
import React, { useEffect } from 'react';
import '../components/Map/style.scss';
import MapHeader from '../components/Map/MapHeader';
import GS25Component from '../components/Map/GS25Component';
import CUComponent from '../components/Map/CUComponent';
import SevenElevenComponent from '../components/Map/SevenElevenComponent';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const navigate = useNavigate();
  const searchConvenienceStoresByCategory = () => {
    window.searchConvenienceStoresByCategory();
  };

  const searchConvenienceStoresByKeyword = (keyword) => {
    window.searchConvenienceStoresByKeyword(keyword);
  };

  const handleButtonClick = (type) => {
    if (type === '전체') {
      searchConvenienceStoresByCategory();
    } else {
      searchConvenienceStoresByKeyword(type);
    }
  };

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var ps = new kakao.maps.services.Places();
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    var markers = [];

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var locPosition = new kakao.maps.LatLng(lat, lon);
        map.setCenter(locPosition);
        searchConvenienceStoresByCategory();
      });
    } else {
      alert('위치 정보 사용 불가. 기본 좌표로 표시됩니다.');
    }

    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    function searchConvenienceStoresByCategory() {
      ps.categorySearch('CS2', placesSearchCB, { useMapBounds: true });
    }

    function searchConvenienceStoresByKeyword(keyword) {
      ps.keywordSearch(keyword, placesSearchCB, { useMapBounds: true });
    }

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 없습니다.');
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 중 오류가 발생했습니다.');
      }
    }

    function displayPlaces(places) {
      removeMarker();

      for (var i = 0; i < places.length; i++) {
        var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
        var marker = addMarker(placePosition);

        (function(marker, title) {
          kakao.maps.event.addListener(marker, 'click', function() {
            displayInfowindow(marker, title);
          });
        })(marker, places[i].place_name);
      }
    }

    function addMarker(position) {
      var marker = new kakao.maps.Marker({
        position: position,
        map: map
      });
      markers.push(marker);
      return marker;
    }

    function removeMarker() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    function displayInfowindow(marker, title) {
      var content = `<div style="padding:5px;z-index:1;">${title}</div>`;
      infowindow.setContent(content);
      infowindow.open(map, marker);
    }

    window.searchConvenienceStoresByCategory = searchConvenienceStoresByCategory;
    window.searchConvenienceStoresByKeyword = searchConvenienceStoresByKeyword;

  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="convenience-store-map-page">
      <MapHeader />
      <div className="content-wrapper">
      <div id="map" className="map-container"></div>
      <div className="filter-buttons">
        <GS25Component onClick={() => handleButtonClick('GS25')} />
        <CUComponent onClick={() => handleButtonClick('CU')} />
        <SevenElevenComponent onClick={() => handleButtonClick('세븐일레븐')} />
      </div>
      </div>
    </div>
  );
};

export default Location;