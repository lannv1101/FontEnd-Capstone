import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import NavBar from './NavBar';
import Footer from '../Footer';
import Table from './Table';
import Info from './Info';
import Payment from './Payment';
import {
  Container,
  Main,
  ProgressBar,
  ProgressBarDiv,
  FormFooter,
  Buttons,
  FormBody,
  FormHeader,
  FormTitle,
} from './FormStyle';
function Form() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    date: '',
    time: '',
    cardNumber: '',
    CVV: '',
    postalCode: '',
    expDate: '',
    totalOccasion: 1,
  });
  const titles = [
    'Find a table for any occasion',
    'Sign in to collect points',
    'Finalization',
  ];
  const ShowPages = () => {
    if (page === 0) {
      return <Table info={info} setInfo={setInfo} />;
    } else if (page === 1) {
      return <Info info={info} setInfo={setInfo} />;
    } else {
      return <Payment info={info} setInfo={setInfo} />;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <NavBar />
      <Main>
        <Container>
          <ProgressBar>
            <ProgressBarDiv
              style={{
                width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%',
              }}
            ></ProgressBarDiv>
          </ProgressBar>
          <FormHeader>
            <FormTitle>{titles[page]}</FormTitle>
          </FormHeader>
          <form action='/success' onSubmit={handleSubmit}>
            <FormBody>{ShowPages()}</FormBody>
            <FormFooter>
              <div>
                <Buttons
                  disabled={page === 0}
                  onClick={() => setPage((next) => next - 1)}
                >
                  Prev
                </Buttons>
              </div>
              <div>
                <Buttons
                  disabled={
                    page === titles.length - 1 ||
                    info.date.length === 0 ||
                    info.time.length === 0
                  }
                  onClick={() => setPage((next) => next + 1)}
                >
                  Next
                </Buttons>
              </div>

              <Buttons
                type='submit'
                onClick={() => navigate('/success')}
                style={{ display: page === 2 ? 'block' : 'none' }}
                disabled={
                  info.date.length === 0 ||
                  info.time.length === 0 ||
                  info.firstName.length === 0 ||
                  info.lastName.length === 0 ||
                  info.emailAddress.length === 0 ||
                  info.cardNumber.length === 0 ||
                  info.expDate.length === 0 ||
                  info.CVV.length === 0 ||
                  info.postalCode.length === 0 ||
                  info.password.length === 0
                }
              >
                Book
              </Buttons>
            </FormFooter>
          </form>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Form;
