import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading1 } = useRecentBookings();
  const { isLoading2, stays, confirmedStays } = useRecentStays();
  if (isLoading1 || isLoading2) return <Spinner />;
  console.log(bookings);
  console.log(stays);
  console.log(confirmedStays);
  // console.log(`Bookings within days: ${bookings}`);
  // console.log(`Stays: ${stays}`);
  // console.log(`Confirm stays: ${confirmedStays}`);
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>Chart stay duration</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
