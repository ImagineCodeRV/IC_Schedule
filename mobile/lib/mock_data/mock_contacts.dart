import '../models/contact.dart';

List<Contact> mockContacts = [
  Contact(
    id: '1',
    name: 'Alice',
    phones: ['123-456-7890'],
    address: 'Rua 1, Cidade A',
    isActive: true,
    notes: 'Cliente VIP',
    status: '',
    category: '',
    type: '',
  ),
  Contact(
    id: '2',
    name: 'Bob',
    phones: ['987-654-3210'],
    address: 'Rua 2, Cidade B',
    isActive: true,
    notes: 'Preferencial',
    category: '',
    type: '',
    status: '',
  ),
  Contact(
    id: '3',
    name: 'Carol',
    phones: ['555-555-5555'],
    address: 'Rua 3, Cidade C',
    isActive: false,
    notes: 'Desativado',
    category: '',
    type: '',
    status: '',
  ),
];
