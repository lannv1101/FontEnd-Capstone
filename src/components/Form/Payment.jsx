import {
  MainContainer,
  DetailBox,
  DetailTitle,
  CreditDetail,
  TableLabels,
  CreditBox,
  CreditLabel,
  CreditInput,
} from './FormStyle';
import 'aos/dist/aos.css';
function Payment({ info, setInfo }) {
  return (
    <>
      <MainContainer
        data-aos='fade-right'
        data-aos-delay='0'
        data-aos-duration='300'
      >
        <DetailBox>
          <div style={{ margin: '.5rem 0' }}>
            <h1
              style={{ fontSize: '1rem', color: '#e31837', fontWeight: '900' }}
            >
              Booking Details
            </h1>
          </div>
          <div>
            <DetailTitle>
              First Name: {''}&nbsp;
              <span style={{ color: '#f4ce14' }}>{info.firstName}</span>
            </DetailTitle>
          </div>
          <div>
            <DetailTitle>
              Last Name: {''}&nbsp;
              <span style={{ color: '#f4ce14' }}>{info.lastName}</span>
            </DetailTitle>
          </div>
          <div>
            <DetailTitle>
              Email Address: {''}&nbsp;
              <span style={{ color: '#f4ce14' }}>{info.emailAddress}</span>
            </DetailTitle>
          </div>
          <div>
            <DetailTitle>
              Date-Time: {''}&nbsp;
              <span style={{ color: '#f4ce14' }}>
                {info.date} / {info.time}
              </span>
            </DetailTitle>
          </div>
          <div>
            <DetailTitle>
              Number Of Diners: {''}&nbsp;
              <span style={{ color: '#f4ce14' }}>{info.totalOccasion}</span>
            </DetailTitle>
          </div>
        </DetailBox>
        <CreditDetail>
          <div style={{ margin: '.5rem 0' }}>
            <h1
              style={{ fontSize: '1rem', color: '#e31837', fontWeight: '900' }}
            >
              Credit Card Details
            </h1>
          </div>
          <div>
            <TableLabels htmlFor='card'>Card Number (required)</TableLabels>
            <CreditInput
              type='number'
              id='card'
              placeholder='eg: xxxx-xxxx-xxxx-xxxx'
              required={true}
              value={info.cardNumber}
              onChange={(e) => setInfo({ ...info, cardNumber: e.target.value })}
            />
          </div>
          <CreditBox>
            <div>
              <CreditLabel>Exp Date (required)</CreditLabel>
              <CreditInput
                type='month'
                required={true}
                value={info.expDate}
                onChange={(e) => setInfo({ ...info, expDate: e.target.value })}
              />
            </div>
            <div>
              <CreditLabel>CVV (required)</CreditLabel>
              <CreditInput
                type='number'
                required={true}
                value={info.CVV}
                onChange={(e) => setInfo({ ...info, CVV: e.target.value })}
              />
            </div>
            <div>
              <CreditLabel>Postal Code (required)</CreditLabel>
              <CreditInput
                type='number'
                required={true}
                value={info.postalCode}
                onChange={(e) =>
                  setInfo({ ...info, postalCode: e.target.value })
                }
              />
            </div>
          </CreditBox>
          <div>
            <p style={{ color: '#e31837', fontSize: '0.75rem' }}>
              * Make sure to fill every form in order to book.
            </p>
            <p style={{ color: '#e31837', fontSize: '0.75rem' }}>
              * Make sure to check your details before submitting.
            </p>
          </div>
        </CreditDetail>
      </MainContainer>
    </>
  );
}

export default Payment;
