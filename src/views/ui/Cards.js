import { Card, CardText, CardTitle, Button, Row, Col } from 'reactstrap';
import classes from './Cards.module.css';
import { useState } from 'react';

const clubData = [
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
];

const Cards = (state) => {
  const [BlogData, setBlogData] = useState(clubData);

  const regionSearchHandler = (e) => {
    if (e.target.value === 'all') {
      setBlogData(clubData);
    } else {
      const filteredData = BlogData.filter(
        (club) => club.detlRegion === e.target.value,
      );
      setBlogData(filteredData);
    }
  };

  const searchInputHandler = (e) => {
    const filteredData = BlogData.filter((club) =>
      Object.values(club.detlAddr)
        .join('')
        .toLowerCase()
        .includes(e.target.value),
    );
    setBlogData(filteredData);
  };

  return (
    <div>
      <Row>
        <Col>
          <div className={classes.titleBar}>
            <div className={classes.selectSet}>
              <p className={classes.static}>세부 지역</p>
              <select onChange={regionSearchHandler}>
                <option value="all">전체</option>
                <option value="dobong">도봉구</option>
                <option value="gangbuk">강북구</option>
                <option value="nowon">노원구</option>
                <option value="eunpyeong">은평구</option>
                <option value="gangbuk">강북구</option>
                <option value="seodaemun">서대문구</option>
                <option value="jongro">종로구</option>
                <option value="seongbuk">성북구</option>
                <option value="jungrang">중랑구</option>
                <option value="dongdaemun">동대문구</option>
                <option value="junggu">중구</option>
                <option value="yongsan">용산구</option>
                <option value="seongdong">성동구</option>
                <option value="gwangjin">광진구</option>
                <option value="gangseo">강서구</option>
                <option value="yangcheon">양천구</option>
                <option value="guro">구로구</option>
                <option value="yeongdeungpo">영등포구</option>
                <option value="geumcheon">금천구</option>
                <option value="dongjak">동작구</option>
                <option value="gwanak">관악구</option>
                <option value="seocho">서초구</option>
                <option value="gangnam">강남구</option>
                <option value="songpa">송파구</option>
                <option value="gangdong">강동구</option>
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
        {BlogData.map((eachClub, index) => {
          return (
            <Col key={index} md="6" lg="4">
              <Card body>
                <CardTitle tag="h5">{eachClub.title}</CardTitle>
                <CardText>{eachClub.detlAddr}</CardText>
                <div>
                  <Button color="dark">공연 정보</Button>
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
