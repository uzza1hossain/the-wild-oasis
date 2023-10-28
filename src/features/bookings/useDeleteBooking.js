import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export default function useDeleteBooking() {
  const queryClint = useQueryClient();

  const { isLoading: isDeletingBooking, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success('Booking successfully deleted');
      queryClint.invalidateQueries({
        queryKey: ['bookings'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeletingBooking, deleteBooking };
}
