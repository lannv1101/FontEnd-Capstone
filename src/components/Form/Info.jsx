import { MainContainer, InfoInput } from './FormStyle';
import 'aos/dist/aos.css';
function Info({ info, setInfo }) {
  return (
    <>
      <MainContainer
        data-aos='fade-right'
        data-aos-delay='0'
        data-aos-duration='300'
      >
        <div style={{ textAlign: 'center' }}>
          <InfoInput
            type='text'
            placeholder='First Name'
            value={info.firstName}
            onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
            required={true}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <InfoInput
            type='text'
            placeholder='Last Name'
            value={info.lastName}
            onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
            required={true}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <InfoInput
            type='email'
            placeholder='Email'
            value={info.emailAddress}
            onChange={(e) => setInfo({ ...info, emailAddress: e.target.value })}
            required={true}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <InfoInput
            type='password'
            placeholder='Password'
            value={info.password}
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
            required={true}
          />
        </div>
      </MainContainer>
    </>
  );
}

export default Info;
