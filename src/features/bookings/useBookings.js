import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';

export default function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings,
  });

  return {
    isLoading,
    data: bookings,
    error,
  };
}
