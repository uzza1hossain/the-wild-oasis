import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import { getBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';

export default function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return {
    isLoading,
    data: booking,
    error,
  };
}