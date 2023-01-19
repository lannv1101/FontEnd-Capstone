import { HeroContainer, Herobtn } from '../Hero/HeroElements';
import {
  SuccessContent,
  SuccessItems,
  SuccessNote,
  SuccessTitle,
} from './SuccessStyle';

function Success() {
  return (
    <>
      <HeroContainer>
        <SuccessContent>
          <SuccessItems>
            <SuccessTitle>Thank you for choosing Little Lemon!</SuccessTitle>
            <SuccessNote>
              We will let you know about your reservation.
            </SuccessNote>
          </SuccessItems>
          <SuccessItems>
            <Herobtn to='/'>Back to home</Herobtn>
          </SuccessItems>
        </SuccessContent>
      </HeroContainer>
    </>
  );
}

export default Success;
