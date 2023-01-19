import {
  MainContainer,
  TableLabels,
  TableInputs,
  TableSelect,
} from './FormStyle';
import 'aos/dist/aos.css';
function Table({ info, setInfo }) {
  return (
    <>
      <MainContainer
        data-aos='fade-right'
        data-aos-delay='0'
        data-aos-duration='300'
      >
        <div>
          <TableLabels htmlFor='date'>Select Date (required)</TableLabels>
          <TableInputs
            type='date'
            id='date'
            value={info.date}
            onChange={(e) => setInfo({ ...info, date: e.target.value })}
            required={true}
          />
        </div>
        <div>
          <TableLabels htmlFor='time'>Select Time (required)</TableLabels>
          <TableInputs
            type='time'
            id='time'
            value={info.time}
            onChange={(e) => setInfo({ ...info, time: e.target.value })}
            required={true}
          />
        </div>
        <div>
          <TableLabels htmlFor='occasion'>Number of diners</TableLabels>
          <TableSelect
            value={info.totalOccasion}
            onChange={(e) =>
              setInfo({ ...info, totalOccasion: e.target.value })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </TableSelect>
        </div>
      </MainContainer>
    </>
  );
}

export default Table;
