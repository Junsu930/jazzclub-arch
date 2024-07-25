import { Button, Table } from 'reactstrap';
import { FaRegEye } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineTitle, MdFormatListNumbered } from 'react-icons/md';
import classes from './Freeboard.module.css';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Freeboard = () => {
  const [boardList, setBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  /* 페이지네이션 설정 */
  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const currentPageData = boardList.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(boardList.length / itemsPerPage);

  const linkHandler = (boardId) => {
    console.log(boardId);
    navigate(`/post/${boardId}`);
  };

  useEffect(() => {
    async function getBoard() {
      try {
        const response = await axios.get('/data.json');
        setBoardList(response.data.boardList);
      } catch (error) {
        console.error('Error fetching the board data:', error);
      }
    }
    getBoard();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <Table hover>
        <thead>
          <tr className={classes.tableRat}>
            <th>
              <MdFormatListNumbered />
            </th>
            <th>
              <IoPerson />
            </th>
            <th>
              <MdOutlineTitle />
            </th>
            <th>
              <FaRegEye />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((board) => (
            <tr key={board.id} onClick={() => linkHandler(board.id)}>
              <th scope="row">{board.id}</th>
              <td>{board.author}</td>
              <td>{board.title}</td>
              <td>{board.viewCount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className="btn btn-info" size="sm">
        글쓰기
      </Button>
      <ReactPaginate
        previousLabel={'이전'}
        nextLabel={'다음'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={classes.pagination}
        activeClassName={classes.active}
      />
    </>
  );
};

export default Freeboard;
