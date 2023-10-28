import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';

export default function useDeleteBooking() {
  const queryClint = useQueryClient();

  const navigate = useNavigate();

  const { isLoading: isDeletingBooking, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success('Booking successfully deleted');
      queryClint.invalidateQueries({
        queryKey: ['bookings'],
      });
      navigate('/');
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeletingBooking, deleteBooking };
}
