import { Table } from 'reactstrap';
import { FaRegEye } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineTitle, MdFormatListNumbered } from 'react-icons/md';
import classes from './Freeboard.module.css';
const Freeboard = () => {
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Freeboard;
