import { TableContainer } from "./DayOfWeek.styled";
const DayOfWeek = () => {
  return (
    <TableContainer bordered>
      <thead>
        <tr>
          <th>DAY Of WEEK</th>
          <th>PAGEVIEWS</th>
          <th>UNIQUES</th>
          <th>MEMBERS JOINED</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sunday</td>
          <td>30</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Monday</td>
          <td>271</td>
          <td>3</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>7</td>
          <td>271</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>271</td>
          <td>3</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>271</td>
          <td>3</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>271</td>
          <td>3</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>271</td>
          <td>3</td>
          <td>1</td>
        </tr>
      </tbody>
    </TableContainer>
  );
};

export default DayOfWeek;
