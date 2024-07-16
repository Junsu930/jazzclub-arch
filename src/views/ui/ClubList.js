import {
  Card,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import classes from './ClubList.module.css';
import { useEffect, useState } from 'react';
import Calendar from '../../components/Calendar';
import axios from 'axios';
import Comment from './Comment';

const ClubList = (state) => {
  const [metroData, setMetroData] = useState([]);
  const [spCityData, setSpCityData] = useState([]);
  const [ruralData, setRuralData] = useState([]);
  const [metroCode, setMetroCode] = useState([]);
  const [spCityCode, setSpCityCode] = useState([]);
  const [ruralCode, setRuralCode] = useState([]);

  const [clubData, setClubData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [regionOptions, setRegionOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json');
        const data = response.data;

        setMetroData(data.metro);
        setSpCityData(data.spCity);
        setRuralData(data.rural);
        setMetroCode(data.metroCode);
        setSpCityCode(data.spCityCode);
        setRuralCode(data.ruralCode);

        switch (state.region) {
          case 'metro':
            setClubData(data.metro);
            setRegionOptions(data.metroCode);
            break;
          case 'spCity':
            setClubData(data.spCity);
            setRegionOptions(data.spCityCode);
            break;
          case 'rural':
            setClubData(data.rural);
            setRegionOptions(data.ruralCode);
            break;
          default:
            setClubData([]);
            setRegionOptions([]);
            break;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [state.region]);

  useEffect(() => {
    let filteredData = clubData;

    if (selectedRegion !== 'all') {
      filteredData = filteredData.filter(
        (club) => club.detlRegion === selectedRegion,
      );
    }

    if (searchTerm) {
      filteredData = filteredData.filter((club) =>
        club.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setBlogData(filteredData);
  }, [selectedRegion, searchTerm, clubData]);

  const regionSearchHandler = (e) => {
    setSelectedRegion(e.target.value);
  };

  const searchInputHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} size="md">
        <ModalHeader toggle={toggle}>상세정보</ModalHeader>
        <ModalBody>상세정보예정</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Row>
        <Col>
          <div className={classes.titleBar}>
            <div className={classes.selectSet}>
              <p className={classes.static}>세부 지역</p>
              <select onChange={regionSearchHandler}>
                {regionOptions &&
                  regionOptions.map((region) => {
                    return (
                      <option key={region.code} value={region.code}>
                        {region.codeNm}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className={classes.selectSet}>
              <p className={classes.static}>클럽 이름</p>
              <input
                className={classes.nameInput}
                onInput={searchInputHandler}
              ></input>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <h5 className="mb-3 mt-3">{state.name} 재즈클럽 리스트</h5>
        {blogData &&
          blogData.map((eachClub, index) => {
            return (
              <Col key={index} md="6" lg="4">
                <Card body style={{ height: '10rem' }}>
                  <CardTitle tag="h5">{eachClub.title}</CardTitle>
                  <CardText>{eachClub.detlAddr}</CardText>
                  <div>
                    <Button color="dark" onClick={toggle}>
                      상세 정보
                    </Button>
                  </div>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default ClubList;
