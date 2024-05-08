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
import classes from './Cards.module.css';
import { useEffect, useState } from 'react';
import Calendar from './Calendar';

const Cards = (state) => {
  const [clubData, setcClubDate] = useState();
  const [BlogData, setBlogData] = useState(clubData);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [regionOptions, setRegionOptions] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  ///////// 달력 데이터
  const [dateInfo, setDateInfo] = useState();

  useEffect(() => {
    switch (state.region) {
      case 'metro':
        setcClubDate([
          {
            title: '천년동안도 종각',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'jongro',
            detlAddr: '서울 종로구 삼일대로15길 6 지하1층, 2층',
            note: '종각역 4번 출구에서 424m',
          },
          {
            title: '천년동안도 낙원',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'jongro',
            detlAddr: '서울 종로구 수표로 134 2층',
            note: '종로3가역 5번 출구에서 90m',
          },
          {
            title: '하우스오브블루',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'jongro',
            detlAddr: '서울 종로구 자하문로9길 6 지하1층',
            note: '경복궁역 2번 출구에서 398m',
          },
          {
            title: '서울 게러지바',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'jongro',
            detlAddr: '서울 종로구 종로14길 4 1층',
            note: '종각역 4번 출구에서 281m',
          },
          {
            title: '종로 리브로',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'junggu',
            detlAddr: '서울 중구 퇴계로27길 49 지하1층',
            note: '을지로3가역 9번 출구에서 302m',
          },
          {
            title: '이들스',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'jongro',
            detlAddr: '서울 종로구 삼일대로 428 중2층',
            note: '종로3가역 5번 출구에서 54m',
          },
          {
            title: '연남 5701',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'seodaemun',
            detlAddr: '서울 서대문구 신촌로 141 9층',
            note: '이대역 1번 출구에서 366m',
          },
        ]);

        setRegionOptions([
          { code: 'all', codeNm: '전체' },
          { code: 'dobong', codeNm: '도봉구' },
          { code: 'gangbuk', codeNm: '강북구' },
          { code: 'nowon', codeNm: '노원구' },
          { code: 'eunpyeong', codeNm: '은평구' },
          { code: 'seodaemun', codeNm: '서대문구' },
          { code: 'jongro', codeNm: '종로구' },
          { code: 'seongbuk', codeNm: '성북구' },
          { code: 'jungrang', codeNm: '중랑구' },
          { code: 'dongdaemun', codeNm: '동대문구' },
          { code: 'junggu', codeNm: '중구' },
          { code: 'yongsan', codeNm: '용산구' },
          { code: 'seongdong', codeNm: '성동구' },
          { code: 'gwangjin', codeNm: '광진구' },
          { code: 'gangseo', codeNm: '강서구' },
          { code: 'yangcheon', codeNm: '양천구' },
          { code: 'guro', codeNm: '구로구' },
          { code: 'yeongdeungpo', codeNm: '영등포구' },
          { code: 'geumcheon', codeNm: '금천구' },
          { code: 'dongjak', codeNm: '동작구' },
          { code: 'gwanak', codeNm: '관악구' },
          { code: 'seocho', codeNm: '서초구' },
          { code: 'gangnam', codeNm: '강남구' },
          { code: 'songpa', codeNm: '송파구' },
          { code: 'gangdong', codeNm: '강동구' },
        ]);
        break;
      case 'spCity':
        setcClubDate([
          {
            title: '테스트 광역시',
            mainRegion: '인천광역시',
            subRegion: '인천',
            detlRegion: 'incheon',
            detlAddr: '인천광역시 6 지하1층, 2층',
            note: '인천 424m',
          },
        ]);
        setRegionOptions([
          { code: 'all', codeNm: '전체' },
          { code: 'inchen', codeNm: '인천구' },
        ]);

        break;
      case 'rural':
        setcClubDate([
          {
            title: '강원도 테스트',
            mainRegion: '강원도',
            subRegion: '강북',
            detlRegion: 'gangwon',
            detlAddr: '강원도 지하1층, 2층',
            note: '강원도 출구에서 424m',
          },
        ]);
        setRegionOptions([
          { code: 'all', codeNm: '전체' },
          { code: 'sigol', codeNm: '시골구' },
        ]);
        break;
      default:
        setcClubDate([
          {
            title: '천년동안도 종각',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'jongro',
            detlAddr: '서울 종로구 삼일대로15길 6 지하1층, 2층',
            note: '종각역 4번 출구에서 424m',
          },
          {
            title: '천년동안도 낙원',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'jongro',
            detlAddr: '서울 종로구 수표로 134 2층',
            note: '종로3가역 5번 출구에서 90m',
          },
          {
            title: '하우스오브블루',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'jongro',
            detlAddr: '서울 종로구 자하문로9길 6 지하1층',
            note: '경복궁역 2번 출구에서 398m',
          },
          {
            title: '서울 게러지바',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'jongro',
            detlAddr: '서울 종로구 종로14길 4 1층',
            note: '종각역 4번 출구에서 281m',
          },
          {
            title: '종로 리브로',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'junggu',
            detlAddr: '서울 중구 퇴계로27길 49 지하1층',
            note: '을지로3가역 9번 출구에서 302m',
          },
          {
            title: '이들스',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'jongro',
            detlAddr: '서울 종로구 삼일대로 428 중2층',
            note: '종로3가역 5번 출구에서 54m',
          },
          {
            title: '연남 5701',
            mainRegion: '서울',
            subRegion: '강북',
            detlRegion: 'seodaemun',
            detlAddr: '서울 서대문구 신촌로 141 9층',
            note: '이대역 1번 출구에서 366m',
          },
        ]);
        setRegionOptions([
          { code: 'all', codeNm: '전체' },
          { code: 'dobong', codeNm: '도봉구' },
          { code: 'gangbuk', codeNm: '강북구' },
          { code: 'nowon', codeNm: '노원구' },
          { code: 'eunpyeong', codeNm: '은평구' },
          { code: 'seodaemun', codeNm: '서대문구' },
          { code: 'jongro', codeNm: '종로구' },
          { code: 'seongbuk', codeNm: '성북구' },
          { code: 'jungrang', codeNm: '중랑구' },
          { code: 'dongdaemun', codeNm: '동대문구' },
          { code: 'junggu', codeNm: '중구' },
          { code: 'yongsan', codeNm: '용산구' },
          { code: 'seongdong', codeNm: '성동구' },
          { code: 'gwangjin', codeNm: '광진구' },
          { code: 'gangseo', codeNm: '강서구' },
          { code: 'yangcheon', codeNm: '양천구' },
          { code: 'guro', codeNm: '구로구' },
          { code: 'yeongdeungpo', codeNm: '영등포구' },
          { code: 'geumcheon', codeNm: '금천구' },
          { code: 'dongjak', codeNm: '동작구' },
          { code: 'gwanak', codeNm: '관악구' },
          { code: 'seocho', codeNm: '서초구' },
          { code: 'gangnam', codeNm: '강남구' },
          { code: 'songpa', codeNm: '송파구' },
          { code: 'gangdong', codeNm: '강동구' },
        ]);
        break;
    }
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
      <Modal isOpen={isOpen} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>공연 일정</ModalHeader>
        <ModalBody>
          <Calendar />
        </ModalBody>
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
        {BlogData &&
          BlogData.map((eachClub, index) => {
            return (
              <Col key={index} md="6" lg="4">
                <Card body style={{ height: '10rem' }}>
                  <CardTitle tag="h5">{eachClub.title}</CardTitle>
                  <CardText>{eachClub.detlAddr}</CardText>
                  <div>
                    <Button color="dark" onClick={toggle}>
                      공연 정보
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

export default Cards;
