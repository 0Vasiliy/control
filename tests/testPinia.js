import { setActivePinia, createPinia } from 'pinia';
import { useEmployeeStore } from '@/stores/useEmployeeStore';

beforeEach(() => {
  setActivePinia(createPinia());
});

test('addEmployee adds a new employee', async () => {
  const store = useEmployeeStore();
  await store.addEmployee({ fullName: 'Иванов Иван', birthDate: '1990-01-01', position: 'Разработчик', salary: 100000 });
  expect(store.employees).toContainEqual(expect.objectContaining({ fullName: 'Иванов Иван' }));
});